'use client';

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css'; // Editor ki styling

// Editor ko client-side load karne ke liye
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Rich text content yahan save hoga
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // Editor ke options (Bold, Italic, etc.)
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  }), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap FormData use karke image aur content dono bhej sakte hain
    console.log({ title, content, category, image });
    alert("Post publish ho rahi hai! Console check karein.");
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
        <h1 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-orange-500">📝</span> Create a post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Rich Text Editor (Content) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <div className="h-64 mb-12"> {/* Height fix karni padti hai Quill ke liye */}
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                modules={modules}
                className="h-full"
              />
            </div>
          </div>

          {/* Cover Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover photo</label>
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer relative overflow-hidden">
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {image ? (
                <img src={URL.createObjectURL(image)} alt="preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl text-gray-400">📷</span>
              )}
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 bg-white"
            >
              <option value="">Choose a category</option>
              <option value="tech">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Publish Post
          </button>
        </form>
      </div>
    </main>
  );
}

// 'use client';

// import { FormEvent, useState } from "react";

// type FormState = {
//   title: string;
//   excerpt: string;
//   content: string;
// };

// export default function AdminPage() {
//   const [form, setForm] = useState<FormState>({
//     title: "",
//     excerpt: "",
//     content: "",
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     setSubmitting(true);
//     setMessage(null);
//     setError(null);

//     try {
//       const response = await fetch("/api/blogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (!response.ok) {
//         const data = await response.json().catch(() => null);
//         throw new Error(data?.message || "Failed to create blog post");
//       }

//       setMessage("Blog post created successfully.");
//       setForm({ title: "", excerpt: "", content: "" });
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "Something went wrong. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <main className="max-w-3xl mx-auto px-6 py-12">
//       <h1 className="text-3xl font-bold mb-6">Admin - Create Blog Post</h1>
//       <p className="text-gray-600 mb-8">
//         Use this page to add new blog posts. They will appear on the blog page and in the featured section on the homepage.
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow rounded-xl p-6">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//             Title
//           </label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             required
//             value={form.title}
//             onChange={handleChange}
//             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
//             placeholder="Enter blog title"
//           />
//         </div>

//         <div>
//           <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
//             Short Description (Excerpt)
//           </label>
//           <input
//             id="excerpt"
//             name="excerpt"
//             type="text"
//             required
//             value={form.excerpt}
//             onChange={handleChange}
//             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
//             placeholder="A short summary of the blog post"
//           />
//         </div>

//         <div>
//           <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
//             Content
//           </label>
//           <textarea
//             id="content"
//             name="content"
//             required
//             rows={8}
//             value={form.content}
//             onChange={handleChange}
//             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
//             placeholder="Write the full blog content here"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={submitting}
//           className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed"
//         >
//           {submitting ? "Saving..." : "Publish Blog Post"}
//         </button>

//         {message && (
//           <p className="text-sm text-green-600 bg-green-50 border border-green-100 rounded-md px-3 py-2">
//             {message}
//           </p>
//         )}
//         {error && (
//           <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
//             {error}
//           </p>
//         )}
//       </form>
//     </main>
//   );
// }

