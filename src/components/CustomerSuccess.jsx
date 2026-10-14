function CustomerSuccess() {
  return (
    <section className="bg-[#F8F5F2] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#6F4E37] font-semibold uppercase tracking-wider">
            Success Stories
          </p>

          <h2 className="text-5xl font-bold text-[#3E2723] mt-3">
            Why Choose BurnoutPredict AI?
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            See how BurnoutPredict AI helps organizations reduce burnout,
            improve employee wellbeing, and build happier, healthier teams.
          </p>

        </div>

        {/* Comparison Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* Before */}

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl duration-300">

            <h3 className="text-3xl font-bold text-red-500 text-center mb-8">
              Before Using BurnoutPredict AI
            </h3>

            <div className="space-y-5 text-lg text-gray-700">

              <p>❌ High Employee Turnover</p>

              <p>❌ 14 Average Sick Leave Days</p>

              <p>❌ Employee Engagement: 54%</p>

              <p>❌ Burnout Often Goes Unnoticed</p>

            </div>

          </div>

          {/* After */}

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl duration-300">

            <h3 className="text-3xl font-bold text-green-600 text-center mb-8">
              After Using BurnoutPredict AI
            </h3>

            <div className="space-y-5 text-lg text-gray-700">

              <p>✅ Lower Employee Turnover</p>

              <p>✅ Average Sick Leave Reduced to 8 Days</p>

              <p>✅ Employee Engagement Increased to 82%</p>

              <p>✅ Early Burnout Detection & Smart Recommendations</p>

            </div>

          </div>

        </div>

        {/* Bottom Summary */}

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">

          <h3 className="text-3xl font-bold text-[#6F4E37] mb-6">
            Overall Improvement
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                40%
              </h2>
              <p className="text-gray-600 mt-2">
                Lower Burnout Risk
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                35%
              </h2>
              <p className="text-gray-600 mt-2">
                Higher Productivity
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                82%
              </h2>
              <p className="text-gray-600 mt-2">
                Employee Engagement
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CustomerSuccess;