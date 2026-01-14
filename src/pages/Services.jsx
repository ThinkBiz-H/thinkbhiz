import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Newsletter from "../assets/Component/NewsLetterbox";
import WhatsAppButton from "../assets/Component/WhatsAppButton";
import { trackEvent } from "../trackEvent";
import { Helmet } from "react-helmet-async";
import TechSlider from "../assets/Component/TechSlider";
import BenefitsSection from "../assets/Component/BenefitsSection";
import FAQSection from "../assets/Component/FAQSection"
import { FaDesktop ,FaShareAlt,FaBars } from "react-icons/fa";
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
    metaTitle:
   "Website Design & Development  | ThinkBiz Hightech",
 metaDescription:
   "ThinkBiz Hightech offers professional website design & development services including responsive design, SEO-friendly websites, and custom web solutions.",
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
    metaTitle:
   "Smart Mobile App Development Solutions",
 metaDescription:
   "Mobile App Development delivering fast, secure, and user-friendly Android and iOS apps designed to boost engagement, performance, and business growth worldwide.",
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
    metaTitle:
   "Complete Digital Marketing Services",
 metaDescription:"Digital Marketing services designed to boost brand visibility, drive targeted traffic, and increase conversions through smart strategies and data-driven campaigns",
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
    metaTitle:
   "Best SEO Services to Rank Higher on Google",
 metaDescription:"SEO Services focused on improving search rankings, increasing organic traffic, and boosting online visibility with proven strategies that deliver long-term results.",
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
    metaTitle:
   "",
 metaDescription:"",
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
    metaTitle:
   "Professional Software Development Company",
 metaDescription:"Our software development services empower businesses with secure, scalable resolutions, facilitating workflows, boosting performance, and driving digital growth.",
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
    metaTitle:
   "Professional Email Marketing Services",
 metaDescription:"Email Marketing services that create targeted, engaging campaigns to boost open rates, increase conversions, and grow your business through strategic, data-driven emails.",
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
    metaTitle:
   "AI Automation Solutions for Businesses",
 metaDescription:"AI Automation services that streamline workflows, boost efficiency, and drive business growth using intelligent, smart, and scalable AI-powered solutions.",
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
    metaTitle:
   "",
 metaDescription:"",
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
    metaTitle:
   "Brand Promotion Services for Businesses",
 metaDescription:"Brand Promotion services that boost visibility, increase engagement, and grow your business using strategic marketing, creative campaigns, and effective outreach.",
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
    metaTitle:
   "",
 metaDescription:"",
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
      <div className="min-h-screen bg-black flex justify-center items-center p-4 md:p-6">
         <Helmet>
    <title>{service.metaTitle}</title>
    <meta name="description" content={service.metaDescription} />

    {/* Optional SEO tags */}
    <meta name="keywords" content={service.title} />
    <meta property="og:title" content={service.metaTitle} />
    <meta property="og:description" content={service.metaDescription} />
    <meta property="og:image" content={service.image} />
    <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.thinkbizhightech.com/" />
  </Helmet>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 bg-black rounded-3xl shadow-5xl border border-gray-900 p-6 md:p-10">
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
            {/* <Link
              to="/"
              className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition w-auto"
            >
              Back to Home
            </Link> */}
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
            {/* <Link
              to="/"
              className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition w-full md:hidden text-center"
            >
              Back to Home
            </Link> */}
          </div>
        </div>
      </div>
{/* ================= SERVICE BENEFITS SECTION ================= */}
<section className="bg-black py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* ================= LEFT CONTENT ================= */}
    <div className="lg:col-span-2 text-white">
    <a
  href="https://wa.me/918512001218?text=Hello%20I%20am%20interested%20in%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mb-6 px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 transition">
    CONTACT OUR TEAM
  </button>
</a>


      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Service Benefits
      </h2>

      <p className="text-gray-100 leading-relaxed  text-xl mb-8">
        This allows us to create a design strategy that not only sets you apart from the competition but also drives business results. Our design team is adept at using the latest web design technologies and trends to ensure your website is not just a digital placeholder, but a powerful tool for your business.If you are in the market for clothes, our platform is your best choice! The largest shopping mall!
      </p>

      {/* BENEFITS LIST */}
      <ul className="space-y-8 mb-8">
        <li className="flex items-start gap-4">
          <span className="text-orange-500 text-xl md:text-2xl flex-shrink-0">
            <FaDesktop />
          </span>
          <p className="text-gray-300 text-xl">
            A unique website that differentiates you from the competition.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="text-orange-500 text-xl md:text-2xl flex-shrink-0">
            <FaBars />
          </span>
          <p className="text-gray-300 text-xl">
            Improved user experience leading to higher customer satisfaction.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="text-orange-500 text-xl md:text-2xl flex-shrink-0">
            <FaShareAlt />
          </span>
          <p className="text-gray-300 text-xl">
            Seamless integration with social media platforms.
          </p>
        </li>
      </ul>

      <p className="text-gray-200 leading-relaxed mb-4 text-2xl py-2.5">
        But our job doesn’t end with the launch of your website. We provide ongoing maintenance and support services to ensure your site remains updated, secure, and performing at its best. Be it integrating new features, updating content, or troubleshooting, we’ve got you covered.
      </p>

      <p className="text-gray-200 leading-relaxed text-2xl py-2.5">
      Let us create a website that not only tells your brand story, but also drives growth and elevates your online presence. Embrace the power of an outstanding web presence with our Web Design Service.
      </p>
    </div>

    {/* ================= RIGHT SIDEBAR ================= */}
    <aside className="bg-gray-900 rounded-xl p-6 text-white h-fit">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Our Services
      </h3>

      <ul className="space-y-4 text-gray-300 text-center text-xl">
        <li><Link  to="/service/web" className="hover:text-orange-500 transition">Web Design & Development</Link></li>
        <li><Link to="/service/app"className="hover:text-orange-500 transition"> Android & iOS App Developmentt</Link></li>
        <li><Link to="/service/digital-marketing" className="hover:text-orange-500 transition"> Digital Marketing</Link></li>
        <li><Link  to="/service/seo" className="hover:text-orange-500 transition"> SEO Services</Link></li>
        <li><Link  to="/service/software" className="hover:text-orange-500 transition">Software Development</Link></li>
        <li><Link  to="/service/ai-automation" className="hover:text-orange-500 transition">AI Automation</Link></li>
        <li><Link to="/service/email" className="hover:text-orange-500 transition">   Email Marketing</Link></li>
        <li><Link  to="/service/brand" className="hover:text-orange-500 transition">Brand Promotion</Link></li>
      </ul>

      {/* CONTACT BOXES */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

  {/* Phone Card */}
  <a
  href="https://wa.me/918512001218"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="bg-[#696969] border border-gray-800 rounded-xl p-10 text-center flex flex-col items-center justify-center cursor-pointer hover:border-green-500 transition">
    <div className="text-green-500 text-3xl mb-4">
      📞
    </div>
    <p className="text-white font-semibold">
      +91 8512001218
    </p>
    <p className="text-gray-400 text-sm mt-1">
      Ph. Number
    </p>
  </div>
</a>

{/* Email Card → Mail */}
<a
  href="mailto:info@thinkbizhightech.com"
  className="block"
>
  <div className="bg-[#696969] border border-gray-800 rounded-xl p-10 text-center flex flex-col items-center justify-center cursor-pointer hover:border-[#ff7515] transition">
    <div className="text-[#ff7515] text-3xl mb-4">
      ✉
    </div>
    <p className="text-white font-semibold break-all">
      info@thinkbizhightech.com
    </p>
    <p className="text-gray-400 text-sm mt-1">
      Email Address
    </p>
  </div>
</a>


</div>

    </aside>

  </div>
</section>

{/* ================= NEWSLETTER ================= */}


{/* ================= TECHNOLOGIES ================= */}
 <TechSlider />
<BenefitsSection />
   <FAQSection />
{/* ================= TESTIMONIALS ================= */}
<section className="bg-black py-24 px-4">
  <div className="max-w-7xl mx-auto text-center text-white">

    {/* Small label */}
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
      <p className="text-xl tracking-widest text-gray-400">TESTIMONIALS</p>
    </div>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff7515]">
      We're Trusted by Clients
    </h2>

    <p className="text-gray-200 max-w-2xl mx-auto mb-16 text-xl">
      Our clients share their experiences of transformation and growth.
      Unfiltered feedback and the true testament to our service quality.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

      {/* Card 1 */}
      <div className="bg-[#12161c] p-8 rounded-xl min-h-[280px]">
        <p className="text-5xl text-gray-600 mb-4">“</p>
        <p className="text-gray-200 mb-8 leading-relaxed">
          Impressed with the results. The team was extremely professional and
          responsive throughout the entire process. I've received numerous
          compliments from both customers and colleagues on the new site.
        </p>
        <p className="font-semibold text-[#ff7515] text-xl">Bibhuti Bhusan Nayak</p>
        
      </div>

      {/* Card 2 */}
      <div className="bg-[#12161c] p-8 rounded-xl min-h-[280px]">
        <p className="text-5xl text-gray-600 mb-4">“</p>
        <p className="text-gray-200 mb-8 leading-relaxed">
          I had a best experience working with Astrearn on a website redesign
          project. I appreciated how the team explained every step of the
          process to keep me comfortable before moving forward.
        </p>
        <p className="font-semibold text-[#ff7515] text-xl">Prashant Nayak</p>
        
      </div>

      {/* Card 3 */}
      <div className="bg-[#12161c] p-8 rounded-xl min-h-[280px]">
        <p className="text-5xl text-gray-600 mb-4">“</p>
        <p className="text-gray-200 mb-8 leading-relaxed">
          The team at Astrearn was extremely knowledgeable and helpful in guiding
          me through the entire process. I am very pleased with their result,
          which helps me to get high compliments regarding my business.
        </p>
        <p className="font-semibold text-[#ff7515] text-xl">Payal Samantaray</p>

      </div>

    </div>
  </div>
</section>

      <WhatsAppButton />
      <Newsletter />
    </>
  );
};

export default Services;
