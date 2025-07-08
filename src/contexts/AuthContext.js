import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const fetchUser = useCallback(async (sessionId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user?session_id=${sessionId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      logout();
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    // Check for existing session on app load
    const storedSessionId = localStorage.getItem('sessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
      fetchUser(storedSessionId);
    } else {
      setLoading(false);
    }
  }, [fetchUser]);

  const login = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/github`);
      window.location.href = response.data.auth_url;
    } catch (error) {
      console.error('Failed to initiate login:', error);
      throw error;
    }
  };

  const handleCallback = async (code) => {
    try {
      console.log('Calling backend callback with code:', code);
      const response = await axios.get(`${API_BASE_URL}/auth/github/callback?code=${code}`);
      console.log('Backend response:', response.data);
      
      const { session_id, user } = response.data;
      
      setSessionId(session_id);
      setUser(user);
      localStorage.setItem('sessionId', session_id);
      
      return true;
    } catch (error) {
      console.error('Failed to complete login:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setSessionId(null);
    localStorage.removeItem('sessionId');
  };

  const value = {
    user,
    sessionId,
    loading,
    login,
    logout,
    handleCallback,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 