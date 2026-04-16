import React from "react";

export default function IndustrySection() {
  const industries = [
    {
      title: "Manufacturing & Industrial",
      desc: "Supporting companies that supply industrial solutions.",
      icon: "🏭",
    },
    {
      title: "Healthcare & Pharmaceutical",
      desc: "In Healthcare & Pharmaceutical sector growth.",
      icon: "❤️",
    },
    {
      title: "Education & Training",
      desc: "Supporting schools, colleges and institutions.",
      icon: "🎓",
    },
    {
      title: "Real Estate & Infrastructure",
      desc: "We help builders, agents and developers.",
      icon: "🏠",
    },
    {
      title: "Retail & Consumer Services",
      desc: "Bring more people to your store.",
      icon: "🛍️",
    },
    {
      title: "Technology & Services",
      desc: "Our digital marketing agency solutions.",
      icon: "💻",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Heading */}
      <h2 className="text-2xl text-[#ff7515] md:text-3xl font-bold mb-4">
        Industry-Specific Digital Marketing Expertise
      </h2>

      <p className="text-black text-xl font-semibold max-w-3xl mb-10">
        Among all digital marketing agencies, we cover multiple industries and
        create strategies tailored to each business sector.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {industries.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 text-center shadow hover:shadow-md transition cursor-pointer h-full flex flex-col"
          >
            {/* ICON */}
            <div className="text-3xl mb-2">{item.icon}</div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-[#ff7515] mb-1  break-words">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-base text-black break-words">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
