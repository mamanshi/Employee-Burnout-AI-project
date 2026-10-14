import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
        
        {/* Column 1: Brand Logo & Description */}
        <div className="space-y-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-black text-xl text-white tracking-tight">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white">
              <Layers className="w-5 h-5" />
            </div>
            <span>Burnout Ai</span>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed">
            AI-powered warehouse intelligence that optimizes space layouts, improves picking efficiency, and maximizes capacity metrics dynamically.
          </p>
          {/* Social Links (Plain CSS Text Style Icons for Safety) */}
          <div className="flex items-center gap-4 pt-2 text-[11px] font-bold text-slate-500">
            <a href="#" className="hover:text-blue-500 transition">LN</a>
            <a href="#" className="hover:text-blue-500 transition">FB</a>
            <a href="#" className="hover:text-blue-500 transition">TW</a>
            <a href="#" className="hover:text-blue-500 transition">IG</a>
          </div>
        </div>

        {/* Column 2: Product Routes */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Home</h4>
          <ul className="space-y-2">
            <li><Link to="/features" className="hover:text-white transition">Solution</Link></li>
            <li><Link to="/product" className="hover:text-white transition">PowerfulFeature</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">Aboutus</Link></li>
          </ul>
        </div>

        {/* Column 3: Solutions Routes */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Solutions</h4>
          <ul className="space-y-2">
            <li><Link to="/solution" className="hover:text-white transition">Burnout Prediction</Link></li>
            <li><Link to="/solution" className="hover:text-white transition">Employee wellness</Link></li>
            <li><Link to="/solution" className="hover:text-white transition">Ai Analytics</Link></li>
            <li><Link to="/solution" className="hover:text-white transition">HR Dashboard</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources Links */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
          </ul>
        </div>

        {/* Column 5: Newsletter Input */}
        <div className="space-y-3 lg:col-span-1">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-xs">Subscribe to our newsletter</h4>
          <p className="text-[11px] text-slate-500 leading-normal">
            Get the latest updates and insight insights directly to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 pt-1">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-blue-600 w-full"
            />
            <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shrink-0">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-600 gap-4">
        <span>© 2026 SpaceIQ. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400 transition">About Us</a>
          <a href="#" className="hover:text-slate-400 transition">Contact</a>
          <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
