// import {
//   FaAws,
//   FaWordpress,
//   FaReact,
//   FaPython,
//   FaNodeJs,
//   FaShopify,
// } from "react-icons/fa";
// import { SiGraphql, SiMysql, SiGooglecloud } from "react-icons/si";

// const techs = [
//   FaAws,
//   FaWordpress,
//   SiGraphql,
//   SiMysql,
//   SiGooglecloud,
//   FaPython,
//   FaReact,
//   FaNodeJs,
//   FaShopify,
// ];

// const TechSlider = () => {
//   return (
//     <section className="bg-black py-20 overflow-hidden">
//       <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-14">
//         Technologies that we majorly use for Website & App Development
//       </h2>

//       <div className="overflow-hidden w-full">
//         <div className="tech-slider gap-16 px-10">
//           {[...techs, ...techs].map((Icon, i) => (
//             <div
//               key={i}
//               className="text-6xl text-white opacity-70 hover:opacity-100 hover:text-green-500 transition"
//             >
//               <Icon />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechSlider;
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaWordpress,
  FaShopify,
  FaAndroid,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaMailchimp,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiGoogleads,
  SiSemrush,
  SiTensorflow,
  SiOpenai,
  SiCanva,
} from "react-icons/si";

/* ================= SERVICES + TECHNOLOGIES ================= */
const services = [
  {
    title: "Website Design & Development",
    techs: [
      { icon: FaHtml5, color: "text-orange-500" },
      { icon: FaCss3Alt, color: "text-blue-500" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: FaWordpress, color: "text-blue-600" },
      { icon: FaShopify, color: "text-green-500" },
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiMysql, color: "text-blue-500" },
    ],
  },
  {
    title: "Android & iOS App Development",
    techs: [
      { icon: FaAndroid, color: "text-green-500" },
      { icon: FaApple, color: "text-gray-300" },
      { icon: SiFlutter, color: "text-sky-400" },
      { icon: SiKotlin, color: "text-purple-500" },
      { icon: SiSwift, color: "text-orange-400" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiFirebase, color: "text-yellow-400" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiMysql, color: "text-blue-500" },
    ],
  },
  {
    title: "Digital Marketing",
    techs: [
      { icon: FaGoogle, color: "text-red-500" },
      { icon: SiGoogleads, color: "text-blue-500" },
      { icon: FaFacebook, color: "text-blue-600" },
      { icon: FaInstagram, color: "text-pink-500" },
      { icon: SiCanva, color: "text-cyan-400" },
      { icon: FaMailchimp, color: "text-yellow-500" },
      { icon: FaWordpress, color: "text-blue-600" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: FaNodeJs, color: "text-green-500" },
    ],
  },
  {
    title: "SEO Services",
    techs: [
      { icon: FaGoogle, color: "text-blue-500" },
      { icon: SiSemrush, color: "text-orange-500" },
      { icon: FaWordpress, color: "text-blue-600" },
      { icon: FaHtml5, color: "text-orange-500" },
      { icon: FaCss3Alt, color: "text-blue-500" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiMysql, color: "text-blue-500" },
      { icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    title: "Software Development",
    techs: [
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: FaPython, color: "text-yellow-400" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiMysql, color: "text-blue-500" },
      { icon: SiFirebase, color: "text-yellow-400" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: FaHtml5, color: "text-orange-500" },
      { icon: FaCss3Alt, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "AI Automation",
    techs: [
      { icon: FaRobot, color: "text-purple-500" },
      { icon: FaBrain, color: "text-pink-500" },
      { icon: SiOpenai, color: "text-green-400" },
      { icon: SiTensorflow, color: "text-orange-500" },
      { icon: FaPython, color: "text-yellow-400" },
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiMysql, color: "text-blue-500" },
      { icon: FaReact, color: "text-cyan-400" },
    ],
  },
  {
    title: "Email Marketing",
    techs: [
      { icon: FaMailchimp, color: "text-yellow-500" },
      { icon: FaGoogle, color: "text-red-500" },
      { icon: FaWordpress, color: "text-blue-600" },
      { icon: SiCanva, color: "text-cyan-400" },
      { icon: FaHtml5, color: "text-orange-500" },
      { icon: FaCss3Alt, color: "text-blue-500" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiMysql, color: "text-blue-500" },
      { icon: SiFirebase, color: "text-yellow-400" },
    ],
  },
  {
    title: "Brand Promotion",
    techs: [
      { icon: FaFacebook, color: "text-blue-600" },
      { icon: FaInstagram, color: "text-pink-500" },
      { icon: FaGoogle, color: "text-red-500" },
      { icon: SiCanva, color: "text-cyan-400" },
      { icon: FaWordpress, color: "text-blue-600" },
      { icon: FaHtml5, color: "text-orange-500" },
      { icon: FaCss3Alt, color: "text-blue-500" },
      { icon: SiJavascript, color: "text-yellow-400" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: FaNodeJs, color: "text-green-500" },
    ],
  },
];

const TechSlider = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  /* change service AFTER animation completes */
  useEffect(() => {
    const timer = setTimeout(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
      setAnimationKey((prev) => prev + 1); // restart animation
    }, 12000); // MUST match CSS duration

    return () => clearTimeout(timer);
  }, [serviceIndex]);

  const currentService = services[serviceIndex];

  return (
    <section className="bg-black py-20 overflow-hidden">
      {/* HEADING */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-12 transition-all duration-500">
        {currentService.title}
      </h2>

      {/* SLIDER */}
      <div className="overflow-hidden max-w-5xl mx-auto">
        <div
          key={animationKey}
          className="tech-slider-once gap-14 px-6"
        >
          {currentService.techs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`text-6xl ${item.color} opacity-90`}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
    