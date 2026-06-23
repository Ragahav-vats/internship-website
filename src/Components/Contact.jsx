import React from 'react'
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
} from "lucide-react";

export default function Contact() {
    return (
        <>
            <div className="min-h-screen bg-slate-950 text-white">

                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-500/10 to-cyan-500/20 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">

                            <span className="px-5 py-2 rounded-full border border-blue-500 bg-blue-500/10 text-sm">
                                Contact Support Team
                            </span>

                            <h1 className="text-5xl md:text-7xl font-bold mt-8">
                                Let's Start a
                                <span className="text-blue-500"> Conversation</span>
                            </h1>

                            <p className="text-gray-400 mt-6 text-lg">
                                Have questions about courses, internships, certificates,
                                or placements? We're here to help.
                            </p>

                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="max-w-7xl mx-auto px-6 pb-20">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* Left Side */}
                        <div>

                            <h2 className="text-3xl font-bold mb-8">
                                Get In Touch
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-6">

                                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                    <Mail className="text-blue-500 mb-4" size={35} />
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-gray-400 mt-2">
                                        support@example.com
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                    <Phone className="text-green-500 mb-4" size={35} />
                                    <h3 className="font-semibold text-lg">Call Us</h3>
                                    <p className="text-gray-400 mt-2">
                                        +91 9876543210
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                    <MapPin className="text-red-500 mb-4" size={35} />
                                    <h3 className="font-semibold text-lg">Location</h3>
                                    <p className="text-gray-400 mt-2">
                                        Varanasi, Uttar Pradesh
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                    <Clock className="text-yellow-500 mb-4" size={35} />
                                    <h3 className="font-semibold text-lg">Working Hours</h3>
                                    <p className="text-gray-400 mt-2">
                                        Mon - Sat (9 AM - 6 PM)
                                    </p>
                                </div>

                            </div>

                            {/* Quick Help */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 mt-8">

                                <MessageSquare size={40} />

                                <h3 className="text-2xl font-bold mt-4">
                                    Need Immediate Help?
                                </h3>

                                <p className="mt-3 opacity-90">
                                    Our support team usually responds within
                                    24 hours.
                                </p>

                                <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold">
                                    Start Chat
                                </button>

                            </div>

                        </div>

                        {/* Right Side Form */}
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-lg">

                            <h2 className="text-3xl font-bold mb-8">
                                Send Message
                            </h2>

                            <form className="space-y-6">

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="bg-slate-900 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="bg-slate-900 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500"
                                    />

                                </div>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500"
                                />

                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500 resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>

                            </form>

                        </div>

                    </div>

                </section>

                {/* FAQ Section */}
                <section className="bg-slate-900 py-20">

                    <div className="max-w-6xl mx-auto px-6">

                        <h2 className="text-center text-4xl font-bold mb-14">
                            Frequently Asked Questions
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-white/5 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    How can I enroll in a course?
                                </h3>

                                <p className="text-gray-400 mt-3">
                                    Choose your desired course and click
                                    on the Enroll button.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    Do you provide certificates?
                                </h3>

                                <p className="text-gray-400 mt-3">
                                    Yes, certificates are provided after
                                    successful completion.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    Is placement support available?
                                </h3>

                                <p className="text-gray-400 mt-3">
                                    Yes, we provide placement assistance
                                    and career guidance.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg">
                                    Can I contact mentors directly?
                                </h3>

                                <p className="text-gray-400 mt-3">
                                    Yes, enrolled students get access
                                    to mentor support.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

                {/* CTA */}
                <section className="py-20 px-6">

                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-center">

                        <h2 className="text-5xl font-bold">
                            Ready To Learn With Us?
                        </h2>

                        <p className="mt-4 text-lg opacity-90">
                            Join thousands of students building successful careers.
                        </p>

                        <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold">
                            Explore Courses
                        </button>

                    </div>

                </section>

            </div>
        </>
    )
}
