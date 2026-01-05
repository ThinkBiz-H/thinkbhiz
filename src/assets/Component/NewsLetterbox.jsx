import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/CoolMan.json";

import { trackEvent } from "../../trackEvent";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // ⭐ Firebase Analytics Event Track
    trackEvent("newsletter_subscribe", {
      location: "newsletter_section",
    });

    alert("Subscribed!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 bg-[#ff7515] rounded-3xl shadow-lg text-white my-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Left Animation Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Subscribe now!
          </h2>

          <p className="text-white/90 text-base sm:text-lg mb-6">
            Get the latest updates delivered to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full max-w-xl mx-auto md:mx-0 gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 py-3 sm:py-4 px-4 sm:px-6 border border-white/40 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="bg-black text-[#ff7515] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-md hover:bg-gray-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
