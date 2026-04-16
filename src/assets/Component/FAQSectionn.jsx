import React, { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const faqs = [
    {
      question:
        "How do I get started with ThinkBiz HighTech as my digital marketing agency in Australia?",
      answer:
        "Getting started is simple. Book a free 30-minute strategy call through our contact page and one of our Australian-based consultants will walk you through your current digital presence, your goals, and the best path forward. There's no obligation, no sales pressure, and no lock-in contract required. Most clients are fully onboarded and campaigns live within 14 days of signing off.",
      category: "process",
    },
    {
      question:
        "How much does digital marketing cost for an Australian business?",
      answer:
        "Pricing varies based on your goals, industry, and the channels involved. As a guide, most Australian SMEs invest between $1,500–$5,000 AUD per month for a managed digital marketing retainer covering SEO, Google Ads, or social media. Larger campaigns with multiple channels may start from $6,000/month. We're transparent about costs from day one — no hidden fees, no surprises on your invoice. We'll recommend only what your business actually needs.",
      category: "pricing",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "It depends on the channel. Google Ads and Meta Ads can generate leads and traffic within the first week of going live. SEO is a longer play — most Australian businesses see measurable organic ranking improvements within 3–6 months, with strong compounding growth from month 6 onward. We set realistic expectations from the start and share a 90-day roadmap so you always know what to expect and when.",
      category: "results",
    },
    {
      question:
        "Do you work with businesses outside Sydney — Melbourne, Brisbane, Perth?",
      answer:
        "Absolutely. We work with businesses across all of Australia — Sydney, Melbourne, Brisbane, Perth, Adelaide, and beyond. Our entire process is built for remote collaboration, with video strategy calls, shared live reporting dashboards, and an account manager available during AEST business hours. Where you're located doesn't affect the quality or depth of what we deliver.",
      category: "process",
    },
    {
      question: "Are there lock-in contracts or minimum commitment periods?",
      answer:
        "No lock-in contracts. We work on a month-to-month basis and ask only for 30 days' notice if you decide to pause or stop. We believe our results should be reason enough to stay — not a contract. That said, we do recommend a minimum of 3 months on SEO campaigns to allow time for meaningful results, and we'll always be upfront about what's realistic in what timeframe.",
      category: "pricing",
    },
    {
      question:
        "How do you measure and report on digital marketing performance?",
      answer:
        "Every client gets access to a live reporting dashboard and a plain-English monthly report that covers traffic, leads, conversions, cost-per-acquisition, and keyword rankings. We don't hide behind vanity metrics like impressions or reach. We report on what actually matters to your business — leads and revenue. Monthly review calls are included for all retainer clients.",
      category: "results",
    },
    {
      question: "Do you specialise in any particular industries in Australia?",
      answer:
        "We've delivered results across a broad range of Australian industries including retail and eCommerce, professional services, trades and construction, healthcare, real estate, education, and B2B technology. Our team researches your specific industry landscape before building any strategy, so your campaigns are grounded in the actual buying behaviour of your Australian audience — not a generic template.",
      category: "services",
    },
    {
      question: "Can you help with both SEO and Google Ads at the same time?",
      answer:
        "Yes, and it's often the smartest approach. Google Ads delivers immediate traffic and leads while your SEO builds long-term organic authority. Running both together means you're never fully dependent on paid spend, and the data from your ads (which keywords convert best) directly informs your SEO strategy. We manage both channels in-house with a unified strategy so there's no disconnect between teams.",
      category: "services",
    },
    {
      question: "Is ThinkBiz HighTech an Australian company?",
      answer:
        "ThinkBiz HighTech is a global digital agency with a dedicated Australian client team serving businesses across Sydney, Melbourne, Brisbane, Perth, and Adelaide. Our AU-focused specialists understand the local market, Google Australia's ranking behaviour, ASIC and ACCC compliance considerations, and the buying habits of Australian consumers. You'll always deal with someone available in your time zone.",
      category: "pricing",
    },
    {
      question:
        "What makes ThinkBiz HighTech different from other digital marketing agencies in Australia?",
      answer:
        "Three things set us apart. First, no lock-in contracts — we earn your business every month. Second, full transparency — you get a live dashboard and plain-English reporting, not a PDF of graphs you can't interpret. Third, a dedicated account manager who knows your business and is reachable during AEST hours. We're not a faceless offshore agency — we're a growth partner that's accountable for your results.",
      category: "results",
    },
    {
      question:
        "Will I have one point of contact or deal with multiple people?",
      answer:
        "You'll have a single dedicated account manager as your primary contact. They coordinate across our in-house team of SEO specialists, paid media buyers, content writers, and developers on your behalf. You never need to manage multiple freelancers or chase updates across departments. One person, full visibility, everything handled.",
      category: "process",
    },
    {
      question:
        "What digital marketing services do you offer for Australian businesses?",
      answer:
        "We offer a full suite of digital marketing services tailored to the Australian market, including Search Engine Optimisation (SEO), Google Ads (PPC), Meta and LinkedIn advertising, content marketing, email marketing, social media management, and website design and development. Whether you need one channel or a full integrated strategy, we'll build a plan around your specific business goals and budget.",
      category: "services",
    },
  ];

  const filteredFaqs =
    filter === "all" ? faqs : faqs.filter((f) => f.category === filter);

  return (
    <section className="bg-white text-[#0b0f1a] py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-[#ff7515] text-xl font-bold uppercase tracking-widest mb-3">
            Got questions?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Frequently asked <span className="text-[#ff7515]">questions</span>
          </h2>

          <p className="text-black text-xl">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", "pricing", "process", "results", "services"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-2xl text-xl border ${
                filter === cat
                  ? "bg-black text-white border-blue-500"
                  : "bg-white/5 text-gray-400 border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div>
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border-t border-white/10 py-5">
              {/* QUESTION */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-2xl text-left"
              >
                <span className="text-2xl md:text-2xl font-medium">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {activeIndex === index && (
                <p className="text-gray-400 mt-3 text-xl font-semibold leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
}
