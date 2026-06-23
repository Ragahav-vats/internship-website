import React, { useState } from "react";

import {
    Search,
    Star,
    Clock,
    Users,
    BookOpen,
    Award,
    ArrowRight,
} from "lucide-react";

export default function Courses() {

    const [showAll, setShowAll] = useState(false);

    const courses = [
        {
            title: "Full Stack Development",
            level: "Beginner to Advanced",
            students: "12K+",
            duration: "12 Weeks",
            rating: "4.9",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            title: "Data Structures & Algorithms",
            level: "Intermediate",
            students: "8K+",
            duration: "10 Weeks",
            rating: "4.8",
            image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        },
        {
            title: "Java Programming Masterclass",
            level: "Beginner",
            students: "15K+",
            duration: "8 Weeks",
            rating: "4.9",
            image:
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        },
        {
            title: "AI & Machine Learning",
            level: "Advanced",
            students: "5K+",
            duration: "14 Weeks",
            rating: "4.7",
            image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        },
    ];

    const extraCourses = [
        {
            title: "Data Science Bootcamp",
            level: "Beginner to Advanced",
            students: "10K+",
            duration: "16 Weeks",
            rating: "4.9",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        },
        {
            title: "Cyber Security Professional",
            level: "Intermediate",
            students: "7K+",
            duration: "12 Weeks",
            rating: "4.8",
            image:
                "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
        },
    ];

    const categories = [
        "All Courses",
        "Web Development",
        "Programming",
        "Data Science",
        "AI/ML",
        "Cyber Security",
    ];

    return (
        <>
            <div className="bg-slate-950 text-white min-h-screen">

                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/10 to-cyan-500/20 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                        <div className="text-center max-w-4xl mx-auto">

                            <span className="px-5 py-2 rounded-full bg-indigo-500/20 border border-indigo-500 text-sm">
                                🚀 Learn From Industry Experts
                            </span>

                            <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
                                Upgrade Your Skills With
                                <span className="text-indigo-500">
                                    {" "}Professional Courses
                                </span>
                            </h1>

                            <p className="text-gray-400 mt-6 text-lg">
                                Learn trending technologies through structured learning,
                                real-world projects, mentorship, and certification.
                            </p>

                            {/* Search */}
                            <div className="max-w-2xl mx-auto mt-10 relative">

                                <Search
                                    className="absolute left-5 top-4 text-gray-400"
                                    size={20}
                                />

                                <input
                                    type="text"
                                    placeholder="Search Courses..."
                                    className="w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FILTERS */}
                <section className="max-w-7xl mx-auto px-6 py-8">

                    <div className="flex flex-wrap justify-center gap-4">

                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 rounded-xl transition-all ${index === 0
                                    ? "bg-indigo-600"
                                    : "bg-white/5 hover:bg-indigo-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* FEATURED COURSES */}
                <section className="max-w-7xl mx-auto px-6 py-16">

                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-bold">
                            Featured Courses
                        </h2>

                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-indigo-400 flex items-center gap-2"
                        >
                            {showAll ? "Show Less" : "View All"}
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 transition-all duration-500">

                        {[...courses, ...(showAll ? extraCourses : [])].map(
  (course, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
                            >
                                <img
                                    src={course.image}
                                    alt=""
                                    className="h-52 w-full object-cover"
                                />

                                <div className="p-6">

                                    <div className="flex items-center gap-2 text-yellow-400 mb-3">
                                        <Star size={18} fill="currentColor" />
                                        {course.rating}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-5">
                                        {course.level}
                                    </p>

                                    <div className="space-y-3 text-sm">

                                        <div className="flex items-center gap-2">
                                            <Users size={16} />
                                            {course.students} Students
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            {course.duration}
                                        </div>
                                    </div>

                                    <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY LEARN */}
                <section className="bg-slate-900 py-20">

                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-center text-4xl font-bold mb-16">
                            Why Learn With Us?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="bg-white/5 p-8 rounded-3xl">
                                <BookOpen
                                    className="text-indigo-500 mb-4"
                                    size={40}
                                />
                                <h3 className="text-2xl font-semibold mb-3">
                                    Structured Learning
                                </h3>
                                <p className="text-gray-400">
                                    Industry-standard curriculum designed for beginners and professionals.
                                </p>
                            </div>

                            <div className="bg-white/5 p-8 rounded-3xl">
                                <Users
                                    className="text-indigo-500 mb-4"
                                    size={40}
                                />
                                <h3 className="text-2xl font-semibold mb-3">
                                    Live Mentorship
                                </h3>
                                <p className="text-gray-400">
                                    Learn directly from industry experts and get career guidance.
                                </p>
                            </div>

                            <div className="bg-white/5 p-8 rounded-3xl">
                                <Award
                                    className="text-indigo-500 mb-4"
                                    size={40}
                                />
                                <h3 className="text-2xl font-semibold mb-3">
                                    Certification
                                </h3>
                                <p className="text-gray-400">
                                    Earn certificates and showcase your skills to recruiters.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-7xl mx-auto px-6 py-20">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        What Students Say
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="bg-white/5 rounded-3xl p-8"
                            >
                                <div className="flex text-yellow-400 mb-4">
                                    ⭐⭐⭐⭐⭐
                                </div>

                                <p className="text-gray-400">
                                    The course content was excellent and helped me
                                    secure my internship opportunity.
                                </p>

                                <h4 className="mt-6 font-semibold">
                                    Student Name
                                </h4>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="pb-20 px-6">

                    <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[40px] p-12 text-center">

                        <h2 className="text-5xl font-bold">
                            Start Learning Today
                        </h2>

                        <p className="mt-4 text-lg opacity-90">
                            Join thousands of students building their careers.
                        </p>

                        <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold">
                            Browse All Courses
                        </button>

                    </div>
                </section>

            </div>
        </>
    )
}
