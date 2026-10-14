import React from "react";
import {
  AlertTriangle,
  TrendingDown,
  Users,
  Clock,
  DollarSign,
  UserMinus,
  BarChart3,
  HeartPulse,
  Target,
  ArrowRight,
  Brain,
  Bell,
} from "lucide-react";

function HiddenCost() {
  const costs = [
    {
      icon: UserMinus,
      title: "Employee Turnover",
      description:
        "Burnout can increase employee turnover and create additional recruitment, hiring and training expenses.",
    },
    {
      icon: TrendingDown,
      title: "Lost Productivity",
      description:
        "Overworked employees may experience reduced concentration, efficiency and overall productivity.",
    },
    {
      icon: Clock,
      title: "Excessive Overtime",
      description:
        "Continuous overtime can increase operational costs while negatively affecting employee well-being.",
    },
    {
      icon: DollarSign,
      title: "Replacement Costs",
      description:
        "Replacing experienced employees requires valuable time and resources for hiring and onboarding.",
    },
    {
      icon: Users,
      title: "Team Pressure",
      description:
        "When employees leave or become overloaded, additional workload can be transferred to other team members.",
    },
    {
      icon: HeartPulse,
      title: "Employee Well-Being",
      description:
        "Long-term workplace stress can affect employee engagement, satisfaction and workplace morale.",
    },
  ];

  const warningSigns = [
    "Increasing overtime hours",
    "Heavy workload",
    "Frequent absenteeism",
    "Declining productivity",
    "Low employee engagement",
    "Increasing employee turnover",
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-6">
            <AlertTriangle size={18} />
            HIDDEN COST OF BURNOUT
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            The Hidden Cost of
            <span className="text-red-600"> Employee Burnout</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Employee burnout is more than a well-being issue. It can silently
            affect productivity, employee retention, team performance and
            organizational growth.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition flex items-center gap-2">
              Explore the Impact
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-red-600 font-bold uppercase tracking-wide">
                The Real Problem
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Burnout Has a Cost
                <span className="text-red-600"> Beyond Salaries</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Burnout often develops gradually. Small warning signs such as
                excessive workload, long working hours and reduced engagement
                can eventually become serious organizational challenges.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                The earlier organizations identify these signals, the easier
                it becomes to support employees and prevent unnecessary
                business costs.
              </p>

              <div className="mt-8 space-y-4">
                {warningSigns.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">✓</span>
                    </div>

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ANALYTICS CARD */}
            <div className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl text-white">

              <div className="flex justify-between items-center mb-8">

                <div>
                  <p className="text-gray-400 text-sm">
                    Organizational Impact
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    Burnout Risk Overview
                  </h3>
                </div>

                <TrendingDown
                  size={40}
                  className="text-red-400"
                />

              </div>

              {/* PRODUCTIVITY */}
              <div className="bg-white/10 p-5 rounded-2xl mb-5">

                <div className="flex justify-between">
                  <span className="text-gray-300">
                    Productivity Impact
                  </span>

                  <span className="text-red-400 font-bold">
                    High
                  </span>
                </div>

                <div className="mt-3 w-full h-3 bg-white/10 rounded-full">
                  <div className="w-4/5 h-3 bg-red-500 rounded-full"></div>
                </div>

              </div>

              {/* TURNOVER */}
              <div className="bg-white/10 p-5 rounded-2xl mb-5">

                <div className="flex justify-between">
                  <span className="text-gray-300">
                    Turnover Risk
                  </span>

                  <span className="text-orange-400 font-bold">
                    Moderate
                  </span>
                </div>

                <div className="mt-3 w-full h-3 bg-white/10 rounded-full">
                  <div className="w-3/5 h-3 bg-orange-500 rounded-full"></div>
                </div>

              </div>

              {/* WORKLOAD */}
              <div className="bg-white/10 p-5 rounded-2xl">

                <div className="flex justify-between">
                  <span className="text-gray-300">
                    Workload Pressure
                  </span>

                  <span className="text-yellow-400 font-bold">
                    Increasing
                  </span>
                </div>

                <div className="mt-3 w-full h-3 bg-white/10 rounded-full">
                  <div className="w-2/3 h-3 bg-yellow-500 rounded-full"></div>
                </div>

              </div>

              <div className="mt-7 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">

                <p className="text-gray-400 text-sm">
                  Key Insight
                </p>

                <p className="mt-2 font-semibold">
                  Ignoring early burnout signals can turn small workforce
                  problems into larger organizational costs.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SIX HIDDEN COSTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-red-600 font-bold uppercase tracking-wide">
              Where Costs Hide
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              The Hidden Costs of Burnout
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-lg">
              Burnout affects employees, teams and the organization as a
              whole. Its financial and operational impact can remain hidden.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {costs.map((cost, index) => {

              const Icon = cost.icon;

              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition">

                    <Icon
                      size={28}
                      className="text-red-600 group-hover:text-white transition"
                    />

                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {cost.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {cost.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* REACTIVE VS PROACTIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-bold uppercase tracking-wide">
              A Better Approach
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Reactive HR vs Proactive HR
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600">
              Organizations can reduce hidden costs by identifying employee
              risks before they become serious problems.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* REACTIVE */}
            <div className="p-8 rounded-3xl bg-red-50 border border-red-100">

              <div className="flex items-center gap-4 mb-7">

                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                  <TrendingDown
                    className="text-red-600"
                    size={28}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Reactive Approach
                </h3>

              </div>

              <div className="space-y-5">

                {[
                  "Act after employees leave",
                  "Discover burnout too late",
                  "Respond after productivity drops",
                  "Higher replacement costs",
                  "Limited workforce visibility",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-red-600 font-bold">
                      ✕
                    </span>

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>

                ))}

              </div>

            </div>

            {/* PROACTIVE */}
            <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl">

              <div className="flex items-center gap-4 mb-7">

                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  Proactive Approach
                </h3>

              </div>

              <div className="space-y-5">

                {[
                  "Identify burnout risks early",
                  "Monitor workload patterns",
                  "Support employees proactively",
                  "Improve employee retention",
                  "Make data-driven decisions",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="font-bold">
                      ✓
                    </span>

                    <span className="text-blue-50">
                      {item}
                    </span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="text-white">

              <p className="text-blue-200 font-bold uppercase tracking-wide">
                BurnoutPredict AI
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Turn Hidden Risks Into
                <span className="text-blue-200">
                  {" "}Actionable Insights
                </span>
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-relaxed">
                BurnoutPredict AI helps HR teams analyze workplace patterns,
                identify potential burnout risks and take preventive action
                before problems become expensive.
              </p>

              <button className="mt-8 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                Explore Our Solution
                <ArrowRight size={18} />
              </button>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: Brain,
                  title: "AI Prediction",
                },
                {
                  icon: BarChart3,
                  title: "Risk Analytics",
                },
                {
                  icon: Bell,
                  title: "Early Alerts",
                },
                {
                  icon: Target,
                  title: "Smart Actions",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/20 p-7 rounded-2xl text-white"
                  >

                    <Icon size={32} className="mb-5" />

                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="text-blue-100 text-sm mt-2">
                      Intelligent insights for proactive HR decisions.
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gray-900">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <DollarSign
            className="mx-auto text-red-400 mb-6"
            size={44}
          />

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Don't Let Hidden Costs
            <span className="text-red-400">
              {" "}Grow Unnoticed
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Identify burnout risks early, support your employees and build a
            healthier and more sustainable workforce.
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

export default HiddenCost;