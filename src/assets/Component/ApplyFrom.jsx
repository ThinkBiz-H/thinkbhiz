import React, { useState } from "react";
import { toast } from "react-toastify";
import WhatsAppButton from "./WhatsAppButton";
import { trackEvent } from "../../trackEvent";

const ApplyForm = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⭐ GA EVENT — Form Submit
    trackEvent("apply_form_submit", {
      job: jobTitle,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    const whatsappNumber = "918512001218";

    const message = `Hi, I want to apply for the job: ${jobTitle}.\nHere are my details:\nName: ${
      formData.name
    }\nEmail: ${formData.email}\nPhone: ${formData.phone}\nResume: ${
      formData.resumeLink || "N/A"
    }`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // ⭐ GA EVENT — Redirect to WhatsApp
    trackEvent("apply_whatsapp_redirect", {
      job: jobTitle,
      source: "career_form",
    });

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          Apply for {jobTitle}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800"
          />

          <input
            type="text"
            name="resumeLink"
            placeholder="Resume Link (optional)"
            value={formData.resumeLink}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded w-full font-semibold"
          >
            Submit Application
          </button>
        </form>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default ApplyForm;
