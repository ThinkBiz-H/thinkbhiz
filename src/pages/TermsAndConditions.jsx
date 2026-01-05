import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const TermsAndConditions = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const sections = [
    {
      title: "Services",
      content: (
        <>
          <p className="mb-4">ThinkBiz provides:</p>
          <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg">
            <li>Website design and development</li>
            <li>Android & iOS mobile application development</li>
            <li>Digital marketing & SEO services</li>
            <li>AI automation solutions</li>
            <li>Custom software development</li>
          </ul>
          <p className="mt-4">
            All services are provided based on mutually agreed proposals, scope
            documents, or contracts.
          </p>
        </>
      ),
    },
    {
      title: "Payments",
      content: (
        <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg">
          <li>Payments must be made as per the agreed proposal or invoice</li>
          <li>All prices are in INR unless stated otherwise</li>
          <li>For all International payments accepted in USD Dollar</li>
          <li>
            Payment gateway charges or taxes (if applicable) are borne by the
            client
          </li>
        </ul>
      ),
    },
    {
      title: "Intellectual Property",
      content: (
        <p className="text-gray-200 text-lg max-w-3xl">
          All content, designs, code, and materials developed by ThinkBiz remain
          our intellectual property until full payment is received, unless
          otherwise agreed in writing.
        </p>
      ),
    },
    {
      title: "User Responsibilities",
      content: (
        <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg">
          <li>Use the website only for lawful purposes</li>
          <li>
            Attempting to gain unauthorized access to our systems is prohibited
          </li>
          <li>Do not copy or misuse any website content</li>
        </ul>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <p className="text-gray-200 text-lg max-w-3xl">
          ThinkBiz shall not be liable for indirect or consequential damages
          arising from service usage, delays, or third-party dependencies.
        </p>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <p className="text-gray-200 text-lg max-w-3xl">
          These terms shall be governed by the laws of India. Any disputes shall
          be subject to the jurisdiction of Gautam Budh Nagar,Noida
        </p>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <p className="text-gray-200 text-lg max-w-3xl font-semibold">
          📧 info@thinkbizhightech.com <br />
          📞 +91-85120 01218
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-8 sm:px-16 text-white flex flex-col">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 p-12 rounded-3xl shadow-2xl border border-white/25">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-8 text-center tracking-wide drop-shadow-lg">
          📜 Terms and Conditions
        </h1>

        <p className="text-center text-gray-300 text-sm italic mb-10">
          <strong>Last updated:</strong> {formattedDate}
        </p>

        <p className="text-gray-100 mb-10 leading-relaxed text-lg text-center max-w-3xl mx-auto">
          Welcome to <strong>ThinkBiz HighTech Private Limited</strong>. By
          accessing or using <strong>www.thinkbizhightech.com</strong>, you
          agree to comply with and be bound by the following Terms and
          Conditions.
        </p>

        {sections.map(({ title, content }, i) => (
          <section key={i} className="mb-12 last:mb-0">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
              {title}
            </h2>
            {content}
          </section>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default TermsAndConditions;
