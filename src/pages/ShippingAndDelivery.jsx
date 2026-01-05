import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const ShippingAndDelivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-8 sm:px-16 text-white flex flex-col">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/25">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-8 text-center tracking-wide drop-shadow-lg">
          🚚 Shipping and Delivery Policy
        </h1>

        <p className="text-center text-gray-300 text-sm italic mb-10 max-w-3xl mx-auto">
          ThinkBiz HighTech Private Limited provides digital and service-based
          solutions only. No physical products are shipped.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Service Delivery
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg max-w-3xl">
            <li>
              All deliverables are provided digitally via email, cloud
              platforms, project management tools, or secure links
            </li>
            <li>
              Project timelines are shared and agreed upon before commencement
            </li>
            <li>
              Delivery timelines may vary based on project scope, client
              feedback, and third-party dependencies
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Delays
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl">
            Delays caused due to incomplete client inputs, approvals, or force
            majeure events will not be considered a breach of delivery terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Contact Us
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl font-semibold">
            📧 info@thinkbizhightech.com <br />
            📞 +91-85120 01218
          </p>
        </section>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default ShippingAndDelivery;
