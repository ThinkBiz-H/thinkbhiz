import {
  FileText,
  DollarSign,
  User,
  Settings,
  ChevronRight,
} from "lucide-react"


/* ---------- DATA ---------- */
const benefits = [
  {
    id: "cost-savings",
    title: "Cost savings",
    description:
      "By automating processes, software development can help reduce labor costs and increase productivity, ultimately leading to cost savings. So, you should consult with a reputed software development company in India like us that will help you to save a lot.",
    highlight: "software development company in India",
  },
  {
    id: "software-integration",
    title: "Software integration",
    description:
      "Commercial software may result in errors and a decrease in productivity. However, custom software can readily integrate into the software ecosystem of any company, reducing the possibility of integration issues. You may also integrate your new software with current software to improve business processes by using custom software development.",
    highlight: "custom software development",
  },
  {
    id: "better-decision",
    title: "Better decision-making",
    description:
      "Decision-making skills are the cornerstones of a company's success. Software can provide real-time data and analytics, which can help organizations make more informed and data-driven decisions. Our software development services make decisions straightforward and simpler.",
    highlight: "software development services",
  },
  {
    id: "competitive-advantage",
    title: "Competitive advantage",
    description:
      "Custom software allows companies by offering tailor-made, cutting-edge solutions designed to meet their specific needs and requirements. When businesses use software solutions designed by the best software development company in India, they gain a competitive edge in today’s fast-paced market.",
    highlight: "best software development company in India",
  },
]

/* ---------- SAFE HIGHLIGHT COMPONENT ---------- */
function HighlightText({ text, highlight }) {
  if (!highlight) return <>{text}</>

  const parts = text.split(highlight)

  return (
    <>
      {parts[0]}
      <strong className="font-semibold text-gray-900">{highlight}</strong>
      {parts[1]}
    </>
  )
}

/* ---------- MAIN COMPONENT ---------- */
export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-14">
          BENEFITS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-12">
            {[benefits[0], benefits[1]].map((item) => (
              <div key={item.id} className="relative">
                <span className="inline-block bg-[#ff7515] text-white px-4 py-2 rounded-md text-2xl font-medium mb-4">
                  {item.title}
                </span>

                <p className="text-base text-gray-700 leading-relaxed">
                  <HighlightText
                    text={item.description}
                    highlight={item.highlight}
                  />
                </p>

                {/* connector */}
                <div className="hidden lg:block absolute top-6 right-0 w-28 border-t-2 border-dashed border-[#ff7515]" />
                <span className="hidden lg:block absolute top-6 right-0 w-3 h-3 bg-[#ff7515] rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
            ))}
          </div>

          {/* CENTER DIAGRAM */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {/* center */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#ff7515] to-black
 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg z-10">
                C
              </div>

              {/* rings */}
              <div className="absolute inset-0 rounded-full border-4 border-[#ff7515]/80" />
              <div className="absolute inset-4 rounded-full border-4 border-violet-400/20" />

              {/* icons */}
              <IconCircle position="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <FileText />
              </IconCircle>

              <IconCircle position="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <DollarSign />
              </IconCircle>

              <IconCircle position="right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <Settings />
              </IconCircle>

              <IconCircle position="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <User />
              </IconCircle>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-12 text-right">
            {[benefits[2], benefits[3]].map((item) => (
              <div key={item.id} className="relative">
                {/* connector */}
                <div className="hidden lg:block absolute top-6 left-0 w-28 border-t-2 border-dashed border-[#ff7515]" />
                <span className="hidden lg:block absolute top-6 left-0 w-3 h-3 bg-[#ff7515] rounded-full -translate-x-1/2 -translate-y-1/2" />

                <span className="inline-block bg-[#ff7515] text-white px-4 py-2 rounded-md text-2xl font-medium mb-4">
                  {item.title}
                </span>

                <p className=" text-gray-700 leading-relaxed text-base">
                  <HighlightText
                    text={item.description}
                    highlight={item.highlight}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        
      </div>
    </section>
  )
}

/* ---------- ICON WRAPPER ---------- */
function IconCircle({ children, position }) {
  return (
    <div
      className={`absolute ${position} w-16 h-16 bg-gradient-to-br from-[#ff7515] to-black
 rounded-full flex items-center justify-center shadow-md`}
    >
      <span className="text-white w-7 h-7">{children}</span>
    </div>
  )
}
