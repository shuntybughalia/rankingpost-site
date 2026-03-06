"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Icons install hone chahiye: npm install react-icons
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiSearch, FiBell, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [activePage, setActivePage] = useState<'Home' | 'Login Page'>('Home');

  const getNavLinkClass = (page: 'Home' | 'Login Page') => {
    const baseClass = "text-base font-semibold px-2 py-1 transition-colors";
    const activeClass = "text-pink-600 border-b-2 border-pink-600";
    const inactiveClass = "text-gray-900 hover:text-pink-600";
    return page === activePage ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  const iconClass = "text-xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer p-1";

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center h-20 px-6 sm:px-10">
        
        {/* Logo - Isko aap Apni Raah ya PragyaX se badal sakte hain */}
        <div className="flex-shrink-0 mr-12">
          <Link href="/" className="text-3xl font-extrabold text-gray-950 tracking-tight">
            Eromeofficial
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end gap-10">
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => setActivePage('Home')} 
              className={getNavLinkClass('Home')}
            >
              Home
            </button>
            <button 
              onClick={() => setActivePage('Login Page')} 
              className={getNavLinkClass('Login Page')}
            >
              Login Page
            </button>
          </nav>

          <div className="flex items-center gap-5 border-l border-r border-gray-100 px-6">
            <FaFacebookF className={iconClass} />
            <div className={`${iconClass} font-mono`}>X</div>
            <FaTelegramPlane className={iconClass} />
            <FaInstagram className={iconClass} />
            <FaYoutube className={iconClass} />
            <FiMoon className="text-xl text-gray-700 cursor-pointer p-1 hover:text-black" />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-3 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition">
              <FiSearch className="text-xl" />
            </button>
            
            <button className="flex items-center gap-2.5 px-6 py-3.5 bg-pink-600 text-white text-base font-semibold rounded-xl hover:bg-pink-700 transition">
              <FiBell className="text-xl" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;