import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trackEvent } from "../../trackEvent";

const Whychoose = () => {
  return (
    <>
      <section className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src="https://webnox.in/wp-content/uploads/2024/11/SEO-and-Google-Ads.png"
              alt="SEO and Google Ads marketing illustration"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-5">
            <h2 className="text-4xl font-bold text-[#ff7515]">
              Reach More Customers
            </h2>

            <p className="text-white leading-relaxed">
              We should give equal importance to promotional activities
              to improve the sale of conversion. Our unique expertise provides
              you with distinct and customized marketing strategies to enable
              your success. You can easily attract more customers with your
              perfect web design and online marketing. See how our marketing
              experts can help to enhance and scale your business. While a
              well-designed website is essential, combining it
              with SEO and Google Ads can develop your business to the next
              level. These strategies drive targeted traffic, improve
              visibility, and help convert visitors into loyal customers.
              Explore our work below and together we grow your business.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <Link to="/service/seo">
                <button
                  type="button"
                  aria-label="Navigate to SEO service page"
                  className="bg-[#ff7515] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#e56712] transition-all"
                >
                  SEO
                </button>
              </Link>
              <Link to="/service/digital-marketing">
                <button
                  type="button"
                  aria-label="Navigate to Google Ads service page"
                  className="border border-[#ff7515] text-[#ff7515] px-6 py-3 rounded-xl font-medium hover:bg-[#ff7515] hover:text-white transition-all"
                >
                  Google ads
                </button>
              </Link>
              <Link to="/service/digital-marketing">
                <button
                  type="button"
                  aria-label="Navigate to Meta Ads service page"
                  className="border border-[#ff7515] text-[#ff7515] px-6 py-3 rounded-xl font-medium hover:bg-[#ff7515] hover:text-white transition-all"
                >
                  Meta ads
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-10 bg-white mb-0">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-15 text-center md:text-left px-6">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h2 className="text-4xl font-bold text-[#ff7515]">
              We Don’t Just Build Websites,We Build Brands
            </h2>

            {/* Gradient Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ff7515] to-[#ff9b4d] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
                aria-label="Contact us to build your dream website"
                onClick={() =>
                  trackEvent("Clicked Build Your Dream Website Button")
                }
              >
                Let’s Build Your Dream Website
              </motion.button>
            </Link>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
            <p className="text-black leading-relaxed max-w-md font-semibold">
              We deliver modern digital solutions including web development,
              mobile app development, branding and digital marketing – helping
              businesses scale faster and compete stronger in the online world.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Whychoose;
