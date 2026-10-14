function CTA() {
  return (
    
    <section className="bg-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">

        {/* Left Card */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-[#3E2723] mb-6">Burnout Risk Overview</h3>

          <div className="flex justify-center mb-6">
            <div className="w-36 h-36 rounded-full border-8 border-[#D9C7B8] flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#6F4E37]">28%</h2>
                <p className="text-gray-600">At Risk</p>
              </div>
            </div>
          </div>

          <p>🟢 Low Risk : 72%</p>
          <p>🟠 At Risk : 28%</p>
          <p>🔴 High Risk : 8%</p>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="inline-block bg-[#EFE3D7] text-[#6F4E37] px-5 py-2 rounded-full font-semibold mb-6">
            ⭐ AI-Powered Burnout Prediction
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#3E2723]">
            Build Healthier Teams <br />
            with <span className="text-[#A66B3D]">AI</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 mb-10">
            Start improving employee well-being with AI-powered burnout prediction,
            workforce analytics, and real-time recommendations.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <button className="bg-[#6F4E37] text-white px-8 py-4 rounded-xl hover:bg-[#5A3E2B]">
              Book Demo
            </button>

            <button className="border-2 border-[#6F4E37] text-[#6F4E37] px-8 py-4 rounded-xl hover:bg-[#6F4E37] hover:text-white">
              Try Demo Dashboard
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-7xl">👨‍💻</div>

          <h3 className="text-2xl font-bold text-[#3E2723] my-4">
            Healthier Workplace
          </h3>

          <p className="text-gray-600">
            Predict burnout early, improve employee wellness,
            and help HR make smarter decisions.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            <span className="bg-[#EFE3D7] px-4 py-2 rounded-full">❤️ Well-being</span>
            <span className="bg-[#EFE3D7] px-4 py-2 rounded-full">📊 Analytics</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;