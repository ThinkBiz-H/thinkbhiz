import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";
import { Helmet } from 'react-helmet-async';

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
          // Convert Firebase object to array with id
          const blogsArray = Object.entries(data).map(([id, blog]) => ({
            id,
            ...blog,
          }));
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
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 max-w-7xl mx-auto">
       <Helmet>
                      <title>Blog | ThinkBizHightech
      
              </title>
               <meta
                    name="Description"
                    content="ThinkBizHighTech is the leading IT company in India, Which provides all IT Services like Website Design & Development, Digital Marketing and others.
"
                  />
                    <link rel="canonical" href="https://www.thinkbizhightech.com/" />
                  </Helmet>
      <h1 className="text-5xl font-extrabold mb-12 text-orange-500 text-center">
        Our Blog
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        {blogPosts.length === 0 ? (
          <p className="text-center text-gray-400">No blog posts available.</p>
        ) : (
          blogPosts.map(({ id, title, date, summary }) => (
            <article
              key={id}
              className="bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition cursor-pointer"
            >
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-sm text-gray-400 mb-4">
                {new Date(date).toLocaleDateString()}
              </p>
              <p className="text-gray-300 mb-6">{summary}</p>
              <button
                className="bg-orange-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
                onClick={() => navigate(`/blog/${id}`)}
              >
                Read More
              </button>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
