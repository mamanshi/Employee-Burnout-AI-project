import {
  FaBrain,
  FaHeartbeat,
  FaChartLine,
  FaClock,
  FaCalendarAlt,
  FaComments,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Burnout Risk Prediction",
      icon: <FaBrain />,
      desc: "Predict employee burnout before it becomes serious.",
    },
    {
      title: "Employee Wellness Dashboard",
      icon: <FaHeartbeat />,
      desc: "Monitor employee wellbeing in real time.",
    },
    {
      title: "Workload Analysis",
      icon: <FaChartLine />,
      desc: "Identify overloaded teams with AI insights.",
    },
    {
      title: "Overtime Monitoring",
      icon: <FaClock />,
      desc: "Track overtime and improve work-life balance.",
    },
    {
      title: "Leave Pattern Analysis",
      icon: <FaCalendarAlt />,
      desc: "Analyze leave trends and attendance records.",
    },
    {
      title: "Mood & Feedback Tracking",
      icon: <FaComments />,
      desc: "Collect employee feedback and sentiment.",
    },
    {
      title: "AI Recommendations",
      icon: <FaRobot />,
      desc: "Receive smart AI-powered HR suggestions.",
    },
    {
      title: "HR Analytics",
      icon: <FaUsers />,
      desc: "Generate detailed reports for better decisions.",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">

          <p className="text-[#6F4E37] font-semibold uppercase tracking-wider">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-[#3E2723] mt-3">
            Powerful Features
          </h2>
<p className="text-[#A78BFA] mt-4 max-w-2xl mx-auto">
  Our AI-powered platform helps organizations predict employee burnout,
  monitor wellbeing, and improve workplace productivity.
</p>


        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-14 h-14 bg-[#6F4E37] text-white rounded-xl flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#3E2723] mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;