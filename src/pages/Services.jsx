import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Newsletter from "../assets/Component/NewsLetterbox";
import WhatsAppButton from "../assets/Component/WhatsAppButton";
import { trackEvent } from "../trackEvent";

const serviceContent = {
  web: {
    title: "Website Design & Development",
    description:
      "ThinkBiz Hightech Pvt. Ltd. delivers professional, secure, and high-performance website solutions tailored to the needs of modern businesses. Our services encompass responsive design, structured user experience, and robust development to ensure reliability across all devices We create corporate websites, e-commerce platforms, and custom web applications that align with brand standards and support long-term digital growth.",
    features: [
      "Responsive Design",
      "Fast Loading Speed",
      "SEO-Friendly Structure",
      "Custom UI/UX",
      "Secure Architecture",
      "CMS Integration",
      "Scalability",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  app: {
    title: "Mobile App Development",
    description:
      "ThinkBiz Hightech Pvt. Ltd. provides end-to-end mobile application development services designed to meet the evolving needs of modern businesses. We develop secure, efficient, and user-friendly Android and iOS applications that deliver seamless performance and a refined user experience.Our solutions are built using industry-standard technologies, ensuring scalability, reliability, and long-term functionality. From concept and design to development and deployment, we focus on creating applications that enhance engagement, streamline processes, and support business growth.",
    features: [
      "Cross-Platform Compatibility",
      "User-Centric UI/UX",
      "High Performance",
      "Secure Data Handling",
      "API Integration",
      "Push Notifications",
      "App Store Deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "REST APIs",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "ThinkBiz Hightech Pvt. Ltd. delivers comprehensive digital marketing solutions designed to enhance online visibility, strengthen brand presence, and drive measurable business growth. Our services encompass SEO, Social Media Marketing, Paid Advertising, Email Marketing, and Content Strategy—executed through a data-driven and result-oriented approach.We focus on targeted audience reach, performance optimisation, and consistent ROI improvement, ensuring that every campaign supports long-term digital success. With ThinkBiz, businesses gain a strategic partner committed to elevating their brand across all digital platforms.",
    features: [
      "Multi-Channel Strategy",
      "Audience Targeting",
      "Creative Content Creation",
      "Performance Tracking",
      "Lead Generation",
      "Brand Positioning",
      "Budget Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "SEO Tools (Ahrefs, SEMrush)",
      "Email Marketing Platforms",
      "Content Management Systems",
    ],
  },
  seo: {
    title: "SEO Services",
    description:
      "ThinkBiz Hightech Pvt. Ltd. provides professional SEO services aimed at improving website visibility and achieving higher organic rankings on major search engines. Our approach includes on-page optimisation, technical SEO, keyword strategy, and high-quality link-building to enhance search performance and user experience.We focus on sustainable, data-driven optimisation practices that increase website traffic, strengthen brand credibility, and support long-term digital growth. With ThinkBiz, businesses gain a structured and effective SEO strategy tailored to their industry and objectives.",
    features: [
      "Keyword Research & Planning",
      "On-Page SEO Optimization",
      "Technical SEO",
      "Off-Page SEO",
      "Local SEO",
      "Content Optimization",
      "Regular SEO Reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Moz",
      "Ahrefs",
      "Screaming Frog",
    ],
  },
  graphic: {
    title: "Graphic Designing",
    description:
      "Creative graphic designs to make your brand stand out visually.",
    features: [
      "Logo design",
      "Brand identity",
      "Marketing materials",
      "Digital graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Figma",
      "Canva",
    ],
  },
  software: {
    title: "Software Development",
    description:
      "ThinkBiz Hightech Pvt. Ltd. offers end-to-end software development services designed to meet the specific operational and strategic needs of modern businesses. We develop secure, scalable, and high-performance software solutions using industry-standard technologies and proven development practices. Our expertise spans custom software applications, enterprise systems, automation tools, and cloud-based solutions. From requirement analysis and architecture design to development, testing, and deployment, we ensure each product is reliable, efficient, and aligned with the client’s long-term objectives",
    features: [
      "Custom Solutions",
      "Robust Architecture",
      "Cloud Integration",
      "API Development",
      "Quality Assurance",
      "Automation Capabilities",
      "Maintenance & Support",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Java",
      "C#",
      ".NET",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
    ],
  },

  email: {
    title: "Email & Affiliate Marketing",
    description:
      "ThinkBiz Hightech Pvt. Ltd. delivers structured and result-driven email marketing solutions designed to enhance customer engagement and support business growth. Our services include targeted email campaigns, automated workflows, personalised messaging, and performance tracking to ensure effective communication and measurable outcomes.We focus on delivering relevant content to the right audience at the right time, helping businesses build stronger relationships, increase conversions, and maintain consistent brand visibility. With ThinkBiz, clients receive a professional and data-backed email marketing strategy tailored to their objectives.",
    features: [
      "Targeted Email Lists",
      "Professional Templates",
      "Automation Workflows",
      "Performance Analytics",
      "Lead Nurturing",
      "A/B Testing",
      "Bulk Email Sending",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Mailchimp",
      "SendGrid",
      "HubSpot",
      "Constant Contact",
      "ActiveCampaign",
    ],
  },
  "ai-automation": {
    title: "AI Automation Solutions",
    description:
      "ThinkBiz Hightech Pvt. Ltd. provides intelligent AI automation solutions that help businesses streamline operations, reduce manual effort, and improve efficiency. Our AI-driven systems automate repetitive tasks, enhance decision-making, and integrate seamlessly with existing workflows. From customer support automation to data processing and predictive insights, we design scalable and secure automation solutions tailored to business needs, enabling faster growth and smarter operations.",
    features: [
      "Business Process Automation",
      "AI Chatbots & Virtual Assistants",
      "Workflow Automation",
      "Data Analysis & Insights",
      "CRM & ERP Integration",
      "Task Scheduling & Monitoring",
      "Scalable AI Solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "OpenAI",
      "Python",
      "Node.js",
      "TensorFlow",
      "Zapier",
      "LangChain",
      "AWS AI Services",
    ],
  },

  video: {
    title: "Video Editing",
    description:
      "Professional video editing for advertisements, social media reels, YouTube, and promotional videos.",
    features: [
      "High-quality editing",
      "Motion graphics and effects",
      "Shorts & reels editing",
      "Brand storytelling through video",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Adobe Premiere Pro",
      "Final Cut Pro",
      "DaVinci Resolve",
      "After Effects",
      "Filmora",
    ],
  },
  brand: {
    title: "Brand Promotion",
    description:
      "ThinkBiz Hightech Pvt. Ltd. provides strategic brand promotion services aimed at strengthening brand identity, improving market visibility, and building long-term customer trust. Our approach combines digital outreach, creative communication, and consistent brand positioning across online platforms. We utilise targeted marketing campaigns, social media presence, content strategy, and visual branding to enhance recognition and support business growth. With ThinkBiz, clients receive a structured and effective brand promotion plan that aligns with their values and drives sustained engagement.",
    features: [
      "Brand Strategy Development",
      "Creative Campaigns",
      "Social Media Branding",
      "Influencer Collaborations",
      "Reputation Management",
      "Offline & Online Marketing",
      "Audience Engagement",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Hootsuite",
      "Buffer",
      "Google Analytics",
      "Canva",
      "Facebook Business Manager",
    ],
  },
  creative: {
    title: "Creative Writing",
    description:
      "Engaging creative writing services for blogs, ads, scripts, and social media content that connect with your audience.",
    features: [
      "Blog & article writing",
      "Ad copywriting",
      "Social media content",
      "Scriptwriting & storytelling",
    ],
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Grammarly",
      "Hemingway Editor",
      "Google Docs",
      "Scrivener",
      "ProWritingAid",
    ],
  },
};

const Services = () => {
  const { serviceName } = useParams();
  const service = serviceContent[serviceName];

  useEffect(() => {
    if (service) {
      trackEvent("Services", "PageView", service.title);
    }
  }, [serviceName]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-8">
        <h2 className="text-4xl font-extrabold mb-4 text-red-500">
          Service Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          The service you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition"
          onClick={() =>
            trackEvent(
              "Services",
              "BackToServices_Click",
              "Service Not Found Page"
            )
          }
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4 md:p-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-6 md:p-10">
          {/* ================= MOBILE IMAGE (#1) ================= */}
          <div className="flex flex-col h-full items-center order-1 md:hidden">
            <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-700 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= LEFT SIDE (DESKTOP) ================= */}
          <div className="hidden md:flex flex-col h-full items-center">
            {/* IMAGE — Desktop LEFT */}
            <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-700 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* TECHNOLOGIES — Desktop */}
            <div className="w-full rounded-xl p-4 mt-8 text-gray-200">
              <h3 className="text-4xl font-semibold mb-4 text-[#ff7515] text-center">
                Technologies We Use
              </h3>

              <ul className="list-disc list-inside space-y-1 text-xl">
                {service.technologies?.map((tech, index) => (
                  <li
                    className="hover:text-orange-500 transition-colors cursor-default"
                    key={index}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Button */}
            <Link
              to="/"
              className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition w-auto"
            >
              Back to Home
            </Link>
          </div>

          {/* ================= RIGHT SIDE = CONTENT (DESKTOP) ================= */}
          <div className="text-white flex flex-col order-2 md:order-none">
            {/* TITLE (#2 Mobile) */}
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-orange-500">
              {service.title}
            </h1>

            {/* DESCRIPTION (#3 Mobile) */}
            <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 text-gray-300">
              {service.description}
            </p>

            {/* FEATURES (#4 Mobile) */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-[#ff7515]">
              Key Features
            </h3>

            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-300 text-base md:text-lg">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="hover:text-orange-500 transition-colors cursor-default"
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* MOBILE TECHNOLOGIES (#5 Mobile) */}
            <div className="w-full rounded-xl p-4 mt-6 text-gray-200 block md:hidden">
              <h3 className="text-3xl font-semibold mb-4 text-[#ff7515] text-center">
                Technologies We Use
              </h3>

              <ul className="list-disc list-inside space-y-1 text-lg">
                {service.technologies?.map((tech, index) => (
                  <li
                    className="hover:text-orange-500 transition-colors cursor-default"
                    key={index}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* MOBILE BUTTON (#6 Mobile) */}
            <Link
              to="/"
              className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition w-full md:hidden text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Newsletter />
    </>
  );
};

export default Services;
