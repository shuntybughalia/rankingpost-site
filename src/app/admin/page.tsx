'use client';

import { FormEvent, useState } from "react";

type FormState = {
  title: string;
  excerpt: string;
  content: string;
};

export default function AdminPage() {
  const [form, setForm] = useState<FormState>({
    title: "",
    excerpt: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Failed to create blog post");
      }

      setMessage("Blog post created successfully.");
      setForm({ title: "", excerpt: "", content: "" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Admin - Create Blog Post</h1>
      <p className="text-gray-600 mb-8">
        Use this page to add new blog posts. They will appear on the blog page and in the featured section on the homepage.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow rounded-xl p-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={form.title}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
            Short Description (Excerpt)
          </label>
          <input
            id="excerpt"
            name="excerpt"
            type="text"
            required
            value={form.excerpt}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
            placeholder="A short summary of the blog post"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={8}
            value={form.content}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
            placeholder="Write the full blog content here"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? "Saving..." : "Publish Blog Post"}
        </button>

        {message && (
          <p className="text-sm text-green-600 bg-green-50 border border-green-100 rounded-md px-3 py-2">
            {message}
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
            {error}
          </p>
        )}
      </form>
    </main>
  );
}

