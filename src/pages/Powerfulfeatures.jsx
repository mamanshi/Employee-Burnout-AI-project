import React from "react";
import {
  Brain,
  BarChart3,
  Activity,
  Clock,
  Bell,
  Users,
  HeartPulse,
  TrendingUp,
  ShieldCheck,
  FileText,
  Target,
  ArrowRight,
} from "lucide-react";

function PowerfulFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Burnout Prediction",
      description:
        "Advanced AI analyzes employee workload, attendance, overtime, meetings, tasks and work patterns to identify early signs of burnout.",
    },
    {
      icon: BarChart3,
      title: "Burnout Risk Score",
      description:
        "Get a clear Low, Moderate or High risk score for each employee and quickly identify where support may be needed.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description:
        "Monitor important workplace indicators and detect changes in employee workload and working patterns in real time.",
    },
    {
      icon: Clock,
      title: "Workload Analysis",
      description:
        "Analyze working hours, overtime, tasks and meetings to identify excessive workload and potential employee stress.",
    },
    {
      icon: Bell,
      title: "Early Risk Alerts",
      description:
        "Receive timely alerts when an employee's burnout risk increases, allowing HR teams to take preventive action.",
    },
    {
      icon: Users,
      title: "Employee Insights",
      description:
        "Get meaningful insights into employee workload, attendance, productivity and work-life balance from one platform.",
    },
    {
      icon: HeartPulse,
      title: "Well-Being Analytics",
      description:
        "Understand employee well-being trends and discover workplace factors that may affect engagement and satisfaction.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Use historical and current data to identify burnout trends and support smarter, data-driven HR decisions.",
    },
    {
      icon: Target,
      title: "Actionable Recommendations",
      description:
        "Turn risk insights into practical strategies that help HR teams improve workload management and employee support.",
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description:
        "Generate structured reports covering employee risk levels, workload patterns and overall organizational well-being.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Data Management",
      description:
        "Protect important employee information through secure data handling and controlled access to sensitive insights.",
    },
    {
      icon: BarChart3,
      title: "HR Dashboard",
      description:
        "Access easy-to-understand charts, graphs and statistics that make complex employee data simple to analyze.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-5">
            POWERFUL FEATURES
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Powerful Features for
            <span className="text-blue-600"> Smarter HR</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
            BurnoutPredict AI combines artificial intelligence, predictive
            analytics and employee well-being insights to help organizations
            detect burnout early and build healthier workplaces.
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide">
              Everything You Need
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Intelligent Tools for Employee Well-Being
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Powerful capabilities designed to help HR teams move from
              reactive problem-solving to proactive employee support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                    <Icon
                      size={28}
                      className="text-blue-600 group-hover:text-white transition"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Link */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Explore feature
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Why BurnoutPredict */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide">
                Why BurnoutPredict AI?
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                From Data to
                <span className="text-blue-600"> Preventive Action</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Employee burnout can develop gradually through excessive
                workload, long working hours, overtime and poor work-life
                balance. Our platform helps HR teams identify these patterns
                before they become serious problems.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Identify employees at higher burnout risk",
                  "Understand workload and overtime patterns",
                  "Monitor employee well-being indicators",
                  "Support proactive HR decision-making",
                  "Improve employee engagement and retention",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>

                ))}

              </div>

            </div>

            {/* Analytics Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">

              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-blue-100 text-sm">
                    Employee Well-Being
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    Risk Overview
                  </h3>
                </div>

                <HeartPulse size={36} />
              </div>

              <div className="bg-white/10 rounded-2xl p-6 mb-5">
                <div className="flex justify-between mb-3">
                  <span>Overall Risk</span>
                  <span className="font-bold">
                    Moderate
                  </span>
                </div>

                <div className="w-full h-3 bg-white/20 rounded-full">
                  <div className="w-3/5 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-blue-100 text-sm">
                    Workload
                  </p>
                  <h4 className="text-2xl font-bold mt-2">
                    68%
                  </h4>
                </div>

                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-blue-100 text-sm">
                    Well-being
                  </p>
                  <h4 className="text-2xl font-bold mt-2">
                    82%
                  </h4>
                </div>

                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-blue-100 text-sm">
                    Overtime
                  </p>
                  <h4 className="text-2xl font-bold mt-2">
                    24h
                  </h4>
                </div>

                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-blue-100 text-sm">
                    Risk Trend
                  </p>
                  <h4 className="text-2xl font-bold mt-2">
                    ↓ 12%
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Predict Burnout Before
            <span className="text-blue-400"> It Becomes Resignation</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Give your HR team the intelligence they need to identify
            burnout risks early, support employees proactively and create
            a healthier workplace.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

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

export default PowerfulFeatures;
