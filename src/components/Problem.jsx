function Problem() {
  const problems = [
    {
      title: "Employee Stress",
      icon: "😓",
      desc: "Heavy workload and continuous pressure.",
    },
    {
      title: "Burnout",
      icon: "🔥",
      desc: "Mental and physical exhaustion.",
    },
    {
      title: "Low Productivity",
      icon: "📉",
      desc: "Reduced efficiency and motivation.",
    },
    {
      title: "Resignation",
      icon: "🚪",
      desc: "Employees start leaving the company.",
    },
    {
      title: "Hiring Cost",
      icon: "💰",
      desc: "Recruitment and training expenses increase.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-[#6F4E37] font-semibold uppercase">
            The Challenge
          </p>

          <h2 className="text-5xl font-bold text-[#3E2723] mt-3">
            The Hidden Cost of Employee Burnout
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Employee burnout creates a chain reaction that affects
            productivity, employee wellbeing, and business growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {problems.map((item, index) => (

            <div
              key={index}
              className="bg-[#F8F5F2] rounded-2xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-2 duration-300"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#3E2723] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Problem;