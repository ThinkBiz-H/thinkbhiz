import React from "react";
import ServiceSlider from "../assets/Component/ServiceSlider";
import IndustrySection from "../assets/Component/IndustrySection";
import ProcessSection from "../assets/Component/ProcessSection";
import CaseStudySection from "../assets/Component/CaseStudySection";
import FAQSection from "../assets/Component/FAQSectionn";
import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
export default function DigitalMarketingPage() {
  // SEO
  const seoData = [
    { title: "On-page SEO", desc: "Optimize content & structure" },
    { title: "Off-page SEO", desc: "Authority building" },
    { title: "Local SEO", desc: "Target local audience" },
    { title: "Technical SEO", desc: "Speed & indexing" },
    { title: "Ecommerce SEO", desc: "Boost product ranking" },
    { title: "SEO Audit", desc: "Full website audit" },
  ];

  // PPC
  const ppcData = [
    { title: "Search Ads", desc: "High intent targeting" },
    { title: "Display Ads", desc: "Brand awareness" },
    { title: "Shopping Ads", desc: "Product promotion" },
    { title: "Remarketing", desc: "Re-engage users" },
    { title: "YouTube Ads", desc: "Video marketing" },
    { title: "PPC Audit", desc: "Campaign optimization" },
  ];

  // Social Media
  const socialData = [
    { title: "Facebook Marketing", desc: "Targeted campaigns" },
    { title: "Instagram Marketing", desc: "Visual branding" },
    { title: "LinkedIn Marketing", desc: "B2B growth" },
    { title: "Influencer Marketing", desc: "Audience reach" },
    { title: "Content Strategy", desc: "Engagement boost" },
    { title: "Social Ads", desc: "Paid promotions" },
  ];

  // Content Marketing
  const contentData = [
    { title: "Blog Writing", desc: "SEO friendly content" },
    { title: "Website Content", desc: "Conversion focused" },
    { title: "Copywriting", desc: "Persuasive writing" },
    { title: "Video Content", desc: "Engaging visuals" },
    { title: "Infographics", desc: "Visual storytelling" },
    { title: "Content Strategy", desc: "Long-term growth" },
  ];

  // Email Marketing
  const emailData = [
    { title: "Drip Campaigns", desc: "Automated emails" },
    { title: "Newsletters", desc: "Engagement boost" },
    { title: "Lead Nurturing", desc: "Convert prospects" },
    { title: "Email Automation", desc: "Smart workflows" },
    { title: "Campaign Tracking", desc: "Performance insights" },
    { title: "A/B Testing", desc: "Optimize emails" },
  ];

  // Web Design
  const webData = [
    { title: "UI/UX Design", desc: "User-friendly design" },
    { title: "Responsive Design", desc: "All devices support" },
    { title: "Frontend Dev", desc: "Fast UI build" },
    { title: "Backend Dev", desc: "Robust system" },
    { title: "Ecommerce Dev", desc: "Online store setup" },
    { title: "Website Maintenance", desc: "Ongoing support" },
  ];

  const services = [
    {
      title: "SEO Services",
      desc: "Our SEO experts at our digital marketing agency in Australia will help to raise the profile of your brand through all Australia-based search engines, bringing you in touch with customers actively searching out your service or products by positioning them on the search engines in an organic fashion.",
      data: seoData,
    },
    {
      title: "Google Ads (PPC Management)",
      desc: "Turn your advertising dollars into a growth-driving machine by deploying well-developed Google Ads campaigns that speak to highly interested buyers during the buying process.",
      data: ppcData,
    },
    {
      title: "Social Media Marketing",
      desc: "Back your Australia audience and connect them with authentic relationships by creating a commendable social media plan that grows the community into measurable business results.",
      data: socialData,
    },
    {
      title: "Content Marketing",
      desc: "Make it so that the authority of your brand is seen by those within your industry in a way that will drive consistency and reliability when cultivating an effective content-based approach to reaching your intended audience.",
      data: contentData,
    },
    {
      title: "Email Marketing",
      desc: "Develop long-term customer relationships with the help of advanced email marketing automation, providing personalized experiences to customers and resulting in a systematic increase in revenue.",
      data: emailData,
    },
    {
      title: "Web Design Development",
      desc: "Design compelling digital journeys that will engage visitors and, in the process, direct them to conversion using customer-centric solutions and tech mastery.",
      data: webData,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Firebase save
      await push(ref(db, "leads"), formData);

      // ✅ EmailJS send
      await emailjs.send(
        "service_0474nz8",
        "template_t35ib3u",
        {
          name: formData.name,
          message: `
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
        `,
        },
        "HDDgjsUuDFFjTZN5h",
      );

      // ✅ WhatsApp message
      const whatsappMsg = `New Lead 🚀

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}`;

      window.open(
        `https://wa.me/918512001218?text=${encodeURIComponent(whatsappMsg)}`,
        "_blank",
      );

      toast.success("Form submitted!");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Digital Marketing Agency Australia — SEO, PPC & Social | ThinkBiz
          Hightech
        </title>
        <meta
          name="Description"
          content="ThinkBiz HighTech is a results-driven digital marketing agency serving Australian businesses. SEO, PPC, social media & web design — tailored for AU growth. Get a free consultation today."
        />
        <link rel="canonical" href="https://www.thinkbizhightech.com/" />
      </Helmet>
      <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white">
        {/* HERO with animated gradient */}
        <section className="relative bg-black text-black py-16 md:py-20 lg:py-24 px-4 sm:px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/100 backdrop-blur-sm text-xs text-[#ff7515] sm:text-sm font-medium mb-4 animate-pulse">
              ⭐ #1 Rated Digital Marketing Agency in Australia
            </div>
            <h1 className="text-3xl text-[#ff7515] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Digital Marketing Company in{" "}
              <span className="text-transparent bg-clip-text bg-white">
                Australia
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto px-4">
              Data-driven strategies, creative excellence, and measurable
              results that transform businesses
            </p>
          </div>
        </section>

        {/* MAIN SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8 w-full overflow-hidden">
              {/* Intro Card */}
              <div className="bg-black rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff7515] mb-3 md:mb-4 leading-tight">
                  Premier Digital Marketing Company in Australia, Transforming
                  Businesses Into Market Leaders
                </h2>
                <p className="text-white leading-relaxed text-sm sm:text-xl">
                  The digital market of the Australia requires advanced
                  marketing practices that make a difference and promise
                  outstanding achievement. Being a digital marketing company in
                  Australia that understands the market very well, we enable
                  businesses to take their growth to the next level using
                  creative and data-based campaigns.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-xl md:text-3xl font-bold text-[#ff7515] mb-3 md:mb-4">
                  Why Choose Us as Your Digital Marketing Partner?
                </h3>
                <p className="text-black text-bold mb-5 md:mb-6 text-sm sm:text-xl">
                  Our approach combines innovative technology with strategies
                  that align with your business goals and market demands.
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    "🏆 A multi-award-winning digital marketing company in Australia",
                    "📈 Campaigns tuned to Australia market performance",
                    "🎓 Certified experts in Google Analytics & Meta",
                    "📊 Real-time dashboards with clear reporting",
                    "🌍 Cross-cultural experience across Australia demographics",
                    "🔄 End-to-end digital marketing solutions",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 bg-black p-2.5 sm:p-3 rounded-xl border border-gray-100 hover:border-[#2f3e8f]/20 transition-all"
                    >
                      <span className="text-[#ff7515] text-xl sm:text-2xl">
                        {item.charAt(0)}
                      </span>
                      <span className="text-white text-xs sm:text-xl">
                        {item.slice(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div className="space-y-6 md:space-y-8">
                <div className="text-center">
                  <span className="text-[#ff7515] font-semibold text-xs sm:text-xl uppercase tracking-wide">
                    What We Offer
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Our Digital Marketing Services
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#fa9e9e] to-[#fa5b11] rounded-full mx-auto mt-3"></div>
                  <p className="text-black mt-3 text-sm sm:text-xl max-w-2xl mx-auto">
                    We provide end-to-end digital solutions tailored to your
                    business needs
                  </p>
                </div>

                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-black rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
                      {/* HEADER */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ff7515] flex items-center justify-center text-white text-sm sm:text-lg font-bold shrink-0">
                          {idx + 1}
                        </div>

                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            {service.title}
                          </h4>
                          <p className="text-gray-100 text-sm sm:text-xl  mt-1 line-clamp-3">
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      {/* SLIDER FIXED AREA */}
                      <div className="flex-1 bg-black rounded-xl p-3 sm:p-4 overflow-hidden w-full">
                        <ServiceSlider
                          title="" // 🔥 remove duplicate heading
                          data={service.data}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industry, Process, Case Study Sections */}
              <div className="space-y-6 md:space-y-8">
                <IndustrySection />
                <ProcessSection />
                <CaseStudySection />
                <FAQSection />
              </div>
            </div>

            {/* RIGHT FORM - Sticky Form */}
            <div className="lg:sticky lg:top-6 h-fit">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                {/* Form Header */}
                <div className="bg-[#ff7515] text-black  p-5 sm:p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Have Some Questions?
                  </h3>
                  <p className="text-black text-xs sm:text-xl">
                    Let's have a friendly chat and figure out if we are a good
                    fit
                  </p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2f3e8f] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your company name"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2f3e8f] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@company.com"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2f3e8f] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+61 XXX XXX XXX"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2f3e8f] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <button className="w-full bg-[#ff7515] py-3 rounded-xl font-semibold text-white hover:shadow-lg transition-all transform hover:scale-[1.02]">
                    Get Free Consultation →
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    🔒 We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>

              {/* Trust Badge */}
              <div className="mt-5 md:mt-6 bg-white rounded-xl p-4 flex flex-wrap items-center justify-center gap-3 text-center shadow-lg border border-gray-100">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-sm font-semibold text-gray-700">
                    4.9/5
                  </span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Trusted by{" "}
                  <span className="font-bold text-[#2f3e8f]">500+</span>{" "}
                  Australia Businesses
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
