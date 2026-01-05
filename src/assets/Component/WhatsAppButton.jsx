import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "../../trackEvent";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const phoneNumber = "918512001218";
  const message = encodeURIComponent("Hello! I want to chat with you.");

  useEffect(() => {
    if (open) {
      setAnimate(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setAnimate(false), 300);
    }
  }, [open]);

  const togglePopup = () => {
    setOpen((prev) => !prev);

    // 🔥 Track Open / Close
    trackEvent("whatsapp_popup_toggle", {
      status: !open ? "opened" : "closed",
    });
  };

  return (
    <>
      {/* Floating WhatsApp button */}
      <button
        onClick={() => {
          togglePopup();
          trackEvent("whatsapp_floating_btn_click"); // 🔥 Track Floating Click
        }}
        aria-label="WhatsApp Chat"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl
          transform transition duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400 z-50
          animate-pulse-smooth flex items-center justify-center"
      >
        <FaWhatsapp
          size={26}
          className="hover:text-orange-500 cursor-pointer"
          aria-hidden="true"
        />
      </button>

      {/* Background Blur */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePopup}
      ></div>

      {/* Popup Window */}
      {animate && (
        <div
          className={`fixed bottom-24 right-8 bg-white rounded-2xl shadow-2xl w-80 p-6 z-50
          transform transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-green-600 font-bold text-lg">
              Chat with us on WhatsApp
            </h3>
            <button
              onClick={() => {
                togglePopup();
                trackEvent("whatsapp_popup_close_btn_click"); // 🔥 Track Close Btn
              }}
              aria-label="Close"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              &#10005;
            </button>
          </div>

          <p className="mb-5 text-gray-700 text-sm">
            Click the button below to start chatting instantly.
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center shadow-md transition"
            onClick={() => {
              setOpen(false);
              trackEvent("whatsapp_chat_start", {
                phone: phoneNumber,
              }); // 🔥 Track WhatsApp Chat Start
            }}
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-smooth {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 10px 10px rgba(16, 185, 129, 0);
          }
        }

        .animate-pulse-smooth {
          animation: pulse-smooth 2.5s infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
