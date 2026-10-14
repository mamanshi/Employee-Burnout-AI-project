import React from "react";
import { FaBrain, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Our Employee Burnout Predictor uses Artificial Intelligence to
            identify employee burnout early and help organizations improve
            workplace well-being and productivity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            We aim to create healthier workplaces by providing AI-powered
            burnout prediction, analytics, and actionable insights for HR
            managers and organizations.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
          alt="Team"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg">
              <FaBrain className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Prediction</h3>
              <p>Accurate burnout prediction using AI models.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg">
              <FaUsers className="text-4xl text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Employee Focus</h3>
              <p>Support employee wellness and satisfaction.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg">
              <FaChartLine className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p>Interactive dashboards and reports.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg">
              <FaShieldAlt className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Data</h3>
              <p>Your employee data is safe and protected.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;