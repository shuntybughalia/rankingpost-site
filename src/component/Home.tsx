"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Types define karna zaroori hai
type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  createdAt?: string | Date;
};

export default function Home() {
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) return;
        const data = (await response.json()) as Blog[];
        // Latest 5 blogs slider ke liye
        setFeaturedBlogs(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Dynamic Hero Slider Section */}
      <section className="relative bg-black overflow-hidden">
        <HeroSlider blogs={featuredBlogs} />
      </section>

      {/* 2. Latest Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12 border-b pb-4">
          <div>
            <h3 className="text-3xl font-black text-gray-900">Latest Articles</h3>
            <p className="text-gray-500 text-sm mt-1">Explore career paths with Apni Raah</p>
          </div>
          <Link href="/blog" className="text-pink-600 font-bold hover:text-pink-700 transition-colors">
            View All Stories →
          </Link>
        </div>
        
        {featuredBlogs.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50">
            <p className="text-gray-400 font-medium">No blog posts found yet.</p>
            <Link href="/admin" className="text-pink-600 text-sm underline mt-2">Open Admin to write</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {featuredBlogs.slice(0, 3).map((post) => (
              <article
                key={post._id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={post.thumbnail || "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={post.title} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Career</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-4 line-clamp-2 text-gray-900 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link
                      href={`/blog/${post._id}`}
                      className="text-gray-900 font-black text-xs tracking-widest hover:text-pink-600 transition-colors uppercase"
                    >
                      Read Article +
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

// HeroSlider Component
function HeroSlider({ blogs }: { blogs: Blog[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (blogs.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogs.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  if (blogs.length === 0) {
    return (
      <div className="w-full h-[60vh] md:h-[75vh] bg-gray-900 flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {blogs.map((post) => (
          <div key={post._id} className="min-w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <img
              src={post.thumbnail || "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20">
              <div className="max-w-3xl text-left text-white">
                <span className="bg-pink-600 px-4 py-1 rounded-full text-[10px] font-black tracking