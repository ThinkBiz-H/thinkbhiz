import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery call & business deep-dive",
      desc: "We start with a no-obligation 30-minute consultation to understand your business, goals, and current digital position. We review your competitors in the Australian market and identify exactly what's holding your growth back. No sales pitch — just honest conversation.",
      timing: "Week 1 — Free",
      tags: [
        "Free 30-min strategy session",
        "Competitor landscape review",
        "Current channel audit",
        "AU market positioning",
      ],
    },
    {
      title: "Research, audit & opportunity mapping",
      desc: "Our team conducts a thorough audit of your website, SEO health, paid ad history, and social presence. We map high-value keyword opportunities specific to your industry and location across Australia — whether you're targeting Sydney, Melbourne, Brisbane or the national market",
      timing: "Week 1–2",
      tags: [
        "SEO & technical site audit",
        "AU keyword research",
        "Google Ads account review",
        "Social media benchmarking",
        "Backlink profile analysis",
      ],
    },
    {
      title: "Custom strategy & 90-day roadmap",
      desc: "We build a tailored digital marketing strategy aligned to your business goals, budget, and timeline. You receive a clear 90-day roadmap with defined KPIs — traffic targets, lead volume, cost-per-acquisition — so you always know exactly what we're working toward and why.",
      timing: "Week 2–3",
      tags: [
        "90-day roadmap",
        "Channel prioritisation",
        "Budget allocation plan",
        "KPI & milestone setting",
        "Content strategy outline",
      ],
    },
    {
      title: "Setup, build & launch",
      desc: "Our team gets to work — setting up campaigns, optimising your website for Australian search intent, creating ad creatives, and publishing content. We handle all the technical groundwork so you can focus on running your business. Everything is tested and QA'd before it goes live.",
      timing: "Week 3–4",
      tags: [
        "Campaign build & QA",
        "On-page SEO implementation",
        "Google & Meta ad setup",
        "Tracking & analytics config",
        "Landing page optimisation",
      ],
    },
    {
      title: "Optimise, test & scale",
      desc: "Digital marketing isn't set-and-forget. Every month we analyse performance data, run A/B tests, refine targeting, and reallocate budget to what's working. As your results improve, we systematically scale winning campaigns to drive compounding growth across your Australian audience.",
      timing: "Ongoing",
      tags: [
        "Weekly performance monitoring",
        "A/B split testing",
        "Budget reallocation",
        "Audience expansion",
        "Conversion rate optimisation",
      ],
    },
    {
      title: "Reporting & strategy review",
      desc: "You receive a plain-English monthly report — no vanity metrics, no confusing dashboards. We walk you through what moved, what it means for your business, and what's coming next. Our account managers are based in your time zone and reachable when you need them.",
      timing: "Monthly",
      tags: [
        "Monthly performance report",
        "Live dashboard access",
        "AEST-based account manager",
        "Quarterly strategy review",
        "ROI tracking",
      ],
    },
  ];

  return (
    <section className="bg-white text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-base uppercase tracking-widest text-black   mb-4">
            Our Process
          </p>

          <h2 className="text-3xl text-[#ff7515] md:text-5xl font-bold leading-tight mb-4">
            How we work with <span className="text-black">you</span>
          </h2>

          <p className="text-black max-w-xl text-xl">
            A proven process built for Australian businesses — from first
            consultation to long-term growth.
          </p>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-xl overflow-hidden mb-16">
          {[
            { value: "14", label: "Avg. onboarding time", sub: "days" },
            { value: "30–60", label: "First results", sub: "d" },
            { value: "Monthly", label: "Reporting", sub: "" },
            { value: "Zero", label: "Contracts", sub: "" },
          ].map((m, i) => (
            <div key={i} className="p-6 border bg-black border-white/5">
              <div className="text-3xl font-bold">
                {m.value}
                <span className="text-[#ff7515] text-base ml-1">{m.sub}</span>
              </div>
              <div className="text-base  text-white">{m.label}</div>
            </div>
          ))}
        </div>

        {/* STEPS */}
        <div>
          {steps.map((step, index) => (
            <div key={index} className="py-8 border-t border-gray-200">
              {/* TOP: NUMBER + BADGE */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl md:text-5xl font-bold text-[#FF7515]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* <div className="bg-black text-white text-xs px-3 py-1 rounded-full">
                  {step.timing}
                </div> */}
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-2xl font-semibold text-[#FF7515] mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-black text-xl md:text-xl mb-4">{step.desc}</p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-base md:text-base px-3 py-1.5 bg-black/70 text-white rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
}
