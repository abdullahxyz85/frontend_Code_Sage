import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Github,
  LogOut,
  Menu,
  X,
  Code,
  BookOpen,
  Users,
  Settings,
} from "lucide-react";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeSage
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                AI-Powered Code Review
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
            >
              <BookOpen className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link
              to="/features"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
            >
              <Code className="h-4 w-4" />
              <span>Features</span>
            </Link>

            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
            >
              <Users className="h-4 w-4" />
              <span>About</span>
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/review"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Review PR
                </Link>

                <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg">
                  {user?.avatar_url && (
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      {user?.login}
                    </span>
                    <span className="text-xs text-gray-500">Developer</span>
                  </div>
                  <button
                    onClick={logout}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-100"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>Login with GitHub</span>
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Home</span>
              </Link>

              <Link
                to="/features"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Code className="h-4 w-4" />
                <span>Features</span>
              </Link>

              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>About</span>
              </Link>

              {isAuthenticated ? (
                <div className="space-y-4">
                  <Link
                    to="/review"
                    className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Review PR
                  </Link>

                  <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg">
                    {user?.avatar_url && (
                      <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="h-8 w-8 rounded-full"
                      />
                    )}
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-700">
                        {user?.login}
                      </div>
                      <div className="text-xs text-gray-500">Developer</div>
                    </div>
                    <button
                      onClick={logout}
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github className="h-4 w-4 inline mr-2" />
                  Login with GitHub
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
