// 'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail?: string; // Recommended to add this to your schema
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
        // Take the latest 5 for the carousel
        setFeaturedBlogs(data.slice(0, 5));
      } catch {
        // ignore errors for homepage
      }
    };

    fetchFeatured();
  }, []);

  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="relative bg-black group">
        <HeroSlider blogs={featuredBlogs} />
      </section>

      {/* Featured Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold">Latest Articles</h3>
          <Link href="/blog" className="text-indigo-600 font-semibold hover:underline">
            View All →
          </Link>
        </div>
        
        {featuredBlogs.length === 0 ? (
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-2xl">
            <p className="text-gray-500">No blog posts found. Start writing in the admin panel!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogs.slice(0, 3).map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                   <img 
                    src={post.thumbnail || "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    alt={post.title} 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post._id}`}
                    className="text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors"
                  >
                    READ ARTICLE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter & Footer remain the same... */}
    </>
  );
}

function HeroSlider({ blogs }: { blogs: Blog[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (blogs.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  if (blogs.length === 0) {
    return <div className="w-full h-[60vh] bg-gray-900 animate-pulse" />;
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {blogs.map((post, index) => (
          <div key={post._id} className="min-w-full h-full relative">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            
            <img
              src={post.thumbnail || "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"}
              alt={post.title}
              className="w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="max-w-4xl px-6 text-center text-white">
                <span className="bg-indigo-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                  Latest Post
                </span>
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
                  {post.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200 line-clamp-2 max-w-2xl mx-auto font-light">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post._id}`}
                  className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105 shadow-xl"
                >
                  Read Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              current === index ? "w-10 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}