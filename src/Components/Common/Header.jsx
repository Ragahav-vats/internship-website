import React from 'react'
import { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from 'react-router';

const NAV_LINKS = [
  { label: "Courses", to: "/courses" },
  { label: "Masterclasses", href: "#" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blogs", href: "#" },
  { label: "Schooling Programs", href: "#" },
  // { label: "Internship", to: "/internship" },
];

// const PRODUCTS = [
//   { emoji: "🚀", label: "Launch Tools", bg: "bg-indigo-100", href: "#" },
//   { emoji: "📊", label: "Analytics", bg: "bg-purple-100", href: "#" },
//   { emoji: "🔒", label: "Security", bg: "bg-cyan-100", href: "#" },
// ];

const PRODUCTS = [
  {label:"Internship program", to: "/program"},
  {label:"Summer Internship",  to: "/Summer Internship program" }
]

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) setProductOpen(false);
  }
  return (
    <>
      <header
        className="
        sticky top-0 z-50 w-full
        bg-white/70 backdrop-blur-xl
        border-b border-white/40
      "
        style={{ boxShadow: "0 4px 32px rgba(80,60,200,.07), 0 1.5px 8px rgba(0,0,0,.06)" }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-40 h-22 object-contain"
              />
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden md:flex items-center gap-7">

              {NAV_LINKS.map(({ label, href }) =>
                label === "Courses" ? (
                  <div key={label} className="relative group">
                    <Link to="/courses">
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-gray-600
                   hover:text-indigo-500 transition-colors duration-800"
                    >
                      Courses
                      <svg
                        className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-all duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    </Link>

                    {/* Dropdown */}
                    <div
                       className="absolute top-full left-0 mt-3 w-56
             bg-white rounded-2xl border border-gray-200 py-2
             shadow-xl
             opacity-0 invisible
             group-hover:opacity-100 group-hover:visible
             transition-all duration-300
             z-50"
                    >
                      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-300">
                        Web Development
                      </a>

                      <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                        Data Structures
                      </a>

                      <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                        AI & ML
                      </a>

                      <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                        Data Science
                      </a>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={label}
                    to={href}
                    // to="/contact-us"
                    onClick={() => setActiveLink(label)}
                    className="text-sm font-medium text-gray-600 hover:text-indigo-500"
                  >
                    {label}
                  </Link>
                )
              )}


              {/* Products dropdown */}
              <div className="relative group">
                <Link to="/internship">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-600
                                 hover:text-indigo-500 transition-colors duration-500 focus:outline-none">
                  Internship
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500
                                group-hover:rotate-180 transition-all duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                </Link>

                {/* Dropdown panel */}
                <div
                   className="absolute top-full left-0 mt-3 w-56
             bg-white rounded-2xl border border-gray-200 py-2
             shadow-xl
             opacity-0 invisible
             group-hover:opacity-100 group-hover:visible
             transition-all duration-300
             z-50"
                  style={{ boxShadow: "0 8px 32px rgba(99,102,241,.14)" }}
                >
                  {PRODUCTS.map(({ emoji, label, bg, to }) => (
                    <Link key={label} to={to}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700
                                hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                      <span className={`w-6 h-6 rounded-lg ${bg} flex items-center justify-center text-xs`}>
                        {emoji}
                      </span>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* ── DESKTOP ACTIONS ── */}
            <div className="hidden md:flex items-center gap-0">
              {/* <IconBtn title="Search">
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                <circle cx="11" cy="11" r="8" />
              </IconBtn> */}

              <div className="relative -ml-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>

              <button
                className="relative p-4 rounded-xl text-gray-400 hover:text-indigo-500 
                         hover:bg-indigo-50 transition-all duration-200 "
                title="Notifications"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12
                     0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500
                               rounded-full border-2 border-white" />
              </button>

              {/* <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-500
                                   transition-colors px-2">
                Log in
              </a> */}
              <Link
                to="/login"
                className="text-white text-sm font-semibold px-5 py-2 rounded-xl
                         transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  boxShadow: "0 2px 16px rgba(99,102,241,.28)",
                }}
              >
                Sign In/Register →
              </Link>
            </div>

            {/* ── MOBILE: icons + hamburger ── */}
            <div className="flex md:hidden items-center gap-1">

              {/* Search – always visible */}
              <button className="p-2 rounded-xl text-gray-400 hover:text-indigo-500
                               hover:bg-indigo-50 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </button>

              {/* Avatar – always visible */}
              <button className="p-2 rounded-xl text-gray-400 hover:text-indigo-500
                               hover:bg-indigo-50 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Hamburger */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="flex flex-col justify-center items-center gap-[5px] w-10 h-10
                         rounded-xl hover:bg-indigo-50 transition-colors focus:outline-none"
              >
                <span
                  className="block h-[2.5px] w-[22px] rounded-full bg-indigo-500 transition-all duration-300"
                  style={{ transform: menuOpen ? "translateY(7.5px) rotate(45deg)" : "" }}
                />
                <span
                  className="block h-[2.5px] w-[22px] rounded-full bg-indigo-500 transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "" }}
                />
                <span
                  className="block h-[2.5px] w-[22px] rounded-full bg-indigo-500 transition-all duration-300"
                  style={{ transform: menuOpen ? "translateY(-7.5px) rotate(-45deg)" : "" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: menuOpen ? "500px" : "0px", opacity: menuOpen ? 1 : 0 }}
        >
          <div className="bg-white backdrop-blur-xl border-t border-white/40 px-4 py-4 space-y-1">

            {/* Active: Home */}
            <div className="relative group">
              <button
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl
               text-sm font-medium text-gray-700 hover:bg-indigo-50
               hover:text-indigo-600 transition-colors duration-200"
              >
                <span>Courses</span>

                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className="hidden group-hover:block absolute left-0 top-full mt-1 w-48
               bg-white rounded-xl shadow-lg border z-50"
              >
                <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                  Web Development
                </a>

                <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                  Data Structures
                </a>

                <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                  React JS
                </a>

                <a href="#" className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600">
                  Node JS
                </a>
              </div>
            </div>

            {/* Products accordion */}
            <div>
              <button
                onClick={() => setProductOpen((p) => !p)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl
                         text-sm font-medium text-gray-700 hover:bg-indigo-50
                         hover:text-indigo-600 transition-colors duration-500"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Internship
                </span>
                <svg
                  className="w-4 h-4 text-gray-400 transition-transform duration-500"
                  style={{ transform: productOpen ? "rotate(180deg)" : "" }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out pl-7 space-y-0.5"
                style={{ maxHeight: productOpen ? "400px" : "0px" }}
              >
                {PRODUCTS.map(({ label, href }) => (
                  <a key={label} href={href}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm
                              font-bold text-blue-600 hover:bg-indigo-50 hover:text-blue-700
                              transition-colors duration-500">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Other nav links */}
            {NAV_LINKS.filter((l) => l.label !== "Courses").map(({ label, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                          text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                {label}
              </a>
            ))}

            {/* CTA */}
            <div className="pt-3 pb-1 flex flex-col gap-2">
              {/* <a href="#"
                className="text-center px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700
                          border border-gray-200 hover:border-indigo-300 hover:text-indigo-600
                          transition-all">
                Log in
              </a> */}
              <a
                href="#"
                className="text-center text-white text-sm font-semibold px-4 py-2.5 rounded-xl
                         transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
              >
                Log In/Register →
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

// Small reusable icon button
function IconBtn({ title, children }) {
  return (
    <button
      title={title}
      className="p-2 rounded-xl text-gray-400 hover:text-indigo-500
                 hover:bg-indigo-50 transition-all duration-200"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2}>
        {children}
      </svg>
    </button>
  );
}
