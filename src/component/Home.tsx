'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
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
        setFeaturedBlogs(data.slice(0, 3));
      } catch {
        // ignore errors for homepage, keep static UI
      }
    };

    fetchFeatured();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white">
        <HeroSlider />

        {/* overlay for text content */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-transparent to-indigo-900/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
              Welcome to Ranking Post
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              A modern blog platform built with Next.js and Tailwind CSS.
              Read, write, and explore amazing content.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
                Get Started
              </button>
              <button className="border border-white/80 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-4 text-center">Featured Articles</h3>
        <p className="text-center text-gray-600 mb-12">
          The three most recent posts from our blog.
        </p>
        {featuredBlogs.length === 0 ? (
          <p className="text-center text-gray-500">
            No blog posts yet. Visit the Admin page to create your first post.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-48 bg-indigo-200" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Technology', 'Design', 'Startup', 'Lifestyle', 'Programming'].map((category) => (
              <span
                key={category}
                className="px-6 py-3 bg-white rounded-full shadow hover:bg-indigo-600 hover:text-white transition cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">Subscribe to our Newsletter</h3>
          <p className="text-gray-600 mb-8">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} NextBlog. All rights reserved.</p>
        </div>
      </footer>
  </>
  );
}

const sliderImages = [
  "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[70vh] lg:h-[75vh]">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderImages.map((src, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
