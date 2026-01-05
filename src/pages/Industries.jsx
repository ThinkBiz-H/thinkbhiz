import React, { useState } from "react";
import { trackEvent } from "../trackEvent";

// ======================= INDUSTRIES DATA WITH ONLINE IMAGES =======================
const industriesData = [
  {
    id: 1,
    title: "Healthcare",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    id: 2,
    title: "Finance",
    icon: "💰",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Education",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    id: 4,
    title: "Retail",
    icon: "🛒",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Manufacturing",
    icon: "🏭",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=279&h=186&fit=crop&auto=format",
  },

  {
    id: 6,
    title: "RealEstate",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 7,
    title: "Automotive",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    id: 8,
    title: "Hotel",
    icon: "🏨",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Telecommunications",
    icon: "📡",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 10,
    title: "Energy",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 11,
    title: "Transportation",
    icon: "🚚",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    id: 12,
    title: "MediaEntertainment",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    id: 13,
    title: "InteriorDesign",
    icon: "🛋️",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
];

// ======================= DETAILS WITH IMAGE + TEXT OBJECT FORMAT =======================
const industriesDetails = {
  Healthcare: {
    title: "Healthcare",
    image: industriesData[0].image,
    heading: "Transform Healthcare with Advanced Digital Solutions",
    text: `ThinkBiz Hightech Pvt. Ltd. provides advanced digital solutions tailored for the healthcare sector, supporting hospitals, clinics, and medical service providers in enhancing patient care and operational efficiency. Our services include secure patient management systems, telemedicine platforms, healthcare mobile apps, and data-driven dashboards that ensure compliance, accuracy, and seamless communication. We focus on improving patient engagement, optimising workflow automation, and enabling healthcare organisations to deliver reliable, modern, and technology-enabled services.`,
    points: [
      "Secure patient management systems",
      "Telemedicine platforms",
      "Healthcare mobile apps",
      "Data-driven dashboards",
      "Workflow automation",
    ],
  },
  InteriorDesign: {
    title: "Interior Design",
    image: industriesData[1].image,
    heading: "Elevate Spaces with Smart Interior Design Solutions",
    text: `ThinkBiz Hightech Pvt. Ltd. delivers innovative digital solutions for the interior design industry, helping designers, architects, and studios showcase creativity, manage projects efficiently, and engage clients effectively. Our solutions include portfolio websites, 3D visualisation support, project management systems, and client collaboration platforms that streamline workflows and enhance design presentation. We focus on transforming ideas into immersive digital experiences that support brand identity, improve communication, and drive business growth.`,
    points: [
      "Interior design portfolio websites",
      "3D visualisation & design presentation",
      "Project management systems",
      "Client collaboration platforms",
      "Workflow automation & reporting",
    ],
  },

  Finance: {
    title: "Finance",
    image: industriesData[1].image,
    heading: "Secure & Scalable Finance Solutions for Modern Banking",
    text: `We support financial institutions with secure, scalable, and high-performance digital solutions that comply with industry regulations and ensure data integrity. Our offerings include fintech platforms, mobile banking applications, automated processes, secure data systems, and digital marketing strategies designed to enhance customer trust and engagement. ThinkBiz helps financial organisations streamline operations, strengthen security, and deliver innovative digital services that meet the evolving expectations of modern consumers.`,
    points: [
      "Secure fintech platforms",
      "Mobile banking applications",
      "Automated processes",
      "Data integrity and security",
      "Digital marketing strategies",
    ],
  },

  Education: {
    title: "Education",
    image: industriesData[2].image,
    heading: "Empowering Education Through Digital Innovation",
    text: `ThinkBiz partners with educational institutions to build advanced digital ecosystems that promote effective learning and efficient institutional management. Our solutions include e-learning platforms, student management systems, mobile education apps, and digital content delivery tools. We focus on improving accessibility, enhancing student-teacher interaction, and enabling institutions to manage academic and administrative processes with greater precision and reliability.`,
    points: [
      "E-learning platforms",
      "Student management systems",
      "Mobile education apps",
      "Digital content delivery tools",
      "Classroom & admin automation",
    ],
  },

  Retail: {
    title: "Retail",
    image: industriesData[3].image,
    heading: "Customer-Focused Digital Solutions for Retail Growth",
    text: `For the retail industry, ThinkBiz develops customer-focused digital solutions that drive engagement, increase conversions, and support omni-channel sales. Our expertise includes e-commerce platforms, mobile shopping applications, inventory management systems, and targeted digital marketing strategies. We help retailers enhance customer experience, optimise operations, and leverage analytics to gain insights into consumer behaviour and market trends.`,
    points: [
      "E-commerce platforms",
      "Mobile shopping apps",
      "Inventory management systems",
      "Omni-channel integration",
      "Targeted digital marketing",
    ],
  },

  Manufacturing: {
    title: "Manufacturing",
    image: industriesData[4].image,
    heading: "Streamlining Manufacturing with Technology-Driven Solutions",
    text: `We deliver technology-driven solutions that help manufacturing companies automate processes, improve production efficiency, and manage supply chains more effectively. Our services include workflow automation systems, production monitoring dashboards, inventory control solutions, and custom software tailored to industry needs.`,
    points: [
      "Workflow automation",
      "Production monitoring dashboards",
      "Inventory control systems",
      "Supply chain optimisation",
      "Custom manufacturing software",
    ],
  },

  RealEstate: {
    title: "RealEstate",
    image: industriesData[5].image,
    heading: "Innovative Digital Tools for Real Estate Success",
    text: `ThinkBiz supports the real estate industry with digital solutions that simplify property showcasing, customer communication, and lead management. Our websites, mobile apps, and CRM tools enable real estate firms to present properties professionally, capture leads efficiently, and enhance buyer engagement.`,
    points: [
      "Property showcasing websites",
      "Real estate mobile apps",
      "Lead management systems",
      "Customer communication tools",
      "Real estate CRM solutions",
    ],
  },

  Automotive: {
    title: "Automotive",
    image: industriesData[6].image,
    heading: "Enhancing Automotive Business with Digital Platforms",
    text: `For automotive businesses, ThinkBiz develops digital platforms that enhance customer interaction, streamline dealership operations, and support brand promotion. Our solutions include vehicle listing websites, service scheduling portals, mobile apps, and targeted marketing campaigns.`,
    points: [
      "Vehicle listing platforms",
      "Service scheduling systems",
      "Automotive mobile apps",
      "Dealership management tools",
      "Automotive marketing strategies",
    ],
  },

  Hotel: {
    title: "Hotel",
    image: industriesData[7].image,
    heading: "Reliable Digital Systems for Enhanced Hotel Services",
    text: `ThinkBiz provides hotel businesses with reliable digital systems designed to improve guest management, staff coordination, and administrative efficiency. Our solutions include hotel management systems, booking platforms, communication tools, and analytics dashboards.`,
    points: [
      "Hotel management systems",
      "Online booking platforms",
      "Guest communication tools",
      "Staff coordination apps",
      "Analytics dashboards",
    ],
  },

  Telecommunications: {
    title: "Telecommunications",
    image: industriesData[8].image,
    heading: "Scalable Digital Solutions for Telecom Providers",
    text: `We support telecom companies with scalable digital solutions that improve network management, customer onboarding, billing operations, and service delivery. Our expertise includes customer portals, self-service apps, automated workflows, and marketing solutions designed to enhance customer satisfaction.`,
    points: [
      "Customer self-service portals",
      "Telecom mobile apps",
      "Automated billing systems",
      "Network monitoring dashboards",
      "Customer onboarding tools",
    ],
  },

  Energy: {
    title: "Energy",
    image: industriesData[9].image,
    heading: "Efficient & Secure Digital Platforms for the Energy Sector",
    text: `ThinkBiz delivers secure and efficient digital solutions for the energy sector, supporting operations such as resource management, monitoring systems, and customer engagement. Our platforms enable real-time insights, enhanced efficiency, and improved decision-making.`,
    points: [
      "Energy resource management",
      "Real-time monitoring dashboards",
      "Customer service portals",
      "Smart automation tools",
      "Energy analytics systems",
    ],
  },

  Transportation: {
    title: "Transportation",
    image: industriesData[10].image,
    heading: "Advanced Digital Platforms for Transportation Management",
    text: `At ThinkBiz, we support the transportation industry with advanced digital solutions that enhance operational efficiency, safety, and customer experience. As the sector evolves with smart mobility, automation, and real-time tracking, we enable organisations to modernise their systems and optimise every stage of their logistics and transportation processes..`,
    points: [
      "Fleet management systems",
      "Route optimisation tools",
      "Transport tracking dashboards",
      "Customer booking portals",
      "Logistics automation",
    ],
  },

  MediaEntertainment: {
    title: "MediaEntertainment",
    image: industriesData[11].image,
    heading: "Dynamic Digital Solutions for Media and Entertainment",
    text: `At ThinkBiz, we empower the media and entertainment industry with advanced digital solutions that elevate content creation, distribution, and audience engagement. Our approach is centred on innovation, technical excellence, and an in-depth understanding of modern consumption patterns. We help media organisations, production houses, and digital publishers build robust digital ecosystems that support high-quality streaming, seamless user experiences, and strategic brand growth..`,
    points: [
      "Streaming platforms",
      "Interactive websites",
      "Media mobile apps",
      "Content management systems",
      "Digital marketing campaigns",
    ],
  },
  InteriorDesign: {
    title: "Interior Design",
    image: industriesData[12].image,
    heading: "Elevate Spaces with Smart Interior Design Solutions",
    text: `ThinkBiz Hightech Pvt. Ltd. delivers innovative digital solutions for the interior design industry, helping designers, architects, and studios showcase creativity, manage projects efficiently, and engage clients effectively. Our solutions include portfolio websites, 3D visualisation support, project management systems, and client collaboration platforms that streamline workflows and enhance design presentation. We focus on transforming ideas into immersive digital experiences that support brand identity, improve communication, and drive business growth.`,
    points: [
      "Interior design portfolio websites",
      "3D visualisation & design presentation",
      "Project management systems",
      "Client collaboration platforms",
      "Workflow automation & reporting",
    ],
  },
};

const Industries = () => {
  const [selected, setSelected] = useState(null);
  const selectedIndustry = industriesDetails[selected];

  // Track when user selects an industry
  const handleIndustryClick = (title) => {
    setSelected(title);
    trackEvent("Industries", "Select Industry", title);
  };

  // Track when modal closes
  const handleCloseModal = () => {
    if (selectedIndustry) {
      trackEvent("Industries", "Close Modal", selectedIndustry.title);
    }
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-orange-500">
          Industries We Serve
        </h1>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Tailored technology solutions for a wide range of industries.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industriesData.map(({ id, title, icon }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer"
              onClick={() => handleIndustryClick(title)}
            >
              <div className="text-7xl mb-6 text-orange-500">{icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent parent div click firing twice
                  handleIndustryClick(title);
                }}
                className="bg-orange-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && selectedIndustry && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="bg-white w-full max-w-4xl p-6 md:p-8 rounded-2xl shadow-2xl relative text-gray-900 min-h-[80vh] md:min-h-auto max-h-[90vh] md:max-h-none overflow-y-auto">
            {/* CLOSE BUTTON - now properly inside modal */}
            <button
              onClick={handleCloseModal}
              className="
        absolute top-4 right-4 
        text-gray-500 hover:text-black 
        bg-white rounded-full 
        w-10 h-10 
        flex items-center justify-center 
        text-3xl 
        shadow-md
        transition
        hover:scale-110
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-orange-500
      "
              aria-label="Close modal"
            >
              ×
            </button>
            {/* FLEX CONTAINER */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10">
              {/* LEFT SIDE */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  className="rounded-xl shadow-lg w-full object-cover mb-6 max-h-[250px] md:max-h-none"
                />

                <h3 className="text-2xl font-bold text-gray-900 mb-3 w-full text-center md:text-left">
                  FEATURES
                </h3>

                <ul className="text-left text-gray-800 mb-6 list-disc list-inside space-y-2 w-full max-w-md mx-auto md:mx-0">
                  {selectedIndustry.points.map((point, index) => (
                    <li key={index} className="text-lg font-medium">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 justify-center md:justify-start">
                  <button
                    onClick={handleCloseModal}
                    className="bg-[#ff7515] text-white font-semibold px-8 py-3 rounded-full hover:bg-black transition"
                  >
                    Industries
                  </button>

                  <a
                    href="/contact"
                    className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-[#ff7515] transition"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full md:w-1/2 text-gray-700">
                <p className="text-2xl font-semibold text-[#ff7515] tracking-wide mb-2 text-center md:text-left">
                  INDUSTRY: {selectedIndustry.title.toUpperCase()}
                </p>

                <h2 className="text-4xl font-bold mb-6 leading-tight text-center md:text-left">
                  {selectedIndustry.heading}
                </h2>

                <p className="text-lg leading-relaxed whitespace-pre-line text-center md:text-left">
                  {selectedIndustry.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Industries;
