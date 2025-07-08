import React from "react";
import { Users, Star, Globe, Heart, Award, Code, Github } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Users className="h-4 w-4" />
          <span>About CodeSage</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Our Mission & Vision
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          CodeSage is dedicated to revolutionizing code reviews with AI, making
          software development faster, safer, and more collaborative for
          everyone.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex flex-col items-center text-center">
          <Star className="h-10 w-10 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Empower developers and teams to deliver high-quality, secure code
            through instant, intelligent, and actionable AI-powered reviews.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 flex flex-col items-center text-center">
          <Globe className="h-10 w-10 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To become the global standard for automated code review, fostering a
            culture of collaboration, learning, and continuous improvement in
            software engineering.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Heart className="h-8 w-8 text-red-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Empathy</h3>
            <p className="text-gray-600">
              We put users first and strive to understand their needs and
              challenges.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Award className="h-8 w-8 text-yellow-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Excellence</h3>
            <p className="text-gray-600">
              We are committed to delivering the highest quality in everything
              we do.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Code className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace new ideas and technologies to solve real-world
              problems.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Meet the Team
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://api.dicebear.com/7.x/identicon/svg?seed=founder"
              alt="Founder"
              className="h-20 w-20 rounded-full mb-3 border-4 border-blue-200"
            />
            <div className="font-semibold">Alex Johnson</div>
            <div className="text-gray-500 text-sm">Founder & Lead Engineer</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://api.dicebear.com/7.x/identicon/svg?seed=designer"
              alt="Designer"
              className="h-20 w-20 rounded-full mb-3 border-4 border-purple-200"
            />
            <div className="font-semibold">Priya Patel</div>
            <div className="text-gray-500 text-sm">Product Designer</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://api.dicebear.com/7.x/identicon/svg?seed=dev"
              alt="Developer"
              className="h-20 w-20 rounded-full mb-3 border-4 border-green-200"
            />
            <div className="font-semibold">Michael Lee</div>
            <div className="text-gray-500 text-sm">Full Stack Developer</div>
          </div>
        </div>
      </div>

      {/* Open Source Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Open Source & Community
        </h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          CodeSage is open source and welcomes contributions from developers
          worldwide. Join our community and help shape the future of code
          review.
        </p>
        <a
          href="https://github.com/your-org/codesage"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          <Github className="h-5 w-5 mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
