import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `blogs/${id}`));
        if (snapshot.exists()) {
          setBlog(snapshot.val());
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <p className="text-xl sm:text-2xl">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Blog not found
        </h2>
        <Link
          to="/blog"
          className="text-orange-500 hover:text-orange-600 underline text-lg sm:text-xl"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-500 text-center sm:text-left">
        {blog.title}
      </h1>
      <p className="text-gray-400 mb-10 text-center sm:text-left text-sm sm:text-base">
        {blog.date
          ? new Date(blog.date).toLocaleDateString()
          : "Date not available"}
      </p>

      <div className="overflow-x-auto">
        <article
          className="prose prose-invert text-base sm:text-lg max-w-full break-words whitespace-normal"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        <Link
          to="/blog"
          className="inline-block bg-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
