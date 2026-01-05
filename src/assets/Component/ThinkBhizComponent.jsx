import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ref, push } from "firebase/database";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { trackEvent } from "../../trackEvent";

const texts = [
  "Grow your business with us",
  "Innovative Solutions",
  "Expert IT Services",
  "Digital Marketing Strategies",
];

export default function ThinkBhizComponent() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleConfirm = () => {
    if (!selectedDate) return toast.error("Please select a date first!");

    trackEvent("meeting_confirm", {
      selected_date: selectedDate,
    });

    const phoneNumber = "918512001218";
    const message = encodeURIComponent(
      `Hello! I want to schedule a meeting on ${selectedDate}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setShowCalendar(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await push(ref(db, "contactForm"), formData);

    /** FIREBASE ANALYTICS EVENT */
    trackEvent("contact_form_submitted", {
      name: formData.name,
      service: formData.service,
    });

    toast.success("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      number: "",
      service: "",
      message: "",
    });
  };

  return (
    <div
      className="max-w-8xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 font-sans"
      style={{ backgroundColor: "#ff7515" }}
    >
      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-5xl font-bold uppercase tracking-widest mb-12">
          Welcome to ThinkBiz
        </p>

        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "3rem" }}
        >
          {texts[currentTextIndex]}
        </h2>

        <p className="text-gray-700 mb-8 max-w-md font-semibold">
          We provide top-notch software development, digital marketing, and IT
          services tailored to your business needs.
        </p>

        <button
          onClick={() => {
            setShowCalendar(!showCalendar);
            trackEvent("meeting_button_click");
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold rounded-full hover:brightness-110 transition w-fit"
        >
          Schedule Meeting
        </button>

        {showCalendar && (
          <div className="mt-6 p-4 max-w-xs bg-gray-50 rounded-lg shadow-md">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleConfirm}
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              Confirm
            </button>
          </div>
        )}
      </div>

      {/* RIGHT — CONTACT FORM */}
      <div className="flex-1 bg-white p-5 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Number</label>
            <input
              name="number"
              type="number"
              required
              value={formData.number}
              onChange={handleChange}
              placeholder="Your number"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Services</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="seo-services">SEO Services</option>
              <option value="software-development">Software Development</option>
              <option value="graphic-design">Graphic Designing</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="3"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* ToastContainer */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
