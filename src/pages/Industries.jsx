import React, { useState } from "react";
import { trackEvent } from "../trackEvent";
import { Helmet } from 'react-helmet-async';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";
import {
  Briefcase,
  Puzzle,
  TrendingUp,
  ShieldCheck,
  Zap,
  Headset,
} from "lucide-react";
import Newsletter from "../assets/Component/NewsLetterbox";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

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
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-20 px-6 relative">
    <Helmet>
      <title>IT Industries | ThinkBiz Hightech</title>
      <meta
        name="description"
        content="IT industries driving innovation with cutting-edge technology solutions, delivering software, automation, and digital services to boost business growth."
      />
      <link rel="canonical" href="https://www.thinkbizhightech.com/" />
    </Helmet>

    {/* ================= HERO ================= */}
    <div className="max-w-7xl mx-auto text-center">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 font-semibold tracking-wide">
        INDUSTRIES
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-orange-500">
        Industries We Serve
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
        We deliver industry-specific digital solutions that help businesses
        scale, automate operations, and achieve measurable growth.
      </p>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-28">
  {[
    { num: "10+", label: "Industries Served", icon: "🏭" },
    { num: "150+", label: "Projects Delivered", icon: "🚀" },
    { num: "4+", label: "Years Experience", icon: "⏳" },
    { num: "98%", label: "Client Satisfaction", icon: "⭐" },
  ].map(({ num, label, icon }) => (
    <div
      key={label}
      className="
        group relative overflow-hidden
        rounded-3xl p-6
        bg-gradient-to-br from-gray-800/80 to-gray-900/80
        border border-gray-700
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2 hover:scale-[1.03]
        hover:border-[#ff7515]/60
        hover:shadow-[0_0_40px_rgba(255,117,21,0.35)]
      "
    >
      {/* Glow layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7515]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="text-3xl mb-2">{icon}</span>

        <p className="text-4xl font-extrabold text-[#ff7515]">
          {num}
        </p>

        <p className="text-gray-300 mt-2 text-sm tracking-wide uppercase">
          {label}
        </p>
      </div>
    </div>
  ))}
</div>


      {/* ================= GRID ================= */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Industry-Specific Digital Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {industriesData.map(({ id, title, icon }) => (
          <div
            key={id}
            onClick={() => handleIndustryClick(title)}
            className="group bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-7xl mb-6 text-orange-500 group-hover:scale-110 transition">
              {icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4">{title}</h3>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleIndustryClick(title);
              }}
              className="mt-auto bg-orange-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <section className="mt-40 max-w-6xl mx-auto">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold text-center mb-16"
  >
    Why Businesses Choose{" "}
    <span className="text-[#ff7515]">ThinkBiz</span>
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      {
        title: "Industry Expertise",
        desc: "Deep understanding of domain-specific challenges and workflows",
        icon: Briefcase,
      },
      {
        title: "Custom Solutions",
        desc: "Tailor-made software designed for your exact business needs",
        icon: Puzzle,
      },
      {
        title: "Scalable Architecture",
        desc: "Future-ready systems that grow as your business expands",
        icon: TrendingUp,
      },
      {
        title: "Security First",
        desc: "Enterprise-grade security with compliance and data protection",
        icon: ShieldCheck,
      },
      {
        title: "Agile Delivery",
        desc: "Rapid development cycles with faster go-to-market",
        icon: Zap,
      },
      {
        title: "Long-Term Support",
        desc: "Reliable technical support and continuous optimisation",
        icon: Headset,
      },
    ].map(({ title, desc, icon: Icon }, index) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative rounded-3xl p-[1.5px]"
      >
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff7515] via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Card */}
        <div className="relative z-10 h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(255,117,21,0.35)]">
          {/* Icon */}
          <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#ff7515]/15">
            <Icon className="w-7 h-7 text-[#ff7515]" />
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-white">
            {title}
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="mt-40 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
  {[
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
    { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
    { name: "AI / ML", icon: <SiOpenai />, color: "text-[#ff7515]" },
  ].map((tech) => (
    <div
      key={tech.name}
      className="
        group w-28 h-28 
        flex flex-col items-center justify-center 
        rounded-2xl 
        bg-gray-800 border border-gray-700 
        transition-all duration-300
        hover:bg-[#ff7515]
      "
    >
      <div
        className={`
          text-4xl mb-2 
          ${tech.color}
          group-hover:text-black
          group-hover:scale-110
          transition-all duration-300
        `}
      >
        {tech.icon}
      </div>

      <span className="text-sm font-medium text-gray-300 group-hover:text-black transition">
        {tech.name}
      </span>
    </div>
  ))}
</div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-44 bg-gradient-to-r from-[#ff7515] to-black py-24 text-center rounded-3xl max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Transform Your Industry?
        </h2>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Let’s discuss how our industry-specific digital solutions can
          help your business grow faster and smarter.
        </p>

        <a
          href="https://wa.me/918512001218"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-110 transition"
        >
          Talk to an Expert →
        </a>
      </section>
      
    </div>

    {/* ================= MODAL (UNCHANGED, CLEAN) ================= */}
    {selected && selectedIndustry && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-2xl relative text-gray-900">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="rounded-xl shadow-lg w-full mb-6"
              />

              <h3 className="text-2xl font-bold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {selectedIndustry.points.map((p, i) => (
                  <li key={i} className="text-lg">{p}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-orange-500 font-semibold mb-2">
                INDUSTRY: {selectedIndustry.title.toUpperCase()}
              </p>

              <h2 className="text-3xl font-bold mb-6">
                {selectedIndustry.heading}
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                {selectedIndustry.text}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={handleCloseModal}
                  className="bg-[#ff7515] text-white px-6 py-3 rounded-full hover:bg-black transition"
                >
                  Back to Industries
                </button>

                <a
                  href="/contact"
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#ff7515] transition"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    <WhatsAppButton />
      <Newsletter />
      <div className="w-full h-px bg-[#ff7515] opacity-90 my-16" />
  </div>
);
};

export default Industries;