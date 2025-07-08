import React from "react";
import {
  Code,
  Shield,
  Zap,
  MessageSquare,
  GitBranch,
  Activity,
  Lock,
  Globe,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart3,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Intelligent Code Analysis",
      description:
        "Advanced AI that understands context, identifies potential issues, and suggests improvements with detailed explanations.",
      gradient: "from-blue-500 to-blue-600",
      benefits: [
        "Context-aware suggestions",
        "Detailed explanations",
        "Best practices recommendations",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Security & Quality Assurance",
      description:
        "Detect security vulnerabilities, code smells, and maintainability issues before they reach production.",
      gradient: "from-green-500 to-green-600",
      benefits: [
        "Security vulnerability detection",
        "Code quality metrics",
        "Industry standard compliance",
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Instant Results",
      description:
        "Get comprehensive reviews in seconds, not hours. Speed up your development workflow significantly.",
      gradient: "from-purple-500 to-purple-600",
      benefits: [
        "Real-time analysis",
        "Quick feedback loops",
        "Faster development cycles",
      ],
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Collaborative Reviews",
      description:
        "Share reviews with team members, add comments, and collaborate on code improvements together.",
      gradient: "from-indigo-500 to-indigo-600",
      benefits: ["Team collaboration", "Comment system", "Knowledge sharing"],
    },
    {
      icon: <GitBranch className="h-8 w-8 text-white" />,
      title: "Multi-Repository Support",
      description:
        "Review pull requests across multiple repositories and organizations seamlessly.",
      gradient: "from-pink-500 to-pink-600",
      benefits: [
        "Cross-repository reviews",
        "Organization-wide insights",
        "Unified dashboard",
      ],
    },
    {
      icon: <Activity className="h-8 w-8 text-white" />,
      title: "Analytics & Insights",
      description:
        "Track code quality metrics, review statistics, and team performance insights over time.",
      gradient: "from-orange-500 to-orange-600",
      benefits: ["Performance tracking", "Quality metrics", "Team insights"],
    },
  ];

  const upcomingFeatures = [
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Enterprise Security",
      description:
        "Advanced security features, SSO integration, and compliance certifications for enterprise teams.",
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: "Multi-Language Support",
      description:
        "Support for additional programming languages and frameworks beyond the current offerings.",
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Custom Rules Engine",
      description:
        "Create custom review rules and guidelines for your team's specific needs and standards.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Team Management",
      description:
        "Advanced team management features with role-based access control and permissions.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-pink-600" />,
      title: "Advanced Analytics",
      description:
        "Deep analytics and reporting capabilities for code quality and team performance.",
    },
    {
      icon: <Target className="h-6 w-6 text-orange-600" />,
      title: "Automated Workflows",
      description:
        "Set up automated review workflows and integrate with your existing CI/CD pipelines.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Comprehensive Feature Set</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          CodeSage
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Features
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
          Discover the powerful features that make CodeSage the ultimate
          AI-powered code review platform for modern development teams.
        </p>
      </div>

      {/* Current Features */}
      <div className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for intelligent code reviews and quality
            assurance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Features */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting new features that will revolutionize your development
            workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-100 p-2 rounded-lg">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why CodeSage Stands Out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare how CodeSage delivers superior value compared to traditional
            code review methods
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Speed</h3>
            <p className="text-gray-600 mb-4">
              Get reviews in seconds instead of hours or days
            </p>
            <div className="text-3xl font-bold text-blue-600">10x Faster</div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Accuracy</h3>
            <p className="text-gray-600 mb-4">
              AI-powered analysis catches issues humans might miss
            </p>
            <div className="text-3xl font-bold text-green-600">99.9%</div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Consistency</h3>
            <p className="text-gray-600 mb-4">
              Consistent review standards across all team members
            </p>
            <div className="text-3xl font-bold text-purple-600">100%</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start using CodeSage today and transform your code review process
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
            >
              <Star className="h-5 w-5" />
              <span>Get Started Free</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
