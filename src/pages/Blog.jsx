// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { ref, get, child } from "firebase/database";
// import { Helmet } from "react-helmet-async";

// const Blog = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const dbRef = ref(db);
//         const snapshot = await get(child(dbRef, "blogs"));

//         if (snapshot.exists()) {
//           const data = snapshot.val();

//           // 🔥 convert + sort latest first
//           const blogsArray = Object.entries(data)
//             .map(([id, blog]) => ({
//               id,
//               ...blog,
//             }))
//             .sort((a, b) => {
//               const dateA = new Date(a.date || 0);
//               const dateB = new Date(b.date || 0);
//               return dateB - dateA; // latest first
//             });

//           setBlogPosts(blogsArray);
//         } else {
//           setBlogPosts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <Helmet>
//         <title>Blog | ThinkBizHightech</title>
//         <meta name="description" content="Latest blogs" />
//       </Helmet>

//       <h1 className="text-4xl text-center text-orange-500 mb-10">Our Blog</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {blogPosts.length === 0 ? (
//           <p className="text-center col-span-2 text-gray-400">
//             No blogs available
//           </p>
//         ) : (
//           blogPosts.map((blog) => (
//             <div
//               key={blog.id}
//               className="bg-gray-800 rounded overflow-hidden shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={blog.image}
//                 alt={blog.imageAlt || blog.title}
//                 loading="lazy"
//                 className="w-full h-48 object-cover"
//               />

//               <div className="p-4">
//                 <h2 className="text-xl font-bold">{blog.title}</h2>

//                 <p className="text-sm text-gray-400">
//                   {blog.date
//                     ? new Date(blog.date).toLocaleDateString()
//                     : "No date"}
//                 </p>

//                 {/* optional description */}
//                 {blog.content && (
//                   <p className="text-gray-300 mt-2 line-clamp-3">
//                     {blog.content.replace(/<[^>]*>?/gm, "").slice(0, 120)}...
//                   </p>
//                 )}
//                 <button
//                   onClick={() => navigate(`/blog/${blog.slug}`)}
//                   className="mt-4 bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition"
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, "blogs"));

        if (snapshot.exists()) {
          const data = snapshot.val();

          const blogsArray = Object.entries(data)
            .map(([id, blog]) => ({
              id,
              ...blog,
            }))
            .sort((a, b) => {
              const dateA = new Date(a.date || 0);
              const dateB = new Date(b.date || 0);
              return dateB - dateA;
            });

          setBlogPosts(blogsArray);
        } else {
          setBlogPosts([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Helmet>
        <title>Blog | ThinkBizHightech</title>
        <meta name="description" content="Latest blogs" />
      </Helmet>

      <h1 className="text-4xl text-center text-orange-500 mb-10">Our Blog</h1>

      {/* 🔥 MAIN LAYOUT */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* ✅ LEFT FIXED BOX */}
        <div className="md:col-span-1">
          <div
            onClick={() =>
              navigate("/blog/digital-marketing-agency-australia-2026")
            }
            className="sticky top-6 bg-gray-800 p-6 rounded shadow cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Why Every Australian Business Needs a Digital Marketing Agency
              Right Now
            </h2>

            <p className="text-gray-300 text-sm mb-4">
              Digital ad spend in Australia hit $4.2 billion in a single
              quarter. 99% of Aussies are online. Yet most local businesses are
              leaving serious revenue on the table. Here's what changes when you
              partner with the right agency.
            </p>

            <button
              onClick={() =>
                navigate("/blog/digital-marketing-agency-australia-2026")
              }
              className="w-full bg-orange-500 py-2 rounded hover:bg-orange-600 transition"
            >
              Read Featured Blog 🚀
            </button>
          </div>
        </div>

        {/* ✅ RIGHT BLOG LIST */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {blogPosts.length === 0 ? (
            <p className="text-center col-span-2 text-gray-400">
              No blogs available
            </p>
          ) : (
            blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-800 rounded overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={blog.image}
                  alt={blog.imageAlt || blog.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-bold">{blog.title}</h2>

                  <p className="text-sm text-gray-400">
                    {blog.date
                      ? new Date(blog.date).toLocaleDateString()
                      : "No date"}
                  </p>

                  {blog.content && (
                    <p className="text-gray-300 mt-2 line-clamp-3">
                      {blog.content.replace(/<[^>]*>?/gm, "").slice(0, 120)}
                      ...
                    </p>
                  )}

                  <button
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                    className="mt-4 bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
