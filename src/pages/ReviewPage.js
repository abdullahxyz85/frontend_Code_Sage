import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Search, Loader2, AlertCircle, CheckCircle, Info } from 'lucide-react';
import axios from 'axios';

const ReviewPage = () => {
  const { isAuthenticated, sessionId } = useAuth();
  const navigate = useNavigate();
  const [prUrl, setPrUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [reviewResult, setReviewResult] = useState(null);
  const [error, setError] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prUrl.trim()) {
      setError('Please enter a GitHub pull request URL');
      return;
    }

    setLoading(true);
    setError('');
    setReviewResult(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/review-pr`, {
        pr_url: prUrl.trim(),
        github_token: sessionId  // This should be the actual GitHub access token, not session ID
      });

      setReviewResult(response.data);
    } catch (error) {
      console.error('Review failed:', error);
      setError(error.response?.data?.detail || 'Failed to review pull request');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <AlertCircle className="h-5 w-5" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5" />;
      case 'info':
        return <Info className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Pull Request</h1>
        <p className="text-gray-600">
          Enter a GitHub pull request URL to get an AI-powered code review
        </p>
      </div>

      {/* PR URL Input Form */}
      <div className="card mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pr-url" className="block text-sm font-medium text-gray-700 mb-2">
              GitHub Pull Request URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                id="pr-url"
                value={prUrl}
                onChange={(e) => setPrUrl(e.target.value)}
                placeholder="https://github.com/owner/repo/pull/123"
                className="input-field flex-1"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !prUrl.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Review PR
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800">{error}</span>
            </div>
          </div>
        )}

        {reviewResult && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Review completed successfully!</span>
            </div>
          </div>
        )}
      </div>

      {/* Review Results */}
      {reviewResult && (
        <div className="space-y-6">
          {/* Summary */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                Review Summary
              </h2>
              {reviewResult.pr_number && (
                <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  PR #{reviewResult.pr_number}
                </span>
              )}
            </div>
            <p className="text-gray-700">{reviewResult.summary}</p>
            {reviewResult.score && (
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Review Score</span>
                  <span className="text-lg font-bold text-primary-600">
                    {reviewResult.score}/100
                  </span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${reviewResult.score}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Issues */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
              Issues Found ({reviewResult.issues ? reviewResult.issues.length : 0})
            </h2>
            {reviewResult.issues && reviewResult.issues.length > 0 ? (
              <div className="space-y-3">
                {reviewResult.issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${getSeverityColor(issue.severity)}`}
                  >
                    <div className="flex items-start">
                      {getSeverityIcon(issue.severity)}
                      <div className="ml-3 flex-1">
                        <h4 className="font-medium">{issue.message}</h4>
                        {issue.line && (
                          <p className="text-sm mt-1">Line {issue.line}</p>
                        )}
                        {issue["file-name"] && (
                          <p className="text-sm mt-1 text-gray-600">File: {issue["file-name"]}</p>
                        )}
                        {issue.suggestion && (
                          <p className="text-sm mt-2 font-medium">Suggestion: {issue.suggestion}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">No issues found! Your code looks good.</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {reviewResult.suggestions && reviewResult.suggestions.length > 0 && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Info className="h-6 w-6 text-blue-600 mr-2" />
                Suggestions ({reviewResult.suggestions.length})
              </h2>
              <div className="space-y-3">
                {reviewResult.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-blue-200 bg-blue-50"
                  >
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="ml-3 flex-1">
                        <p className="text-blue-800">{suggestion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


        </div>
      )}
    </div>
  );
};

export default ReviewPage; 