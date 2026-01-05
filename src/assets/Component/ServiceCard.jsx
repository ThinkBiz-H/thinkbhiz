import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  MonitorSmartphone,
  BarChart3,
  PenTool,
  Database,
  Share2,
  ShoppingCart,
  Megaphone,
} from "lucide-react";
import { trackEvent } from "../../trackEvent";

const services = [
  {
    title: "Web Development",
    path: "web",
    icon: <Code2 size={28} className="text-white" />,
    bg: "bg-red-500",
    text: "We build fast, modern, responsive websites with clean UI/UX, strong security, SEO structure, and high performance — built to grow your business effectively.",
  },
  {
    title: "App Development",
    path: "app",
    icon: <MonitorSmartphone size={28} className="text-white" />,
    bg: "bg-blue-500",
    text: "We create powerful, scalable Android & iOS apps with smooth UI/UX, secure backend, API integration, and optimized performance for startups and businesses.",
  },
  {
    title: "Digital Marketing",
    path: "digital-marketing",
    icon: <Megaphone size={28} className="text-white" />,
    bg: "bg-green-500",
    text: "We grow your business online using social media marketing, paid ads, content creation, analytics, and targeted strategies to increase leads and conversions.",
  },
  {
    title: "SEO Optimization",
    path: "seo",
    icon: <BarChart3 size={28} className="text-white" />,
    bg: "bg-yellow-500",
    text: "We improve search ranking with keyword optimization, backlinks, technical SEO, speed improvement, and content enhancements — boosting long-term organic traffic.",
  },
  {
    title: "Graphic Designing",
    path: "graphic",
    icon: <PenTool size={28} className="text-white" />,
    bg: "bg-purple-500",
    text: "We design premium logos, branding kits, posters, brochures, and social media creatives that build a strong and professional visual identity for your brand.",
  },
  {
    title: "Database Management",
    path: "software",
    icon: <Database size={28} className="text-white" />,
    bg: "bg-orange-500",
    text: "We create secure, scalable databases with backups, optimization, real-time syncing, and smooth performance — ensuring your business data stays safe and fast.",
  },
  {
    title: "E-commerce Solutions",
    path: "software",
    icon: <ShoppingCart size={28} className="text-white" />,
    bg: "bg-pink-500",
    text: "We build full e-commerce websites with product systems, secure payments, admin panels, tracking, SEO, and a seamless shopping experience for customers.",
  },
  {
    title: "Social Media Branding",
    path: "brand",
    icon: <Share2 size={28} className="text-white" />,
    bg: "bg-teal-500",
    text: "We create strong social media identities through creative posts, strategy planning, consistent branding, and engagement to grow your business online.",
  },
];

const ServiceCard = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-6 font-sans bg-black">
      <h2 className="text-6xl font-bold text-center mb-12 text-[#ff7515]">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2 bg-white"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${service.bg} mb-4`}
            >
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#ff7515]">
              {service.title}
            </h3>

            <p className="text-black text-sm font-semibold leading-relaxed mb-4">
              {service.text}
            </p>

            <Link
              to={`/service/${service.path}`}
              className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-lg font-semibold hover:bg-[#ff7515] hover:text-black transition inline-block"
              // ⭐ EVENT TRACKING
              onClick={() =>
                trackEvent("service_read_more_click", {
                  service_name: service.title,
                  path: service.path,
                })
              }
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
