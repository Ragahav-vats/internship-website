import { useState } from "react";
import {
  Code2,
  Cpu,
  Globe,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Star,
  Clock,
  BookOpen,
} from "lucide-react";

const programs = {
  "6-8": [
    {
      title: "Scratch Programming",
      icon: Code2,
      duration: "8 Weeks",
      level: "Beginner",
      color: "from-blue-500 to-cyan-500",
      description:
        "Learn coding fundamentals by creating games and animations."
    },
    {
      title: "AI for Kids",
      icon: BrainCircuit,
      duration: "6 Weeks",
      level: "Beginner",
      color: "from-violet-500 to-purple-500",
      description:
        "Introduction to Artificial Intelligence through fun activities."
    },
    {
      title: "Web Design Basics",
      icon: Globe,
      duration: "8 Weeks",
      level: "Beginner",
      color: "from-pink-500 to-rose-500",
      description:
        "Create beautiful websites using HTML & CSS concepts."
    },
  ],

  "9-10": [
    {
      title: "Python Programming",
      icon: Code2,
      duration: "10 Weeks",
      level: "Intermediate",
      color: "from-blue-500 to-indigo-500",
      description:
        "Master Python and solve real-world coding challenges."
    },
    {
      title: "App Development",
      icon: Smartphone,
      duration: "12 Weeks",
      level: "Intermediate",
      color: "from-green-500 to-emerald-500",
      description:
        "Build Android applications with practical projects."
    },
    {
      title: "Cyber Security",
      icon: ShieldCheck,
      duration: "10 Weeks",
      level: "Intermediate",
      color: "from-red-500 to-orange-500",
      description:
        "Understand ethical hacking and online security."
    },
  ],

  "11-12": [
    {
      title: "Full Stack Development",
      icon: Globe,
      duration: "16 Weeks",
      level: "Advanced",
      color: "from-cyan-500 to-blue-500",
      description:
        "React, Node.js, MongoDB and deployment projects."
    },
    {
      title: "Artificial Intelligence",
      icon: BrainCircuit,
      duration: "14 Weeks",
      level: "Advanced",
      color: "from-purple-500 to-pink-500",
      description:
        "Machine Learning fundamentals and AI applications."
    },
    {
      title: "IoT & Robotics",
      icon: Cpu,
      duration: "12 Weeks",
      level: "Advanced",
      color: "from-yellow-500 to-orange-500",
      description:
        "Build smart devices using sensors and microcontrollers."
    },
  ],
};

export default function Programs() {
  const [selected, setSelected] = useState("6-8");
  return (
    <>
      <section className="bg-slate-50 py-20 px-5">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto">

            <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold">
              School Learning Programs
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
              Future Ready Technology Programs
            </h2>

            <p className="mt-5 text-slate-600 text-lg">
              Interactive technology courses specially designed for school
              students to develop future-ready skills through practical learning.
            </p>

          </div>

          {/* Grade Filters */}

          <div className="flex justify-center flex-wrap gap-4 mt-12">

            {Object.keys(programs).map((grade) => (

              <button
                key={grade}
                onClick={() => setSelected(grade)}
                className={`px-7 py-3 rounded-full font-semibold transition-all duration-300

              ${selected === grade
                    ? "bg-indigo-600 text-white shadow-xl scale-105"
                    : "bg-white hover:bg-indigo-50 text-slate-700 border"
                  }
              `}
              >
                Grade {grade}
              </button>

            ))}

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

            {programs[selected].map((course, index) => {

              const Icon = course.icon;

              return (

                <div
                  key={index}
                  className="group w-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
                >

                  {/* Top */}

                  <div
                    className={`bg-gradient-to-r ${course.color} h-40 flex items-center justify-center relative`}
                  >

                    <div className="absolute right-5 top-5 bg-white/20 rounded-full p-2">

                      <Star className="text-white w-5 h-5" />

                    </div>

                    <div className="bg-white rounded-2xl p-6 group-hover:rotate-6 transition duration-500">

                      <Icon className="w-12 h-12 text-slate-700" />

                    </div>

                  </div>

                  {/* Body */}

                  <div className="p-7">

                    <h3 className="text-2xl font-bold text-slate-800">
                      {course.title}
                    </h3>

                    <p className="text-slate-500 mt-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex gap-4 mt-6">

                      <div className="flex items-center gap-2 text-sm text-slate-600">

                        <Clock size={18} />

                        {course.duration}

                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">

                        <BookOpen size={18} />

                        {course.level}

                      </div>

                    </div>

                    <button className="mt-8 w-full bg-slate-900 hover:bg-indigo-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition duration-300">

                      Explore Program

                      <ChevronRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />

                    </button>

                  </div>

                </div>

              );

            })}

          </div>

          {/* CTA */}

          <div className="mt-20 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white p-12 text-center">

            <h3 className="text-3xl md:text-4xl font-bold">
              Start Your Technology Journey Today
            </h3>

            <p className="mt-4 max-w-2xl mx-auto text-indigo-100">
              Join thousands of students learning coding, AI, cybersecurity,
              robotics and full-stack development through project-based learning.
            </p>

            <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">

              Enroll Now

            </button>

          </div>

        </div>
      </section>
    </>
  )
}
