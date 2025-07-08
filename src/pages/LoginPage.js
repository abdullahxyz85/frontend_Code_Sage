import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { login, handleCallback, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Handle OAuth callback from GitHub
    const code = searchParams.get('code');
    const sessionId = searchParams.get('session_id');
    const user = searchParams.get('user');
    
    if (code) {
      console.log('Received OAuth code:', code);
      handleCallback(code)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error('Login failed:', error);
          // Stay on login page to show error
        });
    } else if (sessionId && user) {
      // Handle direct redirect from backend with session data
      console.log('Received session data from backend');
      // Store session data
      localStorage.setItem('sessionId', sessionId);
      // Navigate to home page
      navigate('/');
    }
  }, [searchParams, handleCallback, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleGitHubLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Failed to initiate login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary-100">
            <Github className="h-6 w-6 text-primary-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Connect with GitHub to review pull requests
          </p>
        </div>
        
        <div className="card">
          <div className="space-y-6">
            <div>
              <button
                onClick={handleGitHubLogin}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                Continue with GitHub
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-gray-500">
                By signing in, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="flex items-center justify-center text-primary-600 hover:text-primary-500"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 