import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { trackEvent } from "../../trackEvent";
import { ChevronDown, MessageCircle } from "lucide-react";

const Navbar = () => {
  const location = useLocation(); // ✅ IMPORTANT
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      key={location.pathname} // ✅ MAIN FIX
      className="bg-white text-black px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => trackEvent("navbar_logo_click")}>
          <img src="/logo-white.jpeg" alt="logo" className="w-40 h-auto" />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex gap-8 font-semibold text-orange-400 relative">
          {[
            ["Home", "/"],
            ["About", "/about"],
          ].map(([label, path]) => (
            <li key={label} className="hover:text-black">
              <Link
                to={path}
                onClick={() =>
                  trackEvent("navbar_navigation", { page: label })
                }
              >
                {label}
              </Link>
            </li>
          ))}

          {/* ===== SERVICES (DESKTOP HOVER) ===== */}
          <li className="relative group cursor-pointer hover:text-black">
            <span className="inline-flex items-center gap-1">
              Services
            </span>

            <ul
              className="
                absolute left-0 top-full mt-3
                bg-white text-black
                shadow-xl rounded-xl p-3
                w-64
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                z-50
              "
            >
              {[
                ["Website Design & Development", "/service/web"],
                ["Android & iOS App Development", "/service/app"],
                ["Digital Marketing", "/service/digital-marketing"],
                ["SEO Services", "/service/seo"],
                ["Software Development", "/service/software"],
                ["AI Automation", "/service/ai-automation"],
                ["Email Marketing", "/service/email"],
                ["Brand Promotion", "/service/brand"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    onClick={() =>
                      trackEvent("navbar_service", { service: label })
                    }
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {[
            ["Industries", "/industries"],
            ["Pricing", "/pricing"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <li key={label} className="hover:text-black">
              <Link
                to={path}
                onClick={() =>
                  trackEvent("navbar_navigation", { page: label })
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ================= DESKTOP WHATSAPP ================= */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/918512001218"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ff7515] text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>+91 85120 01218</span>
          </a>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black rounded-xl p-4 mt-2">
          <ul className="flex flex-col items-center gap-4 text-orange-400 font-semibold">
            {[
              ["Home", "/"],
              ["About", "/about"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => {
                    closeMobileMenu();
                    trackEvent("navbar_mobile_nav", { page: label });
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* ===== SERVICES (MOBILE CLICK) ===== */}
            <li className="w-full text-center">
              <button
                onClick={() =>
                  setMobileServicesOpen(!mobileServicesOpen)
                }
                className="w-full py-2 flex items-center justify-center gap-2"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <ul className="mt-2 bg-white text-black rounded-xl py-2">
                  {[
                    ["Website Design & Development", "/service/web"],
                    ["Android & iOS App Development", "/service/app"],
                    ["Digital Marketing", "/service/digital-marketing"],
                    ["SEO Services", "/service/seo"],
                    ["Software Development", "/service/software"],
                    ["AI Automation", "/service/ai-automation"],
                    ["Email Marketing", "/service/email"],
                    ["Brand Promotion", "/service/brand"],
                  ].map(([label, path]) => (
                    <li key={label}>
                      <Link
                        to={path}
                        onClick={() => {
                          closeMobileMenu();
                          trackEvent("navbar_mobile_service", {
                            service: label,
                          });
                        }}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {[
              ["Industries", "/industries"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => {
                    closeMobileMenu();
                    trackEvent("navbar_mobile_nav", { page: label });
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE WHATSAPP */}
          <div className="flex justify-center mt-6">
            <a
              href="https://wa.me/918512001218"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 bg-[#ff7515] text-white px-5 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
