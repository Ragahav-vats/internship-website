import React from 'react'
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    <>

      <footer className="bg-slate-950 text-gray-300">
        <div className="max-w-screen-2xl mx-auto px-2 lg:px-4 py-14">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <img
                src={logo}
                alt="Logo"
                className="h-28 w-36 object-contain"
              />

              <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
                Empowering learners with industry-ready courses,
                expert mentorship, and practical projects to build
                successful careers in technology.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  🌐
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  📘
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  📷
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  🐦
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li><a href="#" className="hover:text-indigo-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Courses</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Courses
              </h3>

              <ul className="space-y-3">
                <li><a href="#" className="hover:text-indigo-400 transition">Web Development</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">React JS</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Node JS</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">DSA</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Contact
              </h3>

              <ul className="space-y-3">
                <li>📍 Varanasi, India</li>
                <li>📞 +91 9876543210</li>
                <li>✉️ support@nexaura.com</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-14 border-t border-slate-800 pt-10">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

              <div>
                <h3 className="text-white text-xl font-semibold">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-gray-400 mt-1">
                  Get updates about new courses and offers.
                </p>
              </div>

              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full md:w-80 rounded-l-xl bg-slate-900 border border-slate-700 outline-none focus:border-indigo-500"
                />

                <button
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-xl font-medium transition"
                >
                  Subscribe
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Nexaura. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-indigo-400 transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-indigo-400 transition">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-indigo-400 transition">
                Support
              </a>
            </div>
          </div>

        </div>
      </footer>


    </>
  )
}
