import React from "react";
import {
    Calendar,
    Briefcase,
    Award,
    Users,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

export default function SummerInternship() {

    const benefits = [
        {
            icon: <Briefcase size={32} />,
            title: "Real Industry Projects",
            desc: "Work on practical projects and gain hands-on experience.",
        },
        {
            icon: <Award size={32} />,
            title: "Certificate",
            desc: "Receive an industry-recognized internship certificate.",
        },
        {
            icon: <Users size={32} />,
            title: "Expert Mentorship",
            desc: "Learn directly from experienced developers and mentors.",
        },
        {
            icon: <Calendar size={32} />,
            title: "Flexible Duration",
            desc: "Choose internship duration according to your schedule.",
        },
    ];

    const timeline = [
        "Application Submission",
        "Profile Screening",
        "Interview Round",
        "Selection & Onboarding",
        "Summer Internship Begins",
    ];

    return (
        <>
            <div className="bg-slate-950 text-white min-h-screen">

                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            <div>
                                <span className="bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-full text-sm">
                                    🚀 Summer Internship 2026
                                </span>

                                <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
                                    Launch Your
                                    <span className="text-blue-500"> Career </span>
                                    With Industry Experts
                                </h1>

                                <p className="text-gray-400 text-lg mt-6">
                                    Join our Summer Internship Program and gain practical
                                    experience, mentorship, certification, and placement support.
                                </p>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
                                        Apply Now
                                    </button>

                                    <button className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

                                    <div className="grid grid-cols-2 gap-6">

                                        <div className="bg-slate-900 rounded-2xl p-6">
                                            <h3 className="text-3xl font-bold text-blue-500">500+</h3>
                                            <p className="text-gray-400">Students Trained</p>
                                        </div>

                                        <div className="bg-slate-900 rounded-2xl p-6">
                                            <h3 className="text-3xl font-bold text-green-500">100+</h3>
                                            <p className="text-gray-400">Projects</p>
                                        </div>

                                        <div className="bg-slate-900 rounded-2xl p-6">
                                            <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
                                            <p className="text-gray-400">Mentors</p>
                                        </div>

                                        <div className="bg-slate-900 rounded-2xl p-6">
                                            <h3 className="text-3xl font-bold text-purple-500">95%</h3>
                                            <p className="text-gray-400">Completion Rate</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* Benefits Section */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center">
                        Why Join This Summer Internship?
                    </h2>

                    <p className="text-center text-gray-400 mt-4">
                        Learn, Build, Grow, and Get Industry Exposure.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="text-blue-500 mb-4">{item.icon}</div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="bg-slate-900 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16">
                         Summer Internship Process
                        </h2>

                        <div className="grid md:grid-cols-5 gap-6">
                            {timeline.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-800 rounded-2xl p-6 text-center"
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        {index + 1}
                                    </div>

                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Eligibility Criteria
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white/5 rounded-3xl p-8">
                            <ul className="space-y-5">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-green-500" />
                                    Undergraduate Students
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-green-500" />
                                    B.Tech / BCA / MCA / CS Students
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-green-500" />
                                    Passionate Learners
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-green-500" />
                                    Basic Programming Knowledge
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8">
                            <h3 className="text-3xl font-bold">
                              Summer Internship Duration
                            </h3>

                            <p className="mt-4 text-lg">
                                4 Weeks • 6 Weeks • 8 Weeks
                            </p>

                            <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold">
                                Apply Today
                            </button>
                        </div>

                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-slate-900 py-20">
                    <div className="max-w-4xl mx-auto px-6">

                        <h2 className="text-4xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">

                            <div className="bg-slate-800 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    Is this internship online?
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    Yes, the internship is completely online.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    Will I get a certificate?
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    Yes, certificates are provided after successful completion.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    Is there any project work?
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    Yes, students will work on real-world projects.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center">

                            <h2 className="text-5xl font-bold">
                                Ready To Start Your Journey?
                            </h2>

                            <p className="mt-4 text-lg">
                                Applications are now open for Summer Internship 2026.
                            </p>

                            <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
                                Apply Now <ArrowRight size={20} />
                            </button>

                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
