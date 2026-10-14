import React from "react";
import {
  Brain,
  Users,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  Clock,
  Target,
  ArrowRight,
} from "lucide-react";

function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Burnout Detection",
      description:
        "Use intelligent analysis to identify early signs of employee burnout before they become serious workplace problems.",
    },
    {
      icon: AlertTriangle,
      title: "Early Risk Identification",
      description:
        "Identify employees who may be experiencing increasing workload, excessive overtime or unhealthy work patterns.",
    },
    {
      icon: BarChart3,
      title: "Workforce Analytics",
      description:
        "Transform employee data into meaningful insights with easy-to-understand analytics, charts and performance indicators.",
    },
    {
      icon: Users,
      title: "Employee Well-Being",
      description:
        "Understand employee workload, work-life balance and well-being to create a healthier and more supportive workplace.",
    },
    {
      icon: TrendingUp,
      title: "Predictive HR Analytics",
      description:
        "Analyze current and historical patterns to help HR teams make proactive, data-driven workforce decisions.",
    },
    {
      icon: Target,
      title: "Actionable HR Strategies",
      description:
        "Convert insights into practical actions such as workload balancing, employee support and preventive interventions.",
    },
  ];

  const benefits = [
    "Reduce employee burnout",
    "Improve employee engagement",
    "Identify workload problems early",
    "Support better work-life balance",
    "Improve employee retention",
    "Enable data-driven HR decisions",
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide mb-6">
            OUR SOLUTIONS
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Smarter Solutions for a
            <span className="text-blue-600"> Healthier Workforce</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            BurnoutPredict AI helps organizations understand employee
            well-being, identify burnout risks and take preventive action
            using intelligent workforce analytics.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Explore Solutions
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold uppercase tracking-wide">
              The Challenge
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              From Workplace Challenges to
              <span className="text-blue-600"> Smart Solutions</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
              Traditional HR systems often react after employees are already
              experiencing burnout. BurnoutPredict AI helps organizations
              move from reactive management to proactive employee support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Challenge */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="text-red-600" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                Common Workplace Challenges
              </h3>

              <div className="space-y-4">
                {[
                  "Increasing employee workload",
                  "Excessive overtime",
                  "Poor work-life balance",
                  "Low employee engagement",
                  "Hidden burnout risks",
                  "Unexpected employee turnover",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Brain size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-5">
                Our Intelligent Solution
              </h3>

              <div className="space-y-4">
                {[
                  "AI-based burnout prediction",
                  "Employee risk scoring",
                  "Workload and overtime analysis",
                  "Real-time workforce insights",
                  "Early warning notifications",
                  "Actionable HR recommendations",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <span className="text-white font-bold">✓</span>
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold uppercase tracking-wide">
              What We Solve
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Solutions Built for Modern HR Teams
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-lg">
              Powerful capabilities designed to help organizations protect
              employee well-being while improving workforce performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                    <Icon
                      size={28}
                      className="text-blue-600 group-hover:text-white transition"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                    Learn more
                    <ArrowRight
                      size={17}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* How Solution Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold uppercase tracking-wide">
              How It Helps
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Data Into Preventive Action
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                number: "01",
                title: "Collect",
                text: "Gather relevant workforce and workload indicators.",
                icon: BarChart3,
              },
              {
                number: "02",
                title: "Analyze",
                text: "AI analyzes employee patterns and workplace factors.",
                icon: Brain,
              },
              {
                number: "03",
                title: "Predict",
                text: "Generate burnout risk levels and identify warning signs.",
                icon: TrendingUp,
              },
              {
                number: "04",
                title: "Act",
                text: "Help HR teams take timely preventive action.",
                icon: Target,
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative p-7 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-bold text-blue-100">
                      {step.number}
                    </span>

                    <Icon className="text-blue-600" size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="text-white">
              <p className="text-blue-200 font-bold uppercase tracking-wide">
                Business Impact
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Build a More Resilient and
                <span className="text-blue-200">
                  {" "}Engaged Workforce
                </span>
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-relaxed">
                With the right insights at the right time, HR teams can
                address employee challenges before they become costly
                organizational problems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl text-white flex gap-3 items-center"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-medium">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-blue-600" size={34} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built With Responsible Data Practices
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-lg">
            Employee well-being data deserves responsible handling.
            BurnoutPredict AI is designed around secure access, responsible
            analytics and meaningful HR insights.
          </p>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <Clock className="mx-auto text-blue-400 mb-6" size={42} />

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Don't Wait for Burnout to Become a Problem
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Start using intelligent workforce insights to identify risks
            earlier and support your employees better.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Try Demo
            </button>

            <button className="px-8 py-4 border border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-800 transition">
              Book a Demo
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Solutions;