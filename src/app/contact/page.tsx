// export default function ContactPage() {
//   return (
//     <>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
//             Get In Touch
//           </h2>
//           <p className="text-lg md:text-xl opacity-90">
//             Have questions, suggestions, or feedback? We'd love to hear from you.
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
//         {/* Contact Info */}
//         <div>
//           <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
//           <p className="text-gray-600 mb-6">
//             Feel free to reach out through the form or via the details below.
//           </p>

//           <div className="space-y-4">
//             <div>
//               <p className="font-semibold">Email</p>
//               <p className="text-gray-600">contact@nextblog.com</p>
//             </div>
//             <div>
//               <p className="font-semibold">Phone</p>
//               <p className="text-gray-600">+1 (123) 456-7890</p>
//             </div>
//             <div>
//               <p className="font-semibold">Address</p>
//               <p className="text-gray-600">123 Blog Street, Web City, USA</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white p-8 rounded-2xl shadow-md">
//           <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
//           <form className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Message</label>
//               <textarea
//                 rows={5}
//                 placeholder="Write your message..."
//                 className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p>© {new Date().getFullYear()} NextBlog. All rights reserved.</p>
//         </div>
//       </footer>
//    </>
//   );
// }

"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaFacebookF, FaInstagram, FaYoutube, FaPlay, FaPause } from 'react-icons/fa';
import { FiSearch, FiBell, FiMoon, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomePage = () => {
  const trendingNews = [
    "Bee Nesting Behavior: New Findings",
    "How Gemstone Cuts Affect Earring Looks",
    "MBOX to Outlook: A Step-by-Step Guide"
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* 1. HEADER (As per your Image) */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-black text-gray-900 tracking-tighter">
              Apni Raah<span className="text-pink-600">.</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-pink-600 font-bold border-b-2 border-pink-600 pb-1">Home</Link>
            <Link href="/login" className="text-gray-700 font-semibold hover:text-pink-600">Login Page</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r pr-4 hidden lg:flex">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
              <FaYoutube className="cursor-pointer hover:text-red-600" />
              <FiMoon className="cursor-pointer ml-2" />
            </div>
            <button className="p-2 bg-pink-600 text-white rounded-full"><FiSearch /></button>
            <button className="flex items-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-xl font-bold">
              <FiBell /> Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* 2. TOP STORIES TICKER (As per your Image) */}
      <div className="bg-white border-b py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <span className="bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-sm flex items-center gap-2 whitespace-nowrap">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> TOP STORIES
          </span>
          <div className="ml-4 flex gap-10 animate-marquee whitespace-nowrap text-sm font-medium text-gray-600">
             {trendingNews.map((news, i) => (
               <span key={i} className="hover:text-pink-600 cursor-pointer">• {news} — March 3, 2026</span>
             ))}
          </div>
          <div className="ml-auto flex items-center border-l pl-4 gap-2 text-gray-400">
            <FaPause className="text-xs cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 3. HERO SLIDER SECTION (As per your Image) */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative bg-white rounded-3xl shadow-sm border overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="h-[500px]"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row h-full items-center p-8 gap-10">
                <div className="w-full md:w-1/2 h-full relative rounded-2xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" 
                    alt="Hero"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 prev-btn bg-white/80 p-2 rounded-full cursor-pointer z-10 hover:bg-white">
                    <FiChevronLeft className="text-2xl text-gray-800" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 pr-10">
                  <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full">BUSINESS</span>
                  <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
                    Top API Development Companies for Seamless Integrations
                  </h2>
                  <p className="text-gray-500 mt-6 leading-relaxed">
                    In today's interconnected digital ecosystem, seamless data exchange is not a luxury but a necessity. 
                    Businesses rely on integrated systems to streamline operations...
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <Link href="#" className="text-gray-900 font-bold border-b-2 border-gray-900 pb-1 flex items-center gap-1">
                      Continue Reading <FiChevronRight />
                    </Link>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                       <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                       <span>Contributor • March 3, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>
          
          <div className="absolute top-1/2 right-4 -translate-y-1/2 next-btn bg-white/80 p-2 rounded-full cursor-pointer z-10 hover:bg-white hidden md:block">
            <FiChevronRight className="text-2xl text-gray-800" />
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .swiper-pagination-bullet-active {
          background: #db2777 !important;
        }
      `}</style>
    </div>
  );
};

export default HomePage;