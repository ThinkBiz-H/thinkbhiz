import React, { useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { db } from "../firebase";
import { ref, push } from "firebase/database";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "../assets/Component/NewsLetterbox";
import WhatsAppButton from "../assets/Component/WhatsAppButton";
import { Helmet } from 'react-helmet-async';

import { trackEvent } from "../trackEvent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      tempErrors.email = "Invalid email address";

    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone number must be 10 digits";

    if (!formData.message.trim())
      tempErrors.message = "Please enter your message";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const contactRef = ref(db, "contacts");
      push(contactRef, formData)
        .then(() => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          // Track event here
          trackEvent("contact_form_submit", {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        })
        .catch((error) => {
          console.error(error);
          toast.error("Error sending message.", {
            position: "top-right",
            autoClose: 3000,
          });
        });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 md:px-16 border-b-4 border-orange-500">
        <Helmet>
                <title>Contact Us- ThinkBizHighTech

        </title>
         <meta
              name="Description"
              content="Contact us for all your IT needs! We are a leading IT company in Noida, delivering top-notch solutions with expertise and reliability."
            />
            </Helmet>
        <h1 className="text-5xl font-extrabold mb-12 text-orange-500">
          Contact Us
        </h1>
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-16">
          {/* Left Side: Company Info */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold border-b-4 border-orange-500 pb-2 mb-6">
              Company Details
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ThinkBiz High Tech Pvt .Ltd
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Looking for website development, Android app development, iOS
                app development, or digital marketing services? You are in the
                right place. ThinkBiz Hightech Private Limited is a leading
                company specialising in comprehensive digital solutions,
                including mobile app development and digital marketing. For more
                information, feel free to contact us.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500" />
              <a href="tel:+918512001218" className="hover:underline">
                +91 85120 01218
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-500" />
              <a
                href="mailto:info@thinkbizhightech.com"
                className="hover:underline"
              >
                info@thinkbizhightech.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <p>
                {" "}
                B-46, B Block, Sector 63,
                <br />
                Noida, Uttar Pradesh 201301, India
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6">
              <a
                href="https://www.facebook.com/ThinkBizHT/about/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-500 transition"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://wa.me/918512001218"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-orange-500 transition"
              >
                <FaWhatsapp size={28} />
              </a>

              <a
                href="https://in.linkedin.com/company/thinkbizhightech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-500 transition"
              >
                <FaLinkedinIn size={28} />
              </a>
              <a
                href="https://www.instagram.com/thinkbizht/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-500 transition"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              Reach Out to Our Team
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-1 font-semibold text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full rounded-md px-4 py-2 text-black ${
                    errors.name ? "border-2 border-red-500" : "border"
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name "
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold  text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full rounded-md px-4 py-2 text-black ${
                    errors.email ? "border-2 border-red-500" : "border"
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-1 font-semibold  text-black"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full rounded-md px-4 py-2 text-black ${
                    errors.phone ? "border-2 border-red-500" : "border"
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-1 font-semibold  text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full rounded-md px-4 py-2 text-black resize-none ${
                    errors.message ? "border-2 border-red-500" : "border"
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
      <WhatsAppButton />
      <Newsletter />
    </>
  );
};

export default Contact;
