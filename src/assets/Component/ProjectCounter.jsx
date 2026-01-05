import React, { useEffect, useState } from "react";

const ProjectCounter = ({ counters, bg = "bg-white", text = "text-black" }) => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, i) => {
      const speed = 20;
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < counter.value) {
            newCounts[i] += 1;
          }
          return newCounts;
        });
      }, speed);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [counters]);

  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
      {counters.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${bg}`}
        >
          <h2 className={`text-4xl font-bold ${text}`}>{counts[index]}+</h2>
          <p className={`mt-2 font-medium ${text}`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCounter;
