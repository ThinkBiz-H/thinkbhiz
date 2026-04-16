import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const snapshot = await get(child(ref(db), "blogs"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogsArray = Object.values(data);
        const foundBlog = blogsArray.find((b) => b.slug === slug);
        setBlog(foundBlog || null);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div className="text-white p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.content?.slice(0, 150)}
        />
      </Helmet>

      {/* 🔥 FULL WIDTH IMAGE */}
      <img
        src={blog.image}
        alt={blog.imageAlt || blog.title}
        className="w-full max-h-[80vh] object-cover bg-black"
      />

      {/* 🔥 CONTENT CENTER */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-orange-500">{blog.title}</h1>

        <p className="text-gray-400 mb-6">
          {new Date(blog.date).toLocaleDateString()}
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: blog.content.replace(
              /href="(?!https?:\/\/)/g,
              'href="https://',
            ),
          }}
          className="prose prose-invert max-w-none 
prose-ul:list-disc 
prose-ol:list-decimal 
prose-li:ml-4 
prose-a:text-blue-400 
hover:prose-a:text-blue-500 
prose-a:underline"
        />

        <Link to="/blog" className="mt-6 inline-block text-orange-500">
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
