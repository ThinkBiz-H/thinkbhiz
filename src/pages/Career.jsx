import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { ref, get, child } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import ApplyFrom from "../assets/Component/ApplyFrom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

import { trackEvent } from "../trackEvent";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, "jobs"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const jobsArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setJobs(jobsArray);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (jobTitle) => {
    // Login check hata diya, sidhe form khulega

    trackEvent("apply_click", {
      jobTitle,
      userEmail: user?.email || "guest", // agar user nahi to guest bheja jayega
    });

    setSelectedJob(jobTitle);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black py-20 px-6 max-w-7xl mx-auto">
      {/* Login alert hata diya */}

      {/* ===== HEADER ===== */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <p className="text-sm text-[#ff7515] font-semibold tracking-wide mb-3">
            • Build the Future With Us •
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Explore <span className="text-[#ff7515]">Career Opportunities</span>
            <br /> at ThinkBiz HighTech
          </h1>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            We empower our teams with mentorship, innovation and a culture that
            inspires growth. Share your CV with us:
            <br />
            <a
              href="mailto:info@thinkbizhightech.com"
              className="text-[#ff7515] font-semibold"
            >
              info@thinkbizhightech.com
            </a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed">
            At ThinkBiz HighTech, we believe in creating value through
            technology. We solve real-world challenges with modern digital
            solutions—powered by creativity, collaboration, and excellence.
          </p>
        </div>
      </div>

      {/* ===== JOB LIST ===== */}
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No job openings available.
        </p>
      ) : (
        <ul className="space-y-14">
          {jobs.map(
            ({
              id,
              title,
              description,
              experience,
              salary,
              deadline,
              jobType,
            }) => (
              <li
                key={id}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        {title}
                      </h2>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-10 text-gray-700 text-sm mb-6">
                        <p>
                          <span className="font-semibold">Experience:</span>{" "}
                          {experience}
                        </p>
                        <p>
                          <span className="font-semibold">Salary:</span>{" "}
                          {salary}
                        </p>
                        <p>
                          <span className="font-semibold">Deadline:</span>{" "}
                          {deadline}
                        </p>
                        <p>
                          <span className="font-semibold">Job Type:</span>{" "}
                          {jobType || "Full-Time / Part-Time"}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleApplyClick(title)}
                      className="self-start px-10 py-4 text-lg font-medium rounded-full bg-[#ff7515] text-white hover:bg-black shadow-md transition-all"
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}

      {/* MODAL */}
      {showModal && (
        <ApplyFrom jobTitle={selectedJob} onClose={() => setShowModal(false)} />
      )}

      <ToastContainer theme="dark" />
      <WhatsAppButton />
    </div>
  );
};

export default Career;
