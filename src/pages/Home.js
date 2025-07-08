import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Github,
  Code,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Globe,
  Lock,
  MessageSquare,
  GitBranch,
  Activity,
  Award,
  Rocket,
} from "lucide-react";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center pt-2 pb-20">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>AI-Powered Code Review Platform</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Welcome to{" "}
          <span className="inline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CodeSage
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your development workflow with intelligent code reviews
          powered by advanced AI. Get instant feedback, security insights, and
          quality improvements for your pull requests.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          {isAuthenticated ? (
            <Link
              to="/review"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
            >
              <span>Start Reviewing Code</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
            >
              <Github className="h-5 w-5" />
              <span>Get Started with GitHub</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600 text-sm">PRs Reviewed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">AI Availability</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose CodeSage?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered features designed to enhance your development
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Intelligent Code Analysis
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Advanced AI analyzes your code changes, identifies potential
              issues, suggests improvements, and provides detailed explanations
              for each recommendation.
            </p>
          </div>

          <div className="card hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Security & Quality Assurance
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Detect security vulnerabilities, code smells, and maintainability
              issues before they reach production. Ensure your code meets
              industry standards.
            </p>
          </div>

          <div className="card hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Instant Results
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Get comprehensive reviews in seconds, not hours. Speed up your
              development workflow and ship code faster with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How CodeSage Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, powerful, and efficient - get started in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Connect GitHub</h3>
            <p className="text-gray-600 leading-relaxed">
              Securely authenticate with your GitHub account using OAuth
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Submit PR URL</h3>
            <p className="text-gray-600 leading-relaxed">
              Paste any GitHub pull request URL and let our AI analyze it
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Our advanced AI analyzes your code changes and identifies issues
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              4
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive detailed feedback, suggestions, and actionable insights
            </p>
          </div>
        </div>
      </div>

      {/* Future Scope Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Future Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting features coming soon to enhance your development experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Team Collaboration</h3>
            </div>
            <p className="text-gray-600">
              Share reviews with team members, add comments, and collaborate on
              code improvements.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <GitBranch className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">
                Multi-Repository Support
              </h3>
            </div>
            <p className="text-gray-600">
              Review pull requests across multiple repositories and
              organizations.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
            </div>
            <p className="text-gray-600">
              Track code quality metrics, review statistics, and team
              performance insights.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Lock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold">Enterprise Security</h3>
            </div>
            <p className="text-gray-600">
              Advanced security features, SSO integration, and compliance
              certifications.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold">Multi-Language Support</h3>
            </div>
            <p className="text-gray-600">
              Support for additional programming languages and frameworks.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Custom Rules Engine</h3>
            </div>
            <p className="text-gray-600">
              Create custom review rules and guidelines for your team's specific
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Code Reviews?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers who trust CodeSage for their code
            review needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link
                to="/review"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Rocket className="h-5 w-5" />
                <span>Start Reviewing Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Github className="h-5 w-5" />
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Free tier available</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
