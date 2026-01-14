"use client" // agar Next.js hai

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What are the software outsourcing services you provide?",
    a: "Software development outsourcing means the company hires a third-party vendor to either create or handle software development on behalf of the business.",
  },
  {
    q: "What are the basic steps involved in the creation of custom software for my business?",
    a: "The process includes requirement analysis, planning, UI/UX design, development, testing, deployment, and ongoing support.",
  },
  {
    q: "Can I engage locally with a manager whom I can meet on a regular basis?",
    a: "Yes, we provide dedicated managers for smooth communication and regular meetings.",
  },
  {
    q: "Do you have your own development team?",
    a: "Yes, we have an in-house team of experienced designers, developers, and project managers.",
  },
  {
    q: "What is custom software development?",
    a: "Custom software development is the process of designing software tailored specifically to your business needs.",
  },
  {
    q: "How could my business benefit from custom software?",
    a: "It improves efficiency, reduces costs, automates processes, and gives your business a competitive advantage.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white">
      {/* TOP CTA */}
      <div className="bg-gradient-to-r from-[#ff7515] to-black py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-white text-5xl md:text-3xl font-semibold">
            Ready to start conversation? Consult with the best IT company in India.
          </h3>
         <a
  href="https://wa.me/91XXXXXXXXXX?text=Hello%20I%20want%20to%20discuss%20my%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-3 
  bg-gradient-to-r from-[#ff7515] to-[#ff7515]
  text-white px-8 py-3 rounded-full font-semibold 
  shadow-lg hover:shadow-xl transition-all duration-300 
  hover:scale-105"
>
  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition"></span>

  {/* WhatsApp Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5 fill-white"
  >
    <path d="M16.003 2.004c-7.732 0-14 6.268-14 14 0 2.468.646 4.884 1.876 7.02L2 30l7.18-1.848A13.93 13.93 0 0 0 16.003 30c7.732 0 14-6.268 14-14s-6.268-13.996-14-13.996zm0 25.497a11.47 11.47 0 0 1-5.86-1.61l-.42-.25-4.26 1.096 1.136-4.15-.276-.43a11.474 11.474 0 1 1 9.68 5.344z" />
  </svg>

  <span>Chat on WhatsApp</span>

  {/* Arrow */}
  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          STILL HAVE QUESTIONS?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We have all the answers for you!
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between px-5 py-4 text-left
                bg-gradient-to-r from-[#ff7515] to-black text-white font-medium"
              >
                <span className="flex items-center gap-3 text-2xl">
                  <span className="bg-white text-black w-7 h-7 flex items-center justify-center rounded-full text-2xl font-bold">
                    {index + 1}
                  </span>
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="bg-white px-5 py-4 text-gray-700 text-2xl leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
