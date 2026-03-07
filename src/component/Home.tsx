// "use client"; // Required for useState and onClick events

// import React, { useState } from 'react';
// import Link from 'next/link';

// // Import relevant icons for a standard icon library (e.g., react-icons/fa and react-icons/fi)
// import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { FiSearch, FiBell, FiMoon } from 'react-icons/fi';

// const Header = () => {
//   // Simple state to track the active page, highlighting 'Home' by default as shown in the image
//   const [activePage, setActivePage] = useState<'Home' | 'Login Page'>('Home');

//   // Common styling for navigation links to avoid repetition
//   const getNavLinkClass = (page: 'Home' | 'Login Page') => {
//     const baseClass = "text-base font-semibold px-2 py-1 transition-colors";
//     const activeClass = "text-pink-600 border-b-2 border-pink-600";
//     const inactiveClass = "text-gray-900 hover:text-pink-600";
//     return page === activePage ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
//   };

//   // Common styling for social media and theme icons to avoid repetition
//   const iconClass = "text-xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer p-1";

//   return (
//     <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-screen-2xl mx-auto flex items-center h-20 px-6 sm:px-10">
        
//         {/* Left Section: Brand Logo/Name */}
//         <div className="flex-shrink-0 mr-12">
//           <Link href="/" className="text-3xl font-extrabold text-gray-950 tracking-tight">
//             Eromeofficial
//           </Link>
//         </div>

//         {/* Center/Right-aligned Section: Navigation, Social Icons, Search, Subscribe */}
//         <div className="flex-1 flex items-center justify-end gap-10">
          
//           {/* Main Navigation Links */}
//           <nav className="flex items-center gap-6">
//             <button 
//               onClick={() => setActivePage('Home')} 
//               className={getNavLinkClass('Home')}
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => setActivePage('Login Page')} 
//               className={getNavLinkClass('Login Page')}
//             >
//               Login Page
//             </button>
//           </nav>

//           {/* Social Media Icons and Theme Toggle */}
//           <div className="flex items-center gap-5 border-l border-r border-gray-100 px-6">
//             <FaFacebookF className={iconClass} title="Facebook" />
//             <div className={`${iconClass} font-mono`} title="X (Twitter)">X</div> {/* Use a specific "X" icon or text here */}
//             <FaTelegramPlane className={iconClass} title="Telegram" />
//             <FaInstagram className={iconClass} title="Instagram" />
//             <FaYoutube className={iconClass} title="YouTube" />
            
//             {/* Dark Mode / Night Mode Toggle Icon */}
//             <FiMoon 
//               className="text-xl text-gray-700 hover:text-gray-950 transition-colors cursor-pointer p-1" 
//               title="Dark Mode" 
//               onClick={() => alert("Dark Mode Toggle Clicked! (Logic to be implemented)")} // Simple feedback for interaction
//             />
//           </div>

//           {/* Search and Subscribe CTAs */}
//           <div className="flex items-center gap-4">
//             {/* Search Icon button */}
//             <button 
//               className="p-3 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition" 
//               title="Search"
//             >
//               <FiSearch className="text-xl" />
//             </button>
            
//             {/* Main Subscribe Button */}
//             <button className="flex items-center gap-2.5 px-6 py-3.5 bg-pink-600 text-white text-base font-semibold rounded-xl hover:bg-pink-700 transition">
//               <FiBell className="text-xl" />
//               Subscribe
//             </button>
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;

