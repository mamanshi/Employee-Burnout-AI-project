import React from "react";
// Sahi image paths (bina spaces ke - file renames ke mutabik)
import Ai from "../assets/Ai.png";
import earlyriskdetention from "../assets/early-risk-detention.png";
import ActionableInsights from "../assets/actionable-insights.png";
import { useNavigate } from "react-router-dom";

// Fix 1: Component ka naam 'Solution' hona chahiye kyunki file ka naam Solution.jsx hai
const Solution = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content Side */}
          <div className="flex-1">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">
              AI-POWERED EMPLOYEE WELL-BEING PLATFORM
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
              Predict Burnout.
              <br />
              Prevent Turnover.
              <br />
              <span className="text-purple-600">Build Healthier Teams.</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              BurnoutPredict AI uses machine learning to detect early signs of
              employee burnout and provide actionable insights to help
              organizations improve well-being and productivity.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200">
                Book Demo
              </button>

              <button
                onClick={() => navigate("/dashboard")}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-200"
              >
                Try Demo Dashboard
              </button>
            </div>

            {/* Badges/Highlights Area */}
            <div className="flex flex-wrap gap-6 mt-8 text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <img src={Ai} alt="AI status" className="h-[23px]" />
                <span>AI powered detection</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={earlyriskdetention}
                  alt="Risk Warning"
                  className="h-[23px]"
                />
                <span>Early risk detection</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={ActionableInsights}
                  alt="Insights"
                  className="h-[23px]"
                />
                <span>Actionable Insights</span>
              </div>
              <div className="flex items-center text-purple-600 font-semibold">
                <span>Improve retention & well-being</span>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mockup Side */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Welcome back, HR Manager 👋
                </h2>
                <p className="text-gray-500 text-sm">
                  Here's your organization's well-being overview
                </p>
              </div>
              <select className="border text-gray-600 rounded-lg px-3 py-2 bg-white outline-none text-sm">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <p className="text-gray-400 text-xs font-medium">
                  Total Employees
                </p>
                <h3 className="text-xl font-bold text-gray-700 mt-1">512</h3>
              </div>
              <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                <p className="text-red-400 text-xs font-medium">At Risk</p>
                <h3 className="text-xl font-bold text-red-500 mt-1">87</h3>
              </div>
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <p className="text-orange-400 text-xs font-medium">
                  Moderate Risk
                </p>
                <h3 className="text-xl font-bold text-orange-500 mt-1">146</h3>
              </div>
              <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                <p className="text-green-400 text-xs font-medium">Low Risk</p>
                <h3 className="text-xl font-bold text-green-500 mt-1">279</h3>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                <p className="text-blue-400 text-xs font-medium">
                  Interventions
                </p>
                <h3 className="text-xl font-bold text-blue-500 mt-1">23</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800"></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-50 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl text-gray-800">AI Prediction</h3>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Predict employee burnout before it happens using smart ML patterns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-50 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl text-gray-800">Analytics</h3>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Real-time employee health and organizational data insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-50 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl text-gray-800">Alerts</h3>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Smart notification systems to flags risks to management securely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-50 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl text-gray-800">Reports</h3>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Export comprehensive HR summaries ready for leadership alignment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-4 md:mx-auto my-16 rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-10 py-14 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Build a Healthier Workforce
          </h2>
          <p className="mt-4 opacity-90">
            Start predicting burnout and nurturing workplace safety metrics today.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition duration-200">
              Book Demo
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-700 transition duration-200">
              Free Trial
            </button>
          </div>
        </div>
        <img
          src="/images/cta.png"
          alt="CTA Element Illustration"
          className="w-72 max-w-full h-auto object-contain"
        />
      </section>
    </>
  );
};

// Fix 2: Sahi export name
export default Solution;