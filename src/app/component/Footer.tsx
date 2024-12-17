


// import React from "react";

// const Footer = () => (
//   <footer className="bg-gray-50 text-gray-700">
//     <div className="container mx-auto px-6 py-8">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
//         {/* Logo and Social Links */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-blue-500 hover:text-blue-600">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="text-blue-400 hover:text-blue-500">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-blue-500 hover:text-blue-600">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>

//         {/* Link Sections */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
//           <div>
//             <h3 className="font-semibold text-gray-800">Company Info</h3>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-500">About Us</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Carrier</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">We are hiring</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-800">Legal</h3>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-500">About Us</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Carrier</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">We are hiring</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-800">Features</h3>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-500">Business Marketing</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">User Analytics</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Live Chat</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Unlimited Support</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-800">Resources</h3>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-500">IOS & Android</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Watch a demo</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">Customers</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-500">API</a>
//               </li>
//             </ul>
//           </div>

//           {/* Get in Touch */}
//           <div>
//             <h3 className="font-semibold text-gray-800">Get In Touch</h3>
//             <form className="mt-4">
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//               <p className="mt-2 text-xs text-gray-500">
//                 Lorem ipsum, dolor sit
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
//         Made With Love By Finland All Right Reserved
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;


import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-50 text-gray-700">
    <div className="container mx-auto px-6 py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Link Sections */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold text-gray-800">Company Info</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Features</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
            <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
            <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
            <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-500">IOS & Android</a></li>
            <li><a href="#" className="hover:text-blue-500">Watch a demo</a></li>
            <li><a href="#" className="hover:text-blue-500">Customers</a></li>
            <li><a href="#" className="hover:text-blue-500">API</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-gray-800">Get In Touch</h3>
          <form className="mt-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Lorem ipsum, dolor sit
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        Made With Love By Finland All Right Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
