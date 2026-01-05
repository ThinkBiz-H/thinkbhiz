import React, { useState } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "../../trackEvent";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-black py-0 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={() => trackEvent("navbar_logo_click")}>
            <img src="/logo-white.jpeg" alt="logo" className="w-40 h-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-orange-400 relative">
          <li className="cursor-pointer hover:text-black">
            <Link
              to="/"
              onClick={() => trackEvent("navbar_navigation", { page: "Home" })}
            >
              Home
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="/about"
              onClick={() => trackEvent("navbar_navigation", { page: "About" })}
            >
              About
            </Link>
          </li>

          {/* Service Dropdown */}
          <li className="group cursor-pointer hover:text-black relative">
            Services
            <ul
              className="
              absolute left-0 top-8 
              bg-white text-black shadow-lg rounded-lg p-4 
              w-58 
              opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 z-50
            "
            >
              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/web"
                  onClick={() =>
                    trackEvent("navbar_service", { service: "Web Development" })
                  }
                >
                  Website Design & Development
                </Link>
              </li>
              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/app"
                  onClick={() =>
                    trackEvent("navbar_service", { service: "App Development" })
                  }
                >
                  Android & iOS App Development
                </Link>
              </li>

              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/digital-marketing"
                  onClick={() =>
                    trackEvent("navbar_service", {
                      service: "Digital Marketing",
                    })
                  }
                >
                  Digital Marketing
                </Link>
              </li>

              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/seo"
                  onClick={() =>
                    trackEvent("navbar_service", { service: "SEO Services" })
                  }
                >
                  SEO Services
                </Link>
              </li>

              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/software"
                  onClick={() =>
                    trackEvent("navbar_service", {
                      service: "Software Development",
                    })
                  }
                >
                  Software Development
                </Link>
              </li>
              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/ai-automation"
                  onClick={() =>
                    trackEvent("navbar_service", {
                      service: "AI Automation",
                    })
                  }
                >
                  AI Automation
                </Link>
              </li>
              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/email"
                  onClick={() =>
                    trackEvent("navbar_service", { service: "Email Marketing" })
                  }
                >
                  Email Marketing
                </Link>
              </li>

              <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                <Link
                  to="/service/brand"
                  onClick={() =>
                    trackEvent("navbar_service", { service: "Brand Promotion" })
                  }
                >
                  Brand Promotion
                </Link>
              </li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="/industries"
              onClick={() =>
                trackEvent("navbar_navigation", { page: "Industries" })
              }
            >
              Industries
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="/package"
              onClick={() =>
                trackEvent("navbar_navigation", { page: "Pricing" })
              }
            >
              Pricing
            </Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link
              to="/blog"
              onClick={() => trackEvent("navbar_navigation", { page: "Blog" })}
            >
              Blog
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="/contact"
              onClick={() =>
                trackEvent("navbar_navigation", { page: "Contact" })
              }
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <h3
            className="font-bold"
            onClick={() => trackEvent("navbar_phone_click")}
          >
            +91-8512001218
          </h3>

          <Link
            to="/contact"
            onClick={() =>
              trackEvent("navbar_cta_click", { button: "Free Quote" })
            }
            className="bg-orange-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-orange-500 transition inline-block text-center"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-black text-3xl transition-transform duration-500 ${
            open ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => {
            setOpen(!open);
            trackEvent("navbar_mobile_toggle", { open: !open });
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mt-0 space-y-0 bg-black p-2 rounded-lg border border-gray-700 items-center">
          <ul className="flex flex-col gap-3 text-orange-400 font-semibold items-center rounded-full min-w-8/12">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setOpen(false);
                  trackEvent("navbar_mobile_nav", { page: "Home" });
                }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => {
                  setOpen(false);
                  trackEvent("navbar_mobile_nav", { page: "About" });
                }}
              >
                About
              </Link>
            </li>

            {/* Mobile Service Dropdown */}
            <details className="text-center min-w-8/12 rounded-2xl">
              <summary className="cursor-pointer">Services</summary>
              <ul className="mt-2 bg-white text-black space-y-1 rounded-2xl">
                <li>
                  <Link
                    to="/service/web"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "Web Development",
                      })
                    }
                  >
                    Website Design & Development
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service/app"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "App Development",
                      })
                    }
                  >
                    Android & iOS App Development
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service/digital-marketing"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "Digital Marketing",
                      })
                    }
                  >
                    Digital Marketing
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service/seo"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "SEO Services",
                      })
                    }
                  >
                    SEO Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service/software"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "Software Development",
                      })
                    }
                  >
                    Software Development
                  </Link>
                </li>
                <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
                  <Link
                    to="/service/ai-automation"
                    onClick={() =>
                      trackEvent("navbar_service", {
                        service: "AI Automation",
                      })
                    }
                  >
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/email"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "Email Marketing",
                      })
                    }
                  >
                    Email Marketing
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service/brand"
                    onClick={() =>
                      trackEvent("navbar_mobile_service", {
                        service: "Brand Promotion",
                      })
                    }
                  >
                    Brand Promotion
                  </Link>
                </li>
              </ul>
            </details>

            <li>
              <Link
                to="/industries"
                onClick={() => {
                  setOpen(false);
                  trackEvent("navbar_mobile_nav", { page: "Industries" });
                }}
              >
                Industries
              </Link>
            </li>

            <li>
              <Link
                to="/package"
                onClick={() => {
                  setOpen(false);
                  trackEvent("navbar_mobile_nav", { page: "Pricing" });
                }}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => {
                  setOpen(false);
                  trackEvent("navbar_mobile_nav", { page: "Blog" });
                }}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => {
                  setOpen(false);
                  trackEvent("navbar_mobile_nav", { page: "Contact" });
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4 pt-3 items-center">
            <h3
              className="font-bold text-white"
              onClick={() => trackEvent("navbar_mobile_phone_click")}
            >
              +91-8512001218
            </h3>

            <Link
              to="/contact"
              className="bg-orange-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-orange-500 transition inline-block text-center"
              onClick={() => {
                setOpen(false);
                trackEvent("navbar_mobile_cta_click", { button: "Free Quote" });
              }}
            >
              Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
