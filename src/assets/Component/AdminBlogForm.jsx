import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ref as dbRef, get, child, remove, push } from "firebase/database";

const AdminBlogForm = () => {
  const [blogs, setBlogs] = useState([]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    date: "",
  });

  const fetchBlogs = async () => {
    const rootRef = dbRef(db);
    try {
      const snapshot = await get(child(rootRef, "blogs"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setBlogs(blogsArray);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (blogId) => {
    try {
      await remove(dbRef(db, "blogs/" + blogId));
      alert("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      alert("Failed to delete blog: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, date } = newBlog;
    if (!title.trim() || !content.trim() || !date) {
      alert("Please fill all fields");
      return;
    }

    try {
      await push(dbRef(db, "blogs"), newBlog);
      alert("Blog uploaded successfully!");
      setNewBlog({ title: "", content: "", date: "" });
      fetchBlogs();
    } catch (error) {
      alert("Failed to upload blog: " + error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-orange-500 text-center">
        Manage Blogs
      </h2>

      {/* Blog Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-12 bg-gray-900 p-8 rounded-lg shadow-lg"
        style={{ width: "100%" }}
      >
        <h3 className="text-2xl mb-6 font-semibold text-white text-center">
          Upload New Blog
        </h3>

        <input
          type="text"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="w-full mb-6 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          required
        />

        <textarea
          placeholder="Blog Content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          className="w-full mb-6 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 resize-y min-h-[140px] focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          rows={6}
          required
        ></textarea>

        <input
          type="date"
          value={newBlog.date}
          onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
          className="w-full mb-6 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-bold py-4 rounded-lg shadow-lg transition"
        >
          Upload Blog
        </button>
      </form>

      {/* Blog List */}
      {blogs.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No blogs found.</p>
      ) : (
        <ul className="space-y-6">
          {blogs.map(({ id, title, date }) => (
            <li
              key={id}
              className="bg-gray-800 p-6 rounded-lg flex justify-between items-center shadow-md"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400 mt-1 text-sm">
                  {date ? new Date(date).toLocaleDateString() : "No date"}
                </p>
              </div>
              <button
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this blog?")
                  ) {
                    deleteBlog(id);
                  }
                }}
                className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition text-white font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminBlogForm;
