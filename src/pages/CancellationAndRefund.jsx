import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const CancellationAndRefund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-8 sm:px-16 text-white flex flex-col">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/25">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-8 text-center tracking-wide drop-shadow-lg">
          🔄 Cancellation and Refund Policy
        </h1>

        <p className="text-center text-gray-300 text-sm italic mb-10 max-w-3xl mx-auto">
          At ThinkBiz HighTech Private Limited, we value transparency and
          fairness in all our business dealings.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Cancellation
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg max-w-3xl">
            <li>
              Service cancellation requests must be submitted in writing via
              email
            </li>
            <li>
              Once a project has started, cancellation may not be possible
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Refund Policy
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-200 text-lg max-w-3xl">
            <li>No refunds will be issued once the service has commenced</li>
            <li>
              Advance payments are non-refundable, as they cover project
              planning, resource allocation, and initial work
            </li>
            <li>
              Refunds, if any, are subject to specific terms mentioned in the
              signed proposal or agreement
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Exceptions
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl">
            In rare cases of duplicate payment or technical error, refunds may
            be processed after internal verification within 7–10 business days.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1 tracking-wide">
            Contact for Refund Queries
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

export default CancellationAndRefund;
