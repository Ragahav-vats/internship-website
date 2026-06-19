import React from 'react'
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import {
  GraduationCap,
  BriefcaseBusiness,
  BadgeCheck,
  Star,
  Trophy,
} from "lucide-react";

const TECH = [
  "React.js", "Node.js", "JavaScript", "MongoDB", "Express.js",
  "Tailwind CSS", "HTML5", "CSS3", "GitHub", "REST API",
  "Full Stack", "Web Dev", "TypeScript", "DevOps", "Docker",
  "GraphQL", "Python", "SQL", "Redux", "Next.js",
];

const BOX_COLORS = [
  { border: 'rgba(129,140,248,0.55)', glow: 'rgba(129,140,248,0.35)', bg: 'rgba(99,102,241,0.07)' },
  { border: 'rgba(34,211,238,0.55)', glow: 'rgba(34,211,238,0.32)', bg: 'rgba(6,182,212,0.07)' },
  { border: 'rgba(167,139,250,0.55)', glow: 'rgba(167,139,250,0.35)', bg: 'rgba(139,92,246,0.07)' },
  { border: 'rgba(244,114,182,0.5)', glow: 'rgba(244,114,182,0.3)', bg: 'rgba(236,72,153,0.06)' },
  { border: 'rgba(251,191,36,0.45)', glow: 'rgba(251,191,36,0.28)', bg: 'rgba(245,158,11,0.06)' },
  { border: 'rgba(52,211,153,0.5)', glow: 'rgba(52,211,153,0.3)', bg: 'rgba(16,185,129,0.06)' },
];

const BADGES = [
  { icon: "🚀", label: "Industry Projects", sub: "Live & real-world" },
  { icon: "🎓", label: "Internship Certificate", sub: "Globally recognized" },
  { icon: "💼", label: "Placement Assistance", sub: "Career support" },
  { icon: "🧑‍💻", label: "Expert Mentorship", sub: "1-on-1 guidance" },
];

function rand(min, max) { return min + Math.random() * (max - min); }

function makeBox(id, W, H) {
  const col = BOX_COLORS[Math.floor(Math.random() * BOX_COLORS.length)];
  const w = rand(60, 160), h = rand(40, 110);
  return {
    id, col, w, h,
    x: rand(0, W - w), y: rand(0, H - h),
    vx: (Math.random() < .5 ? 1 : -1) * rand(0.9, 2.8),
    vy: (Math.random() < .5 ? 1 : -1) * rand(0.7, 2.2),
    rot: rand(-25, 25), rotV: (Math.random() < .5 ? 1 : -1) * rand(0.3, 1.1),
    opacity: rand(0.25, 0.65), rx: Math.floor(rand(8, 22)),
  };
}

function makeWord(id, W, H) {
  return {
    id, text: TECH[id % TECH.length],
    x: rand(3, 90), y: rand(3, 90),
    vx: (Math.random() < .5 ? 1 : -1) * rand(0.12, 0.38),
    vy: (Math.random() < .5 ? 1 : -1) * rand(0.1, 0.3),
    rot: rand(-18, 18), rotV: (Math.random() < .5 ? 1 : -1) * rand(0.04, 0.18),
    scale: rand(0.65, 1.1), opacity: rand(0.09, 0.22),
  };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

const companies = [
  {
    name: "Microsoft",
    logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
  },
  {
    name: "Google",
    logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
  },
  {
    name: "Amazon",
    logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
];

import {
  ArrowRight,
  Phone,
  TrendingUp,
} from "lucide-react";

const courses = [
  {
    title: "Data Science & AI",
    subtitle: "Machine Learning & AI",
    salary: "₹ 9,00,000",
    hike: "40-70%",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Cloud Computing & DevOps",
    subtitle: "AWS, Azure & DevOps",
    salary: "₹ 9,00,000",
    hike: "50-100%",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    title: "Software Development",
    subtitle: "Full Stack Development",
    salary: "₹ 9,00,000",
    hike: "50-100%",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const stats = [
  {
    icon: <GraduationCap size={28} />,
    value: "187K+",
    label: "Students Enrolled",
  },
  {
    icon: <BriefcaseBusiness size={28} />,
    value: "300+",
    label: "Industry Partners",
  },
  {
    icon: <BadgeCheck size={28} />,
    value: "100%",
    label: "Placement Assistance",
  },
  {
    icon: <Star size={28} />,
    value: "4.9/5",
    label: "Overall Rating",
  },
];

const faqs = [
  {
    question: "What is Gradus?",
    answer:
      "Gradus is an online education and career acceleration platform designed to help students and professionals build industry-ready skills and become placement ready.",
  },
  {
    question: "Who is Gradus for?",
    answer:
      "Gradus is for students, fresh graduates, working professionals, and anyone looking to upskill and accelerate their career growth.",
  },
  {
    question: "What kinds of programs does Gradus offer?",
    answer:
      "Gradus offers certification programs, masterclasses, career-focused bootcamps, mentorship sessions, and placement assistance.",
  },
  {
    question: "Do I get placement support?",
    answer:
      "Yes, eligible learners receive placement assistance including resume reviews, mock interviews, and job referrals.",
  },

  {
    question: "For support, How do I contact Gradus?",
    answer:
      "You can initiate communication through the Contact page on the website to seek clarification or consult about programs, admissions, or support..",
  },
];

export default function Home() {

  const W = window.innerWidth, H = window.innerHeight;
  const canvasRef = useRef();
  const boxesRef = useRef([]);
  const wordsRef = useRef([]);
  const rafRef = useRef();
  const [hovBtn, setHovBtn] = useState(null);
  const [hovBadge, setHovBadge] = useState(null);
  useEffect(() => {
    boxesRef.current = Array.from({ length: 28 }, (_, i) => makeBox(i, W, H));
    wordsRef.current = Array.from({ length: 40 }, (_, i) => makeWord(i, W, H));
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = W; canvas.height = H;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      boxesRef.current = boxesRef.current.map(b => {
        let { x, y, vx, vy, rot, rotV, w, h } = b;
        x += vx; y += vy; rot += rotV;
        if (x < -w) x = W; if (x > W) x = -w;
        if (y < -h) y = H; if (y > H) y = -h;
        ctx.save();
        ctx.translate(x + w / 2, y + h / 2);
        ctx.rotate(rot * Math.PI / 180);
        ctx.globalAlpha = b.opacity;
        ctx.shadowColor = b.col.glow; ctx.shadowBlur = 18;
        ctx.fillStyle = b.col.bg;
        roundRect(ctx, -w / 2, -h / 2, w, h, b.rx); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = b.col.border; ctx.lineWidth = 1.2;
        roundRect(ctx, -w / 2, -h / 2, w, h, b.rx); ctx.stroke();
        ctx.globalAlpha = b.opacity * 0.4;
        ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 0.6;
        roundRect(ctx, -w / 2 + 3, -h / 2 + 3, w - 6, h - 6, Math.max(2, b.rx - 3));
        ctx.stroke();
        ctx.restore();
        return { ...b, x, y, rot };
      });

      wordsRef.current = wordsRef.current.map(w => {
        let { x, y, vx, vy, rot, rotV, scale, opacity, text } = w;
        x += vx; y += vy; rot += rotV;
        if (x < -5) x = 98; if (x > 100) x = -5;
        if (y < -5) y = 98; if (y > 100) y = -5;
        ctx.save();
        ctx.translate(x / 100 * W, y / 100 * H);
        ctx.rotate(rot * Math.PI / 180);
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;
        ctx.font = "600 13px Inter,sans-serif";
        ctx.fillStyle = "rgba(200,210,255,0.95)";
        ctx.textAlign = "center";
        ctx.fillText(text, 0, 0);
        ctx.restore();
        return { ...w, x, y, rot };
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "radial-gradient(ellipse at 20% 50%, #0d0a23 0%, #1e1b4b 45%, #0a0818 100%)",
        fontFamily: "'Inter','Segoe UI',sans-serif",
      }}>
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        {/* Glow orbs + grid overlay omitted for brevity — see widget version for full styles */}
        <div style={{
          position: "relative", zIndex: 10, display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", padding: "60px 20px", width: "100%", maxWidth: 880
        }}>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 20px",
            borderRadius: 99, marginBottom: 24,
            background: "linear-gradient(135deg,rgba(99,102,241,0.28),rgba(6,182,212,0.16))",
            border: "1px solid rgba(99,102,241,0.42)", color: "#a5b4fc", fontSize: 13, fontWeight: 700,
            backdropFilter: "blur(14px)", boxShadow: "0 0 28px rgba(99,102,241,0.22)"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", display: "inline-block" }} />
            🎓 Now Enrolling — Batch 2025
          </div>

          <h1 style={{
            fontWeight: 900, lineHeight: 1.1, marginBottom: 20,
            fontSize: "clamp(2.1rem,5.8vw,3.9rem)", color: "#f0f4ff",
            textShadow: "0 2px 40px rgba(99,102,241,0.4)", letterSpacing: "-0.025em"
          }}>
            Internship &{" "}
            <span style={{
              background: "linear-gradient(90deg,#818cf8,#22d3ee,#a78bfa,#f472b6)",
              backgroundSize: "300% auto", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer 3s linear infinite"
            }}>Certification</span>
            <br />Program
          </h1>

          <p style={{
            maxWidth: 620, marginBottom: 34, lineHeight: 1.78,
            fontSize: "clamp(0.92rem,1.9vw,1.1rem)", color: "rgba(203,213,225,0.72)"
          }}>
            Gain{" "}
            <span style={{
              background: "linear-gradient(90deg,#818cf8,#22d3ee)", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700
            }}>
              real-world industry experience
            </span>, work on{" "}
            <span style={{
              background: "linear-gradient(90deg,#a78bfa,#f472b6)", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700
            }}>
              live projects
            </span>, build your portfolio, and earn{" "}
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>globally recognized certificates</span>.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 40 }}>
            <button onMouseEnter={() => setHovBtn("apply")} onMouseLeave={() => setHovBtn(null)}
              style={{
                padding: "13px 34px", borderRadius: 13, border: "none", fontWeight: 800,
                fontSize: "0.97rem", cursor: "pointer", letterSpacing: "0.02em", color: "#fff",
                background: hovBtn === "apply"
                  ? "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)"
                  : "linear-gradient(135deg,#6d28d9,#1d4ed8)",
                boxShadow: hovBtn === "apply"
                  ? "0 0 40px rgba(99,102,241,0.7),0 8px 28px rgba(0,0,0,0.55)"
                  : "0 0 18px rgba(99,102,241,0.4),0 4px 16px rgba(0,0,0,0.4)",
                transform: hovBtn === "apply" ? "translateY(-4px) scale(1.05)" : "none",
                transition: "all 0.22s ease"
              }}>
              🚀 Apply for Internship
            </button>
            <button onMouseEnter={() => setHovBtn("cert")} onMouseLeave={() => setHovBtn(null)}
              style={{
                padding: "13px 34px", borderRadius: 13, fontWeight: 800,
                fontSize: "0.97rem", cursor: "pointer", letterSpacing: "0.02em",
                background: hovBtn === "cert" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                color: "#e2e8f0",
                border: `1.5px solid ${hovBtn === "cert" ? "rgba(99,102,241,0.7)" : "rgba(255,255,255,0.18)"}`,
                boxShadow: hovBtn === "cert" ? "0 0 28px rgba(99,102,241,0.32)" : "none",
                transform: hovBtn === "cert" ? "translateY(-4px) scale(1.05)" : "none",
                transition: "all 0.22s ease", backdropFilter: "blur(12px)"
              }}>
              🎓 View Certificates
            </button>
          </div>

          <div style={{
            display: "grid", gap: 12, width: "100%", maxWidth: 760,
            gridTemplateColumns: "repeat(auto-fit,minmax(162px,1fr))"
          }}>
            {BADGES.map((b, i) => (
              <div key={i}
                onMouseEnter={() => setHovBadge(i)} onMouseLeave={() => setHovBadge(null)}
                style={{
                  background: hovBadge === i
                    ? "linear-gradient(135deg,rgba(99,102,241,0.24),rgba(6,182,212,0.14))"
                    : "linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))",
                  border: `1px solid ${hovBadge === i ? "rgba(99,102,241,0.55)" : "rgba(255,255,255,0.11)"}`,
                  borderRadius: 16, padding: "18px 12px", backdropFilter: "blur(18px)",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
                  transform: hovBadge === i ? "translateY(-6px)" : "none",
                  transition: "all 0.22s ease", cursor: "default",
                  boxShadow: hovBadge === i ? "0 12px 40px rgba(99,102,241,0.25)" : "0 2px 14px rgba(0,0,0,0.28)",
                }}>
                <span style={{ fontSize: 26, lineHeight: 1 }}>{b.icon}</span>
                <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.84rem", textAlign: "center" }}>{b.label}</span>
                <span style={{ color: "rgba(148,163,184,0.8)", fontSize: "0.73rem", textAlign: "center" }}>{b.sub}</span>
              </div>
            ))}
          </div>

          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "center", gap: "8px 22px", marginTop: 36,
            color: "rgba(148,163,184,0.6)", fontSize: 13
          }}>
            {[["2,500+", "Students Enrolled"], ["98%", "Placement Rate"], ["50+", "Hiring Partners"]].map(([val, lbl], i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{
                  fontWeight: 800, fontSize: "1.05rem",
                  background: "linear-gradient(90deg,#818cf8,#22d3ee)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>{val}</span>
                {lbl}
              </span>
            ))}
          </div>
        </div>

        <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50% }
          50%  { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
      </section>

      <section className="bg-white py-16 overflow-hidden">
        <div className="w-full md:px-8 lg:px-12 px-4">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Trusted By Talent From
            </p>

            <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Infinite Moving Logos */}
          <div className="relative overflow-hidden mb-20">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[220px] mx-8"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Students */}
            <div className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="text-blue-600 text-5xl mb-5">🏆</div>

              <h2 className="text-4xl font-bold mb-4">
                For Students
              </h2>

              <p className="text-gray-600 mb-6 leading-7">
                Bridge the gap between campus theory and industry reality.
                Get placement ready with real-world projects.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  ✅ Portfolio-worthy Capstones
                </li>
                <li className="flex items-center gap-3">
                  ✅ Interview Prep with FAANG Mentors
                </li>
                <li className="flex items-center gap-3">
                  ✅ Industry Ready Projects
                </li>
              </ul>

              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Explore
              </button>
            </div>

            {/* Professionals */}
            <div className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="text-green-600 text-5xl mb-5">📈</div>

              <h2 className="text-4xl font-bold mb-4">
                For Professionals
              </h2>

              <p className="text-gray-600 mb-6 leading-7">
                Upskill without quitting. Learn AI, Full Stack,
                Cloud and Data Science for immediate ROI.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  ✅ Weekend-only Live Cohorts
                </li>
                <li className="flex items-center gap-3">
                  ✅ Networking Access
                </li>
                <li className="flex items-center gap-3">
                  ✅ Career Guidance
                </li>
              </ul>

              <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                Explore
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full md:px-8 lg:px-12 px-4">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">

            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase">
                Launch Your Mission
              </h2>

              <p className="text-gray-500 mt-3">
                Pick a specialized vertical and master the outcome.
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition">
              View Other Courses
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl min-h-[320px] shadow-xl"
              >
                {/* Background Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">

                  <div>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      CAREER ASSISTANCE
                    </span>

                    <h3 className="mt-5 text-3xl font-extrabold">
                      {course.title}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      {course.subtitle}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <p className="text-gray-300 text-sm">
                          Avg Package
                        </p>
                        <h4 className="text-2xl font-bold">
                          {course.salary}
                        </h4>
                      </div>

                      <div className="text-right">
                        <p className="text-green-400 text-sm">
                          Avg Hike
                        </p>

                        <div className="flex items-center gap-1 justify-end">
                          <TrendingUp size={18} />
                          <span className="font-bold text-xl">
                            {course.hike}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                      <Phone size={16} />
                      Request Callback
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        {/* Background Blur */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-40"></div>

        <div className="w-full md:px-8 lg:px-12 px-4">
          {/* Top Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                THE GRADUS PROMISE
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Empowering Careers Through
                <span className="text-blue-600"> Data Driven Learning</span>
              </h2>

              <p className="mt-5 max-w-xl text-lg text-slate-600">
                We're committed to your growth by delivering industry-ready
                skills, mentorship, career guidance, and placement support that
                help learners achieve outstanding professional outcomes.
              </p>
            </div>

            {/* Right Trophy */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl">
                    <Trophy size={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 uppercase tracking-widest text-sm text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
              Get Expert Advice →
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wider">
                📱 MOBILE APP
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
                Learn Anywhere.
                <br />
                <span className="text-blue-600">
                  Master Anytime.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                Experience education like never before with our mobile app.
                Access live classes, recorded lectures, daily challenges,
                quizzes, progress tracking and placement preparation from
                anywhere.
              </p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  🎯 Daily Challenges
                </div>

                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  🎥 Live Classes
                </div>

                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  📚 Recorded Content
                </div>

                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  💼 Placement Support
                </div>
              </div>

              {/* Store Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">

                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-8 h-8"
                    fill="currentColor"
                  >
                    <path d="M325.3 234.3L104.6 13.6C98.2 7.2 89.1 4.4 80.4 6.2L301.8 227.6L325.3 234.3zM36.5 35.6C34.3 41.3 33 47.6 33 54.3v403.4c0 6.7 1.3 13 3.5 18.7L277.4 256 36.5 35.6zM480.4 229.5L372.2 167.2 325.7 213.7 359.5 247.5 480.4 229.5zM325.7 298.3L372.2 344.8 480.4 282.5 359.5 264.5 325.7 298.3zM80.4 505.8c8.7 1.8 17.8-1 24.2-7.4l220.7-220.7-23.5 6.7L80.4 505.8z" />
                  </svg>

                  <div>
                    <p className="text-[10px] uppercase">
                      Get it on
                    </p>
                    <p className="text-lg font-semibold leading-none">
                      Google Play
                    </p>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-8 h-8"
                    fill="currentColor"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.3 49.8-84.7-18.6-26.6-46.6-41.3-83.7-44.2-35.1-2.8-73.5 20.5-87.5 20.5-14.8 0-48.8-19.5-75.5-19.5C66.3 141 0 192.7 0 299.4 0 330.9 5.7 363.4 17.2 396.8c15.4 44.4 70.9 153.2 128.8 151.4 30.3-.7 51.8-21.5 91.2-21.5 38.3 0 58.2 21.5 91.9 21.5 58.5-.8 108.8-99.7 123.4-144.2-86.5-40.8-133.8-122.5-133.8-135.3zM259.5 0c2.8 24.1-6.9 48.1-20.1 65.2-13.1 16.8-34.8 29.9-56.4 28.2-3-23.4 7.6-47.7 20.6-63.6C216.6 13.5 239.8 2.4 259.5 0z" />
                  </svg>

                  <div>
                    <p className="text-[10px]">
                      Download on the
                    </p>
                    <p className="text-lg font-semibold leading-none">
                      App Store
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>

                <div className="relative w-[300px] md:w-[350px] h-[620px] bg-white border-[10px] border-black rounded-[45px] shadow-2xl overflow-hidden">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>

                  <div className="p-6 mt-10">
                    <h3 className="font-bold text-xl">
                      Hi, Raghav! 👋
                    </h3>

                    <div className="mt-6 bg-gradient-to-r from-black to-blue-900 text-white rounded-3xl p-5">
                      <p className="text-xs text-blue-300">
                        READY TO TEST?
                      </p>

                      <h4 className="font-bold text-2xl mt-2">
                        DAILY ASSESSMENT
                      </h4>

                      <button className="mt-4 bg-blue-500 px-5 py-2 rounded-full text-sm">
                        Start Quiz →
                      </button>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-semibold mb-4">
                        Continue Learning
                      </h4>

                      <div className="bg-gray-100 p-4 rounded-xl">
                        <p className="font-medium">
                          Go Backend Development
                        </p>

                        <div className="mt-3 h-2 bg-gray-300 rounded-full">
                          <div className="w-[70%] h-full bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
                    <div className="flex justify-around">
                      <span>🏠</span>
                      <span>📚</span>
                      <span>🗺️</span>
                      <span>⚙️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Founder Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-[40px] blur-3xl opacity-40"></div>

              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900"
                  alt="Founder"
                  className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div>

              <span className="inline-block px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                A Message From The Founder
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
                Our Mission
              </h2>

              <h3 className="mt-5 text-xl md:text-2xl font-semibold text-blue-600">
                Empowering 60 Million Graduates by 2026.
              </h3>

              {/* Quote */}
              <div className="mt-8 pl-6 border-l-4 border-blue-500">
                <p className="text-gray-600 text-lg leading-9 italic">
                  "India is standing at a defining moment. We have the world's
                  largest young population, yet millions of capable students
                  struggle to find meaningful careers because they lack
                  industry-ready skills. This gap between education and
                  employment inspired us to create a platform that transforms
                  learning into real-world opportunities."
                </p>
              </div>

              {/* Founder Info */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  H
                </div>

                <div>
                  <h4 className="font-bold text-xl text-slate-900">
                    Hrishant Ramesh Singh
                  </h4>
                  <p className="text-gray-500">
                    CEO & Founder
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  Learn More →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1">

              <span className="inline-block px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase border border-blue-100">
                A Message From The Director
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
                Director's Message
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">
                <p>
                  At Gradus, our vision has always been clear — to prepare
                  individuals for the realities of the modern workplace.
                </p>

                <p>
                  In a world driven by AI and constant change, success belongs
                  to those who are skilled, adaptable, and ready to create
                  impact. That's why we focus on practical learning, industry
                  exposure, and real career outcomes.
                </p>

                <p>
                  We are committed to helping you not just learn, but grow into
                  a confident, future-ready professional.
                </p>
              </div>

              {/* Director Info */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  DK
                </div>

                <div>
                  <h4 className="font-bold text-xl text-slate-900">
                    Deepika Kumari
                  </h4>
                  <p className="text-slate-500">
                    Director, Gradus
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Know More →
                </button>
              </div>

            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-blue-100 rounded-[40px] blur-3xl opacity-40"></div>

                {/* Image Card */}
                <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">

                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900"
                    alt="Director"
                    className="w-full max-w-[550px] h-auto object-cover hover:scale-105 transition duration-700"
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">

          <div class="grid lg:grid-cols-2 gap-12 items-center">

            {/* <!-- Image Section --> */}
            <div class="relative">
              <div class="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

              <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200%22"
                  alt="HR Head"
                  class="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* <!-- Content Section --> */}
            <div>
              <span
                class="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-5"
              >
                A Message From HR
              </span>

              <h2
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
                Welcome to
                <span class="text-blue-600">Gradus</span>
              </h2>

              <div class="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  We know how crowded the job market feels today. Everyone has a
                  degree, everyone has certificates, but only a few candidates are
                  truly job-ready from day one.
                </p>

                <p>
                  The gap between what colleges teach and what companies actually
                  need is exactly why Gradus exists.
                </p>

                <p>
                  If you're here, you're already one step ahead. You're not looking
                  for just another course — you're looking for a real outcome and a
                  successful career path.
                </p>

                <p>
                  Explore our programs, attend a free masterclass, and let's build
                  your future together.
                </p>
              </div>

              {/* <!-- HR Info --> */}
              <div class="mt-8 flex items-center gap-4">
                <div
                  class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl"
                >
                  S
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900 text-lg">
                    Shreya Grover
                  </h4>
                  <p class="text-gray-500">
                    HR Head, Gradus
                  </p>
                </div>
              </div>

              {/* <!-- Buttons --> */}
              <div class="flex flex-wrap gap-4 mt-10">
                <button
                  class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
                >
                  Explore Programs
                </button>

                <button
                  class="px-8 py-4 border border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-xl font-semibold transition"
                >
                  Free Masterclass
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              FAQs
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked
              <span className="text-blue-600"> Questions</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses,
              masterclasses, and platform.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 text-gray-700 leading-relaxed text-base md:text-lg font-semibold">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      

    </>
  )
}
