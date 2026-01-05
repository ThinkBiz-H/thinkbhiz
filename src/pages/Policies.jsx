import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const Policies = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-8 sm:px-16 text-white flex flex-col">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 p-12 rounded-3xl shadow-2xl border border-white/25">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-8 text-center tracking-wide drop-shadow-lg">
          🔐 Privacy Policy
        </h1>

        <p className="text-center text-gray-300 text-sm italic mb-10">
          <strong>Last updated:</strong> {formattedDate}
        </p>

        <p className="text-gray-100 mb-10 leading-relaxed text-lg text-center max-w-3xl mx-auto">
          <strong>ThinkBiz HighTech Private Limited</strong> (“ThinkBiz”, “we”,
          “our”, “us”) operates the website{" "}
          <strong>www.thinkbizhightech.com</strong>. We are committed to
          protecting your privacy and ensuring the security of your personal
          information.
        </p>

        {/* Section Component */}
        {[
          {
            title: "1. Information We Collect",
            content: (
              <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg">
                <li>Name, email address, phone number</li>
                <li>Business or company details</li>
                <li>
                  Payment-related information (processed securely via
                  third-party gateways)
                </li>
                <li>IP address, browser type, device information</li>
                <li>Information submitted via contact forms or inquiries</li>
              </ul>
            ),
          },
          {
            title: "2. How We Use Your Information",
            content: (
              <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg">
                <li>Provide and improve our services</li>
                <li>Communicate regarding inquiries, projects, or support</li>
                <li>Process payments and invoices</li>
                <li>Send important service-related updates</li>
                <li>Improve website performance and user experience</li>
              </ul>
            ),
          },
          {
            title: "3. Data Security",
            content: (
              <p className="text-gray-200 text-lg max-w-3xl">
                We implement appropriate technical and organizational measures
                to protect your personal data. Payment transactions are handled
                by secure third-party payment gateways, and we do not store
                sensitive card or banking information on our servers.
              </p>
            ),
          },
          {
            title: "4. Third-Party Disclosure",
            content: (
              <p className="text-gray-200 text-lg max-w-3xl">
                We do not sell or trade your personal information. Data may be
                shared only with trusted partners (such as payment processors
                and hosting providers) strictly for service delivery.
              </p>
            ),
          },
          {
            title: "5. Cookies",
            content: (
              <p className="text-gray-200 text-lg max-w-3xl">
                Our website may use cookies to enhance user experience. You can
                disable cookies through your browser settings.
              </p>
            ),
          },
          {
            title: "6. Your Consent",
            content: (
              <p className="text-gray-200 text-lg max-w-3xl">
                By using our website, you consent to our Privacy Policy.
              </p>
            ),
          },
          {
            title: "7. Contact Us",
            content: (
              <p className="text-gray-200 text-lg max-w-3xl font-semibold">
                📧 info@thinkbizhightech.com <br />
                📞 +91-85120 01218
              </p>
            ),
          },
        ].map(({ title, content }, i) => (
          <section key={i} className="mb-12 last:mb-0">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
              {title}
            </h2>
            {content}
          </section>
        ))}
      </div>

      {/* WhatsApp Button Fixed on bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Policies;
