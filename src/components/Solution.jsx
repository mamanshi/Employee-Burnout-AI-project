function Solution() {
  const employeeData = [
    "Attendance",
    "Meetings",
    "Tasks",
    "Work Hours",
    "Employee Feedback",
  ];

  const aiResults = [
    "Burnout Risk Score",
    "AI Recommendations",
    "Healthier Teams",
  ];

  return (
    <section className="py-24 bg-[#F8F5F2]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#6F4E37] font-semibold uppercase">
            How It Works
          </p>

          <h2 className="text-5xl font-bold text-[#3E2723] mt-3">
            Meet BurnoutPredict AI
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes employee work patterns, predicts burnout risks,
            and provides recommendations to build a healthier workplace.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Employee Data */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-2xl font-bold text-[#6F4E37] mb-6">
              Employee Data
            </h3>

            {employeeData.map((item) => (
              <div
                key={item}
                className="bg-[#F8F5F2] p-3 rounded-lg mb-3"
              >
                {item}
              </div>
            ))}

          </div>

          {/* AI */}

          <div className="bg-[#6F4E37] text-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-6xl mb-4">
              🤖
            </div>

            <h3 className="text-3xl font-bold mb-4">
              BurnoutPredict AI
            </h3>

            <p>
              AI studies employee behaviour, predicts burnout, and
              provides smart recommendations before problems arise.
            </p>

          </div>

          {/* Results */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-2xl font-bold text-[#6F4E37] mb-6">
              AI Results
            </h3>

            {aiResults.map((item) => (
              <div
                key={item}
                 className="bg-[#F8F5F2] p-3 rounded-lg mb-3"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Solution;