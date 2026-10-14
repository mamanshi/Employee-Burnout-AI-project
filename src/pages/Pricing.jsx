import React, { useState } from "react";
import { Check, Minus, HelpCircle, ChevronDown, Shield, Users, Layers, ExternalLink } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState();

  const plans = [
    {
      title: "Starter Plan",
      priceMonthly: "₹0",
      priceYearly: "₹0",
      subtitle: "For boutique startups analyzing team fatigue signals baseline.",
      employees: "Up to 10 endpoints",
      button: "Activate Free Tier",
      popular: false,
      cardStyles: "bg-white border border-slate-200/80 shadow-sm",
      buttonStyles: "border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
      features: [
        "Core Burnout Vector Analytics",
        "Weekly aggregated metric digest",
        "Standard Slack notifications",
        "48-hour email fallback support"
      ],
    },
    {
      title: "Professional",
      priceMonthly: "₹999",
      priceYearly: "₹799",
      subtitle: "For rapidly growing mid-market hubs seeking proactive signals.",
      employees: "Up to 100 endpoints",
      button: "Deploy Pro Architecture",
      popular: true,
      cardStyles: "bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100/50 transform lg:-translate-y-4 scale-102 lg:scale-105",
      buttonStyles: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200",
      features: [
        "Advanced ML Burnout Prediction",
        "Real-time department heatmaps",
        "Custom risk trigger automation",
        "Slack, MS Teams, & Webhook engine",
        "Priority live-chat (under 2 hours)"
      ],
    },
    {
      title: "Enterprise Suite",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      subtitle: "Isolated infrastructure for global multi-tenant conglomerates.",
      employees: "Unlimited endpoints & nodes",
      button: "Initialize Architecture Audit",
      popular: false,
      cardStyles: "bg-slate-900 border border-slate-800 text-white shadow-2xl shadow-slate-950/40",
      buttonStyles: "bg-white text-slate-950 hover:bg-slate-100 shadow-lg",
      features: [
        "Bespoke model training cycles",
        "Isolated VPC & Cloud hosting",
        "Dedicated structural engineers",
        "SOC2 Compliance guarantees",
        "24/7/365 immediate SLA matrix"
      ],
    },
  ];

  const comparisonSections = [
    {
      category: "Predictive Analytics & Core ML",
      features: [
        { name: "Fatigue Risk Scoring Model", starter: "Basic", pro: "Advanced", enterprise: "Bespoke Custom" },
        { name: "Live Department Heatmaps", starter: false, pro: true, enterprise: true },
        { name: "Anonymized Signal Masking", starter: true, pro: true, enterprise: true },
        { name: "Historical Trend Projections", starter: "30 Days", pro: "12 Months", enterprise: "Unlimited" },
      ]
    },
    {
      category: "Integrations & Automation",
      features: [
        { name: "Slack & Email Digests", starter: true, pro: true, enterprise: true },
        { name: "Microsoft Teams Node", starter: false, pro: true, enterprise: true },
        { name: "Custom Webhooks & REST API", starter: false, pro: "Rate-limited", enterprise: "Uncapped" },
        { name: "Automated Escalation Triggers", starter: false, pro: true, enterprise: true },
      ]
    },
    {
      category: "Security, Hosting & SLA",
      features: [
        { name: "Multi-Tenant Cloud", starter: true, pro: true, enterprise: false },
        { name: "Isolated VPC / On-Prem Deployment", starter: false, pro: false, enterprise: true },
        { name: "SOC2 Compliance & Auditing", starter: false, pro: true, enterprise: true },
        { name: "Dedicated Technical Account Manager", starter: false, pro: false, enterprise: true },
      ]
    }
  ];

  const faqs = [
    {
      q: "How does the platform preserve individual employee data privacy?",
      a: "Our core AI parses structural interaction metadata—like task backlog densities, message frequencies, and unusual after-hours shifts on an aggregated cohort level. We completely discard and encrypt individual messaging contents, keeping logs fully safe, compliant, and non-intrusive."
    },
    {
      q: "Can we downgrade or transition licenses smoothly?",
      a: "Yes. All operational changes can be seamlessly adjusted via your administrative control deck. When you switch steps or tiers, prorated system adjustments are automatically compiled into your next structural statement cycle."
    },
    {
      q: "What technical support structure is tied into the plans?",
      a: "Starter layers receive standard ticket updates within a 48-hour cycle. Pro instances unlock our priority routing system targeting sub-2-hour responses. Enterprise profiles gain dedicated, persistent architecture engineers on an absolute zero-delay hotline."
    }
  ];

  return (
    <section className="bg-slate-50/60 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-6 uppercase tracking-wider">
            Scalable Economics
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Transparent plans for <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">workforce optimization</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Protect your human resource capital. Choose structural scaling parameters that align perfectly with your organizational matrix.
          </p>

          {/* Toggle Switch */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? "text-indigo-600" : "text-slate-400"}`}>Monthly Intervals</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-indigo-600 rounded-full p-1 transition-colors duration-300 relative focus:outline-none"
              aria-label="Toggle structural billing cycle"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${isYearly ? "text-indigo-600" : "text-slate-400"}`}>Annual Strategy</span>
              <span className="bg-emerald-100 text-emerald-800 text-2xs px-2.5 py-1 rounded-full font-extrabold uppercase tracking-widest">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-32">
          {plans.map((plan, index) => {
            const isCustom = plan.priceMonthly === "Custom";
            const currentPrice = isCustom ? "Custom" : (isYearly ? plan.priceYearly : plan.priceMonthly);

            return (
              <div key={index} className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${plan.cardStyles}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-5 py-1.5 rounded-full text-2xs font-extrabold uppercase tracking-widest shadow-lg">
                    ✨ Recommended Allocation
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tight mb-2">{plan.title}</h3>
                    <p className={`text-sm leading-relaxed min-h-[48px] ${index === 2 ? "text-slate-400" : "text-slate-500"}`}>{plan.subtitle}</p>
                  </div>

                  <div className="my-6 py-6 border-y border-slate-100/80 dark:border-slate-800/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">{currentPrice}</span>
                      {!isCustom && <span className={`text-sm font-semibold ${index === 2 ? "text-slate-400" : "text-slate-500"}`}>/mo</span>}
                    </div>
                    <p className={`mt-4 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${index === 2 ? "text-emerald-400" : "text-indigo-600"}`}>
                      <Users className="w-4 h-4" /> {plan.employees}
                    </p>
                  </div>

                  <div className="space-y-4 my-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 p-0.5 rounded-full text-white ${index === 2 ? "bg-emerald-500" : "bg-indigo-600"}`} />
                        <span className={index === 2 ? "text-slate-300" : "text-slate-600"}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-4 px-4 rounded-xl font-bold text-sm transition-all duration-200 mt-6 active:scale-98 ${plan.buttonStyles}`}>
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="hidden lg:block mb-32 border border-slate-200 bg-white rounded-3xl p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
            <Layers className="w-6 h-6 text-indigo-600" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">Granular Matrix Comparison</h2>
              <p className="text-xs text-slate-500">Examine technical variations across systemic parameters.</p>
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="py-4 w-2/5">Capabilities Architecture</th>
                <th className="py-4 text-center w-1/5">Starter Layer</th>
                <th className="py-4 text-center w-1/5">Professional</th>
                <th className="py-4 text-center w-1/5">Enterprise Suite</th>
              </tr>
            </thead>
            {comparisonSections.map((sec, sIdx) => (
              <tbody key={sIdx}>
                <tr>
                  <td colSpan={4} className="pt-8 pb-3 text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-slate-50/50 px-4 rounded-lg">
                    {sec.category}
                  </td>
                </tr>
                {sec.features.map((f, fIdx) => (
                  <tr key={fIdx} className="border-b border-slate-100 hover:bg-slate-50/40 text-sm text-slate-700 transition-colors">
                    <td className="py-4 font-medium pl-2">{f.name}</td>
                    <td className="py-4 text-center font-semibold text-xs text-slate-500">
                      {typeof f.starter === "boolean" ? (f.starter ? <Check className="w-4 h-4 mx-auto text-indigo-600" /> : <Minus className="w-4 h-4 mx-auto text-slate-300" />) : f.starter}
                    </td>
                    <td className="py-4 text-center font-bold text-xs text-slate-900 bg-indigo-50/20">
                      {typeof f.pro === "boolean" ? (f.pro ? <Check className="w-4 h-4 mx-auto text-indigo-600" /> : <Minus className="w-4 h-4 mx-auto text-slate-300" />) : f.pro}
                    </td>
                    <td className="py-4 text-center font-semibold text-xs text-indigo-700">
                      {typeof f.enterprise === "boolean" ? (f.enterprise ? <Check className="w-4 h-4 mx-auto text-emerald-500" /> : <Minus className="w-4 h-4 mx-auto text-slate-300" />) : f.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        {/* Bottom Banner */}
        <div className="bg-indigo-950 text-white rounded-3xl p-8 sm:p-12 mb-32 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-emerald-400" /> Enterprise Sovereign Cloud Isolation
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">Require air-gapped on-premise nodes?</h3>
            <p className="text-sm text-indigo-200/70 leading-relaxed">
              We engineer custom binary builds for internal telemetry management platforms without external pipeline exposures. 
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-emerald-950/30">
            <span>Review Security Whitepaper</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Accordion FAQs */}
        <div className="max-w-4xl mx-auto border-t border-slate-200/80 pt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4 shadow-sm">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Frequently Resolved Queries</h2>
            <p className="text-sm sm:text-base text-slate-500">Clear breakdowns of system compliance, architecture integration timelines, and user quotas.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200/70 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-indigo-600 transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-600" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out border-slate-100 ${isOpen ? "max-h-[350px] border-t p-6 bg-slate-50/40" : "max-h-0 pointer-events-none opacity-0"}`}>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
