// import React, { useState, useEffect } from "react";
// import { db } from "../../firebase";
// import { ref as dbRef, get, child, remove, push, set } from "firebase/database";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const AdminBlogForm = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [imageFile, setImageFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null);

//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ["bold", "italic", "underline"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["link", "image"],
//       ["clean"],
//     ],
//   };

//   // ✅ FIX: image field add
//   const [newBlog, setNewBlog] = useState({
//     title: "",
//     content: "",
//     date: "",
//     metaTitle: "",
//     metaDescription: "",
//     imageAlt: "",
//     image: "", // 🔥 IMPORTANT
//   });

//   const fetchBlogs = async () => {
//     const snapshot = await get(child(dbRef(db), "blogs"));
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       const blogsArray = Object.entries(data).map(([key, value]) => ({
//         id: key,
//         ...value,
//       }));
//       setBlogs(blogsArray);
//     }
//   };

//   const deleteBlog = async (id) => {
//     await remove(dbRef(db, "blogs/" + id));
//     fetchBlogs();
//     toast.success("Blog deleted 🗑️");
//   };

//   // 🔥 CLOUDINARY
//   const uploadImage = async () => {
//     if (!imageFile) return "";

//     const formData = new FormData();
//     formData.append("file", imageFile);
//     formData.append("upload_preset", "blog_upload1");
//     formData.append("cloud_name", "dcotvv2ek");

//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/dcotvv2ek/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       },
//     );

//     const data = await res.json();
//     return data.secure_url;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !newBlog.title ||
//       !newBlog.content ||
//       !newBlog.date ||
//       !newBlog.metaTitle ||
//       !newBlog.metaDescription ||
//       !newBlog.imageAlt ||
//       (!imageFile && !editId)
//     ) {
//       alert("All fields required");
//       return;
//     }

//     try {
//       setLoading(true);

//       let imageURL = newBlog.image || "";

//       // ✅ upload only if new image selected
//       if (imageFile) {
//         imageURL = await uploadImage();
//       }

//       if (!imageURL) {
//         alert("Image required");
//         return;
//       }

//       const slug = newBlog.title
//         .toLowerCase()
//         .replace(/[^a-z0-9 ]/g, "")
//         .replace(/\s+/g, "-");

//       if (editId) {
//         await set(dbRef(db, "blogs/" + editId), {
//           ...newBlog,
//           image: imageURL,
//           slug,
//         });

//         alert("Blog updated!");
//       } else {
//         await push(dbRef(db, "blogs"), {
//           ...newBlog,
//           image: imageURL,
//           slug,
//         });

//         alert("Blog uploaded!");
//       }

//       // reset
//       setNewBlog({
//         title: "",
//         content: "",
//         date: "",
//         metaTitle: "",
//         metaDescription: "",
//         imageAlt: "",
//         image: "",
//       });

//       setImageFile(null);
//       setEditId(null);
//       fetchBlogs();
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h2 className="text-3xl text-orange-500 text-center mb-6">
//         {editId ? "Edit Blog" : "Upload Blog"}
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 bg-gray-900 p-6 rounded"
//       >
//         <input
//           type="text"
//           placeholder="Title"
//           value={newBlog.title}
//           onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
//           className="w-full p-3 bg-gray-800 text-white"
//         />

//         {/* IMAGE */}
//         <div className="space-y-2">
//           <label className="block text-sm font-semibold text-gray-300">
//             Upload Image
//           </label>

//           <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition">
//             <span className="text-gray-400">
//               {imageFile ? imageFile.name : "Click to upload image"}
//             </span>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               className="hidden"
//             />
//           </label>

//           {/* 🔥 Preview */}
//           {imageFile && (
//             <img
//               src={URL.createObjectURL(imageFile)}
//               alt="preview"
//               className="w-40 h-24 object-cover rounded"
//             />
//           )}

//           {/* Old image preview (edit mode) */}
//           {!imageFile && newBlog.image && (
//             <img
//               src={newBlog.image}
//               alt="old"
//               className="w-40 h-24 object-cover rounded"
//             />
//           )}
//         </div>

//         <input
//           type="text"
//           placeholder="Image Alt Text"
//           value={newBlog.imageAlt}
//           onChange={(e) => setNewBlog({ ...newBlog, imageAlt: e.target.value })}
//           className="w-full p-3 bg-gray-800 text-white"
//         />

//         <input
//           type="text"
//           placeholder="Meta Title"
//           value={newBlog.metaTitle}
//           onChange={(e) =>
//             setNewBlog({ ...newBlog, metaTitle: e.target.value })
//           }
//           className="w-full p-3 bg-gray-800 text-white"
//         />

//         <textarea
//           placeholder="Meta Description"
//           value={newBlog.metaDescription}
//           onChange={(e) =>
//             setNewBlog({
//               ...newBlog,
//               metaDescription: e.target.value,
//             })
//           }
//           className="w-full p-3 bg-gray-800 text-white"
//         />

//         <div className="bg-white text-black rounded">
//           <ReactQuill
//             key={editId || "new"} // 🔥 IMPORTANT FIX
//             theme="snow"
//             value={newBlog.content}
//             onChange={(value) => setNewBlog({ ...newBlog, content: value })}
//             modules={modules}
//           />
//         </div>

//         <input
//           type="date"
//           value={newBlog.date}
//           onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
//           className="w-full p-3 bg-gray-800 text-white"
//         />

//         <button className="w-full bg-orange-500 py-3 font-bold">
//           {loading ? "Saving..." : editId ? "Update Blog" : "Upload Blog"}
//         </button>
//       </form>

//       {/* LIST */}
//       <div className="mt-8 space-y-4">
//         {blogs.map((b) => (
//           <div key={b.id} className="bg-gray-800 p-4 flex justify-between">
//             <div className="flex gap-4">
//               <img src={b.image} className="w-16 h-16 object-cover" />
//               <div>
//                 <h3>{b.title}</h3>
//                 <p className="text-sm text-gray-400">
//                   {new Date(b.date).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-2">
//               {/* ✅ FIXED EDIT */}
//               <button
//                 onClick={() => {
//                   setNewBlog({
//                     title: b.title || "",
//                     content: b.content || "",
//                     date: b.date || "",
//                     metaTitle: b.metaTitle || "",
//                     metaDescription: b.metaDescription || "",
//                     imageAlt: b.imageAlt || "",
//                     image: b.image || "",
//                   });

//                   setEditId(b.id);
//                   setImageFile(null);
//                 }}
//                 className="bg-blue-500 px-3 py-1"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => deleteBlog(b.id)}
//                 className="bg-red-600 px-3 py-1"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminBlogForm;

import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ref as dbRef, get, child, remove, push, set } from "firebase/database";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const AdminBlogForm = () => {
  const [blogs, setBlogs] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    date: "",
    metaTitle: "",
    metaDescription: "",
    imageAlt: "",
    image: "",
  });

  const fetchBlogs = async () => {
    const snapshot = await get(child(dbRef(db), "blogs"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const blogsArray = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      setBlogs(blogsArray);
    }
  };

  // ✅ DELETE WITH CONFIRM
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure to delete this blog?")) return;

    await remove(dbRef(db, "blogs/" + id));
    fetchBlogs();
    toast.success("Blog deleted 🗑️");
  };

  const uploadImage = async () => {
    if (!imageFile) return "";

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "blog_upload1");
    formData.append("cloud_name", "dcotvv2ek");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcotvv2ek/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ VALIDATION
    if (
      !newBlog.title ||
      !newBlog.content ||
      !newBlog.date ||
      !newBlog.metaTitle ||
      !newBlog.metaDescription ||
      !newBlog.imageAlt ||
      (!imageFile && !editId)
    ) {
      toast.error("All fields required ⚠️");
      return;
    }

    try {
      setLoading(true);

      let imageURL = newBlog.image || "";

      if (imageFile) {
        imageURL = await uploadImage();
      }

      if (!imageURL) {
        toast.error("Image required 🖼️");
        return;
      }

      const slug = newBlog.title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-");

      if (editId) {
        await set(dbRef(db, "blogs/" + editId), {
          ...newBlog,
          image: imageURL,
          slug,
        });

        toast.success("Blog updated ✏️");
      } else {
        await push(dbRef(db, "blogs"), {
          ...newBlog,
          image: imageURL,
          slug,
        });

        toast.success("Blog uploaded 🚀");
      }

      // RESET
      setNewBlog({
        title: "",
        content: "",
        date: "",
        metaTitle: "",
        metaDescription: "",
        imageAlt: "",
        image: "",
      });

      setImageFile(null);
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl text-orange-500 text-center mb-6">
        {editId ? "Edit Blog" : "Upload Blog"}
      </h2>

      {editId && (
        <p className="text-yellow-400 text-center mb-2">
          Editing blog (image optional)
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-6 rounded"
      >
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white"
        />

        {/* IMAGE */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-300">
            Upload Image
          </label>
          <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition">
            <span className="text-gray-400">
              {imageFile ? imageFile.name : "Click to upload image"}
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="hidden"
            />
          </label>
          {/* 🔥 Preview */}
          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="preview"
              className="w-40 h-24 object-cover rounded"
            />
          )}
          {/* Old image preview (edit mode) */}{" "}
          {!imageFile && newBlog.image && (
            <img
              src={newBlog.image}
              alt="old"
              className="w-40 h-24 object-cover rounded"
            />
          )}
        </div>

        <input
          type="text"
          placeholder="Image Alt"
          value={newBlog.imageAlt}
          onChange={(e) => setNewBlog({ ...newBlog, imageAlt: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white"
        />

        <input
          type="text"
          placeholder="Meta Title"
          value={newBlog.metaTitle}
          onChange={(e) =>
            setNewBlog({ ...newBlog, metaTitle: e.target.value })
          }
          className="w-full p-3 bg-gray-800 text-white"
        />

        <textarea
          placeholder="Meta Description"
          value={newBlog.metaDescription}
          onChange={(e) =>
            setNewBlog({
              ...newBlog,
              metaDescription: e.target.value,
            })
          }
          className="w-full p-3 bg-gray-800 text-white"
        />

        <div className="bg-white text-black rounded">
          <ReactQuill
            key={editId || "new"}
            theme="snow"
            value={newBlog.content}
            onChange={(value) => setNewBlog({ ...newBlog, content: value })}
            modules={modules}
          />
        </div>

        <input
          type="date"
          value={newBlog.date}
          onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white"
        />

        <button className="w-full bg-orange-500 py-3 font-bold">
          {loading ? "Saving..." : editId ? "Update Blog" : "Upload Blog"}
        </button>
      </form>

      {/* LIST */}
      <div className="mt-8 space-y-4">
        {blogs.map((b) => (
          <div key={b.id} className="bg-gray-800 p-4 flex justify-between">
            <div className="flex gap-4">
              <img src={b.image} className="w-16 h-16 object-cover" />
              <div>
                <h3>{b.title}</h3>
                <p className="text-sm text-gray-400">
                  {new Date(b.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setNewBlog({
                    title: b.title || "",
                    content: b.content || "",
                    date: b.date || "",
                    metaTitle: b.metaTitle || "",
                    metaDescription: b.metaDescription || "",
                    imageAlt: b.imageAlt || "",
                    image: b.image || "",
                  });

                  setEditId(b.id);
                  setImageFile(null);
                }}
                className="bg-blue-500 px-3 py-1"
              >
                Edit
              </button>

              <button
                onClick={() => deleteBlog(b.id)}
                className="bg-red-600 px-3 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogForm;
