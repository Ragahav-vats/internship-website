import React from 'react'
import {
    Users,
    Award,
    BookOpen,
    Target,
    Eye,
    Rocket,
    CheckCircle,
} from "lucide-react";

export default function About() {

    const stats = [
        { number: "10K+", label: "Students Trained" },
        { number: "500+", label: "Projects Completed" },
        { number: "150+", label: "Industry Mentors" },
        { number: "95%", label: "Student Satisfaction" },
    ];

    const features = [
        "Industry-Oriented Curriculum",
        "Live Project Experience",
        "Internship Opportunities",
        "Placement Assistance",
        "Expert Mentorship",
        "Certification Programs",
    ];

    const team = [
        {
            name: "Rahul Sharma",
            role: "Senior Full Stack Mentor",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        },
        {
            name: "Priya Singh",
            role: "AI & Data Science Expert",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        },
        {
            name: "Amit Verma",
            role: "Cyber Security Mentor",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        },
    ];

    return (
        <>
            <div className="bg-slate-950 text-white min-h-screen">

                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-500/10 to-cyan-500/20 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                        <div className="text-center max-w-4xl mx-auto">

                            <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-sm">
                                About Our Learning Platform
                            </span>

                            <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
                                Empowering Students For
                                <span className="text-blue-500">
                                    {" "}Future Careers
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg mt-6">
                                We help students gain industry-ready skills through
                                practical courses, internships, mentorship, and
                                career guidance.
                            </p>

                        </div>

                    </div>
                </section>

                {/* OUR STORY */}
                <section className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                alt=""
                                className="rounded-3xl w-full h-[500px] object-cover"
                            />
                        </div>

                        <div>

                            <h2 className="text-4xl font-bold mb-6">
                                Our Story
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                We started with a simple mission — to bridge the gap
                                between academic learning and industry requirements.
                                Our programs are designed to help students gain practical
                                knowledge, work on real-world projects, and build careers
                                in technology.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                Through courses, internships, mentorship, and placement
                                support, we have helped thousands of students become
                                job-ready professionals.
                            </p>

                        </div>

                    </div>

                </section>

                {/* MISSION & VISION */}
                <section className="bg-slate-900 py-20">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">

                                <Target className="text-blue-500 mb-5" size={50} />

                                <h3 className="text-3xl font-bold mb-4">
                                    Our Mission
                                </h3>

                                <p className="text-gray-400">
                                    To provide accessible, affordable, and practical
                                    education that empowers students with industry-ready
                                    skills.
                                </p>

                            </div>

                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">

                                <Eye className="text-indigo-500 mb-5" size={50} />

                                <h3 className="text-3xl font-bold mb-4">
                                    Our Vision
                                </h3>

                                <p className="text-gray-400">
                                    To become a leading platform for skill development,
                                    innovation, and career transformation.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* STATS */}
                <section className="max-w-7xl mx-auto px-6 py-20">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        Our Impact
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-3xl p-8 text-center border border-white/10"
                            >
                                <h3 className="text-5xl font-bold text-blue-500">
                                    {item.number}
                                </h3>

                                <p className="text-gray-400 mt-3">
                                    {item.label}
                                </p>
                            </div>
                        ))}

                    </div>

                </section>

                {/* WHY CHOOSE US */}
                <section className="bg-slate-900 py-20">

                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-center text-4xl font-bold mb-14">
                            Why Choose Us?
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-3"
                                >
                                    <CheckCircle className="text-green-500" />
                                    {feature}
                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* TEAM */}
                <section className="max-w-7xl mx-auto px-6 py-20">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        Meet Our Mentors
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="text-blue-400 mt-2">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </section>

                {/* SUCCESS SECTION */}
                <section className="bg-slate-900 py-20">

                    <div className="max-w-5xl mx-auto px-6 text-center">

                        <Rocket
                            size={60}
                            className="mx-auto text-blue-500 mb-6"
                        />

                        <h2 className="text-5xl font-bold">
                            Helping Students Launch Careers
                        </h2>

                        <p className="text-gray-400 mt-6 text-lg">
                            Our goal is to transform learning into career success
                            through internships, projects, mentorship, and practical
                            industry exposure.
                        </p>

                    </div>

                </section>

                {/* CTA */}
                <section className="py-20 px-6">

                    <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-center">

                        <h2 className="text-5xl font-bold">
                            Ready To Start Your Journey?
                        </h2>

                        <p className="mt-4 text-lg opacity-90">
                            Explore our courses and internships today.
                        </p>

                        <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold">
                            Get Started
                        </button>

                    </div>

                </section>

            </div>
        </>
    )
}
