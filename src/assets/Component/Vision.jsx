import React, { useState } from "react";

const Vision = () => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // Calculate rotation
    const rotateX = (y / height - 0.5) * 20;
    const rotateY = (x / width - 0.5) * -20;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <section className="w-full bg-[#FF7515] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-3">Our Vision</h2>
            <p className="text-gray-900 leading-relaxed font-semibold">
              Our vision is to create innovative digital solutions that empower
              businesses of all sizes to achieve growth and efficiency through
              technology. We strive to deliver top-notch services that ensure
              customer satisfaction, trust, and long-term success in the rapidly
              evolving digital world with modern approaches.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-3">Our Mission</h2>
            <p className="text-gray-900 leading-relaxed font-semibold">
              Our mission is to provide result-oriented solutions that help
              businesses scale, deliver value, and stay ahead of competition. We
              focus on innovation, long-term relationships, quality service, and
              affordable digital transformation so that our clients succeed in
              today’s competitive and technology-driven market.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE WITH MOUSE ROTATION */}
        <div
          className="rounded-xl shadow-xl overflow-hidden bg-transparent border-none
                     w-full max-w-md mx-auto md:mx-0 md:w-[450px] md:h-[340px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "1000px",
            transition: "transform 0.2s ease-out",
          }}
        >
          <img
            src="/Vision.svg"
            alt="Vision Mission"
            style={{
              transform,
              transition: "transform 0.15s ease-out",
              backfaceVisibility: "hidden",
            }}
            className="w-full h-full object-cover will-change-transform bg-transparent border-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
