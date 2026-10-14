import React, { useState } from 'react';

export default function BurnoutPredictDemo() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    preferredDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo Request Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#f3f7fa] flex items-center justify-center p-4 md:p-8 font-sans selection:bg-blue-500 selection:text-white">
      {/* Main Container Card */}
      <div className="max-w-6xl w-full bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-100">
        
        {/* LEFT COLUMN: Booking Form & Info */}
        <div className="lg:col-span-7 p-8 md:p-12 xl:p-16 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 text-blue-600 mb-8">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">BurnoutPredict</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Book a <span className="text-blue-600">Free Demo</span>
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg">
              Discover how our AI-powered Employee Burnout Predictor helps organizations identify burnout early, improve well-being, and build a healthier, more productive workplace.
            </p>

            {/* Platform Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-3">
                <div className="text-blue-600 shrink-0 bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Live AI Demo</h4>
                  <p className="text-xs text-slate-400 mt-0.5">See the platform in action</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-600 shrink-0 bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Burnout Analytics</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Identify risks before it's late</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-600 shrink-0 bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">HR Dashboard</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Real-time insights & reports</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-600 shrink-0 bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">✓</div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Personalized Recommendations</h4>
                  <p className="text-xs text-slate-400 mt-0.5">To dynamic well-being suggestions</p>
                </div>
              </div>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input 
                    type="text"  
                    name="fullName"
                    placeholder="Enter your full name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Work Email</label>
                  <input 
                    type="email" 
                    name="workEmail"
                    placeholder="Enter your work email" 
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    placeholder="Enter your company name" 
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    placeholder="Enter your phone number" 
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Preferred Date</label>
                <input 
                  type="date" 
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-[0.99]"
              >
                Book Demo <span className="text-lg">→</span>
              </button>
            </form>
          </div>

          <p className="text-[11px] text-slate-400 mt-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1">
            🔒 Your information is secure and confidential.
          </p>
        </div>

        {/* RIGHT COLUMN: Video Showcase & Stats Dashboard */}
        <div className="lg:col-span-5 bg-[#0a1128] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-900">
          
          {/* Neon Radial Gradient Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Upper Section: Video Block */}
          <div className="relative z-10 w-full">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-slate-100">See how BurnoutPredict works</h3>
              <p className="text-xs text-slate-400 mt-1">Play the video to get a quick overview of our platform</p>
            </div>

            {/* Video Player Mockup */}
            <div className="relative aspect-video w-full bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center justify-center overflow-hidden shadow-2xl group cursor-pointer">
              
              {/* Decorative Tech Grid */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              
              {/* Centered Pulse Play Button */}
              <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-600/40 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-white fill-white ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Bottom Transparent Pill Badges */}
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5 pointer-events-none">
                <div className="bg-slate-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-slate-800 text-[10px] text-slate-300 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> AI Insights
                </div>
                <div className="bg-slate-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-slate-800 text-[10px] text-slate-300 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Real-time
                </div>
                <div className="bg-slate-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-slate-800 text-[10px] text-slate-300 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Actionable
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section: Core Analytics Stats Grid */}
          <div className="grid grid-cols-2 gap-3.5 mt-8 relative z-10 pt-6 border-t border-slate-900">
            <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-slate-800/60 text-center">
              <div className="text-2xl font-black text-white tracking-tight">200+</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Organizations</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-slate-800/60 text-center">
              <div className="text-2xl font-black text-white tracking-tight">50K+</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Employees Impacted</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-slate-800/60 text-center">
              <div className="text-2xl font-black text-white tracking-tight">90%</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Accuracy Rate</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-slate-800/60 text-center">
              <div className="text-2xl font-black text-white tracking-tight">100%</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Data Privacy</div>
            </div> 
          </div> 

        </div> 
      </div>  
    </div>
  );
}