import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
);
const LocationIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const ClockIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
);
const BriefcaseIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
);
const StarIcon = ({ filled }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);
const ArrowRightIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);
const FilterIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
);
const BookmarkIcon = ({ saved }) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={saved ? "#6366f1" : "none"} stroke={saved ? "#6366f1" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
);
const SparkleIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
);
const ChevronDownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M6 9l6 6 6-6" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const INTERNSHIPS = [
    {
        id: 1, type: "internship",
        company: "Stripe", logo: "S", logoColor: "bg-violet-600",
        role: "Frontend Engineering Intern",
        location: "San Francisco, CA", mode: "Hybrid",
        duration: "6 months", stipend: "$5,500/mo",
        tags: ["React", "TypeScript", "GraphQL"],
        domain: "Fintech", rating: 4.8, reviews: 320,
        deadline: "Aug 15, 2025", featured: true, saved: false,
        desc: "Build user-facing product features used by millions of businesses worldwide. Work directly with senior engineers on payment infrastructure.",
    },
    {
        id: 2, type: "internship",
        company: "Notion", logo: "N", logoColor: "bg-slate-800",
        role: "Product Design Intern",
        location: "New York, NY", mode: "Remote",
        duration: "4 months", stipend: "$4,200/mo",
        tags: ["Figma", "UX Research", "Design Systems"],
        domain: "Productivity", rating: 4.7, reviews: 214,
        deadline: "Jul 30, 2025", featured: false, saved: false,
        desc: "Shape the future of collaborative productivity tools. You'll own design for one feature area end to end and ship to real users.",
    },
    {
        id: 3, type: "internship",
        company: "Databricks", logo: "D", logoColor: "bg-orange-500",
        role: "Data Engineering Intern",
        location: "Seattle, WA", mode: "On-site",
        duration: "5 months", stipend: "$6,000/mo",
        tags: ["Python", "Spark", "SQL"],
        domain: "Data & AI", rating: 4.9, reviews: 187,
        deadline: "Aug 1, 2025", featured: true, saved: false,
        desc: "Work on the Lakehouse platform powering analytics for Fortune 500 companies. Deep-dive into distributed systems at scale.",
    },
    {
        id: 4, type: "internship",
        company: "Linear", logo: "L", logoColor: "bg-indigo-500",
        role: "Software Engineering Intern",
        location: "Remote", mode: "Remote",
        duration: "3 months", stipend: "$4,800/mo",
        tags: ["Rust", "TypeScript", "WebSockets"],
        domain: "Dev Tools", rating: 4.6, reviews: 98,
        deadline: "Sep 10, 2025", featured: false, saved: false,
        desc: "Join a tiny, world-class team building the project management tool loved by engineers. Ship code on day one.",
    },
    {
        id: 5, type: "summer",
        company: "Google", logo: "G", logoColor: "bg-blue-500",
        role: "STEP Intern — Summer 2025",
        location: "Mountain View, CA", mode: "On-site",
        duration: "12 weeks", stipend: "$7,000/mo",
        tags: ["C++", "Go", "Distributed Systems"],
        domain: "Big Tech", rating: 4.9, reviews: 2100,
        deadline: "May 1, 2025", featured: true, saved: false,
        desc: "Google's flagship summer internship for aspiring engineers. Work on products at planetary scale alongside Googlers who are top of their field.",
    },
    {
        id: 6, type: "summer",
        company: "Figma", logo: "F", logoColor: "bg-pink-500",
        role: "Summer Design Intern",
        location: "San Francisco, CA", mode: "Hybrid",
        duration: "10 weeks", stipend: "$5,000/mo",
        tags: ["Product Design", "Prototyping", "User Testing"],
        domain: "Design Tools", rating: 4.8, reviews: 430,
        deadline: "Apr 20, 2025", featured: false, saved: false,
        desc: "Design features that empower millions of designers and developers. Mentored by designers who shipped the most beloved UI toolkit.",
    },
    {
        id: 7, type: "summer",
        company: "Vercel", logo: "V", logoColor: "bg-gray-900",
        role: "Summer Frontend Intern",
        location: "Remote", mode: "Remote",
        duration: "12 weeks", stipend: "$4,500/mo",
        tags: ["Next.js", "Edge Functions", "TypeScript"],
        domain: "Dev Tools", rating: 4.7, reviews: 155,
        deadline: "Jun 1, 2025", featured: true, saved: false,
        desc: "Intern on the platform that powers the modern web. You'll touch Next.js internals, the dashboard, and real-time infrastructure.",
    },
    {
        id: 8, type: "summer",
        company: "Anthropic", logo: "A", logoColor: "bg-amber-500",
        role: "AI Safety Summer Intern",
        location: "San Francisco, CA", mode: "Hybrid",
        duration: "12 weeks", stipend: "$8,000/mo",
        tags: ["Python", "ML Research", "PyTorch"],
        domain: "AI Research", rating: 5.0, reviews: 62,
        deadline: "Mar 15, 2025", featured: true, saved: false,
        desc: "Research that matters. Work on alignment, interpretability, or safety evaluations alongside leading AI researchers building responsible AI.",
    },
];

const DOMAINS = ["All", "Fintech", "Productivity", "Data & AI", "Dev Tools", "Big Tech", "Design Tools", "AI Research"];
const MODES = ["All", "Remote", "Hybrid", "On-site"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">I</span>
                    </div>
                    <span className="font-bold text-slate-800 text-lg tracking-tight">Internly</span>
                </div>


                <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-500">
                    {["Browse", "Companies", "Resources", "Blog"].map(l => (
                        <button key={l} className="hover:text-indigo-600 transition-colors">{l}</button>
                    ))}
                </div>


                <div className="hidden md:flex items-center gap-3">
                    <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors px-3 py-1.5">Log in</button>
                    <button className="text-sm font-semibold text-white px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 transition shadow-sm">
                        Post Internship
                    </button>
                </div>


                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-slate-500 hover:text-indigo-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        {menuOpen ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></> : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
                    </svg>
                </button>
            </div>


            {menuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-600">
                    {["Browse", "Companies", "Resources", "Blog"].map(l => (
                        <button key={l} className="text-left hover:text-indigo-600 transition-colors py-1">{l}</button>
                    ))}
                    <div className="pt-2 flex flex-col gap-2">
                        <button className="text-indigo-600 font-semibold text-left">Log in</button>
                        <button className="text-white font-semibold bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 rounded-xl hover:opacity-90">Post Internship</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

function HeroBadge({ icon, text, highlight }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
            {icon}{text}
            {highlight && <span className="ml-1 bg-indigo-500 text-white px-1.5 py-0.5 rounded-full text-xs">{highlight}</span>}
        </span>
    );
}

function StatPill({ value, label }) {
    return (
        <div className="flex flex-col items-center px-5 py-3 bg-white/60 backdrop-blur rounded-2xl border border-white/80 shadow-sm">
            <span className="text-xl font-bold text-indigo-600">{value}</span>
            <span className="text-xs text-slate-500 mt-0.5">{label}</span>
        </div>
    );
}

function InternshipCard({ data, onSave }) {
    const isNew = data.id % 3 === 0;
    return (
        <div className={`group relative flex flex-col bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden
      ${data.featured ? "border-indigo-200 shadow-md shadow-indigo-50" : "border-slate-100 shadow-sm"}`}>

            {/* Featured ribbon */}
            {data.featured && (
                <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                        <SparkleIcon /> Featured
                    </div>
                </div>
            )}

            <div className="p-5">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${data.logoColor}`}>
                        {data.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 text-sm leading-snug truncate group-hover:text-indigo-600 transition-colors">
                            {data.role}
                        </h3>
                        <p className="text-slate-500 text-xs mt-0.5">{data.company}</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); onSave(data.id); }}
                        className="flex-shrink-0 p-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                        <BookmarkIcon saved={data.saved} />
                    </button>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{data.desc}</p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-4">
                    <span className="flex items-center gap-1 text-xs text-slate-500"><LocationIcon />{data.location}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><ClockIcon />{data.duration}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><BriefcaseIcon />{data.mode}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {data.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">{t}</span>
                    ))}
                    {isNew && <span className="px-2 py-0.5 rounded-md bg-green-50 text-green-600 text-xs font-medium border border-green-100">New</span>}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                    <div>
                        <p className="text-indigo-600 font-bold text-sm">{data.stipend}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= Math.floor(data.rating)} />)}
                            </div>
                            <span className="text-xs text-slate-400">({data.reviews})</span>
                        </div>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 px-3.5 py-2 rounded-xl hover:opacity-90 transition shadow-sm shadow-indigo-200">
                        Apply <ArrowRightIcon />
                    </button>
                </div>
            </div>

            {/* Deadline bar */}
            <div className="bg-slate-50 px-5 py-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-400">Deadline</span>
                <span className="text-xs font-medium text-slate-600">{data.deadline}</span>
            </div>
        </div>
    );
}

function SectionHeader({ icon, label, badge, color }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
            <div>
                <h2 className="text-xl font-bold text-slate-800">{label}</h2>
            </div>
            {badge && (
                <span className="ml-2 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold border border-indigo-100">
                    {badge}
                </span>
            )}
        </div>
    );
}

function FilterBar({ search, setSearch, domain, setDomain, mode, setMode, count }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><SearchIcon /></span>
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search roles, companies, skills…"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                </div>

                {/* Domain select */}
                <div className="relative">
                    <select
                        value={domain}
                        onChange={e => setDomain(e.target.value)}
                        className="appearance-none pl-3 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer"
                    >
                        {DOMAINS.map(d => <option key={d}>{d}</option>)}
                    </select>
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"><ChevronDownIcon /></span>
                </div>

                {/* Mode select */}
                <div className="relative">
                    <select
                        value={mode}
                        onChange={e => setMode(e.target.value)}
                        className="appearance-none pl-3 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer"
                    >
                        {MODES.map(m => <option key={m}>{m}</option>)}
                    </select>
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"><ChevronDownIcon /></span>
                </div>
            </div>

            {/* Count row */}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-50">
                <FilterIcon />
                <span className="text-xs text-slate-500">
                    Showing <span className="font-semibold text-indigo-600">{count}</span> opportunities
                </span>
            </div>
        </div>
    );
}

function SummerBanner() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 p-6 mb-8 text-white shadow-lg">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-6 right-20 w-24 h-24 rounded-full bg-white/10" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <SunIcon />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/80">Summer 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Summer Internships are Live 🎉</h3>
                    <p className="text-white/80 text-sm max-w-md">Top companies have opened applications for summer cohorts. Deadlines are early — apply before the rush.</p>
                </div>
                <button className="flex-shrink-0 bg-white text-orange-500 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-50 transition shadow-sm flex items-center gap-2">
                    View Summer Roles <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
}

function CompanyLogoStrip() {
    const companies = [
        { name: "Google", color: "bg-blue-100 text-blue-700" },
        { name: "Stripe", color: "bg-violet-100 text-violet-700" },
        { name: "Figma", color: "bg-pink-100 text-pink-700" },
        { name: "Notion", color: "bg-slate-100 text-slate-700" },
        { name: "Vercel", color: "bg-gray-100 text-gray-700" },
        { name: "Databricks", color: "bg-orange-100 text-orange-700" },
        { name: "Anthropic", color: "bg-amber-100 text-amber-700" },
        { name: "Linear", color: "bg-indigo-100 text-indigo-700" },
    ];
    return (
        <div className="mb-10">
            <p className="text-xs text-center text-slate-400 font-medium uppercase tracking-widest mb-4">Top companies hiring interns</p>
            <div className="flex flex-wrap justify-center gap-2">
                {companies.map(c => (
                    <span key={c.name} className={`px-4 py-2 rounded-xl text-xs font-semibold border border-transparent ${c.color} hover:scale-105 transition-transform cursor-pointer`}>
                        {c.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

function CTABanner() {
    return (
        <div className="relative overflow-hidden rounded-3xl mt-16 mb-8 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white text-center px-6 py-14 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold mb-4 border border-white/20">
                    <SparkleIcon /> For Companies
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Hire tomorrow's talent, today.</h2>
                <p className="text-indigo-200 text-sm mb-7 leading-relaxed">
                    Post your internship to thousands of motivated students actively looking for their next opportunity. Free to start.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-indigo-50 transition shadow-md">
                        Post a Role — It's Free
                    </button>
                    <button className="bg-white/15 border border-white/25 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/25 transition">
                        View Pricing
                    </button>
                </div>
            </div>
        </div>
    );
}

const faqs = [
    {
        question: "Who can apply for this program?",
        answer:
            "Any college student currently enrolled in a recognized institution can apply. No prior technical experience is required for beginner-level tracks.",
    },
    {
        question: "What is the schedule for the 15-day program?",
        answer:
            "The program includes daily live sessions, practical assignments, project-based learning activities, and mentorship support.",
    },
    {
        question: "Is there a fee for this internship program?",
        answer:
            "Yes, a nominal registration fee may apply depending on the selected track and learning resources provided.",
    },
    {
        question: "Will I get a certificate after completion?",
        answer:
            "Yes, all eligible participants who complete the program requirements will receive a verified certificate.",
    },
    {
        question: "What if I miss a session?",
        answer:
            "No worries. Recorded sessions and study materials will be available so you can catch up anytime.",
    },
    {
        question: "Is placement guaranteed after the program?",
        answer:
            "While placement is not guaranteed, outstanding performers may receive interview and internship opportunities.",
    },
]

// ─── Main Page ──────────────────────────────────────────────────────────────


export default function Internship() {
    const [cards, setCards] = useState(INTERNSHIPS);
    const [search, setSearch] = useState("");
    const [domain, setDomain] = useState("All");
    const [mode, setMode] = useState("All");
    const [activeTab, setActiveTab] = useState("all"); // "all" | "internship" | "summer"

    const toggleSave = (id) => {
        setCards(c => c.map(x => x.id === id ? { ...x, saved: !x.saved } : x));
    };

    const filtered = cards.filter(c => {
        const q = search.toLowerCase();
        const matchSearch = !q || c.role.toLowerCase().includes(q) || c.company.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q));
        const matchDomain = domain === "All" || c.domain === domain;
        const matchMode = mode === "All" || c.mode === mode;
        const matchTab = activeTab === "all" || c.type === activeTab;
        return matchSearch && matchDomain && matchMode && matchTab;
    });

    const internships = filtered.filter(c => c.type === "internship");
    const summers = filtered.filter(c => c.type === "summer");

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
                {/* <NavBar /> */}

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

                    {/* ── Hero ── */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center gap-2 mb-5 flex-wrap">
                            <HeroBadge icon={<SparkleIcon />} text="2025 Intern Season" highlight="Open" />
                            <HeroBadge icon={<SunIcon />} text="Summer cohorts live" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
                            Launch your career with<br />
                            <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">the right internship.</span>
                        </h1>
                        <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                            Curated internships and summer programs at fast-growing startups and top companies. Apply once, get noticed.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            <StatPill value="1,200+" label="Open Roles" />
                            <StatPill value="340+" label="Companies" />
                            <StatPill value="92%" label="Offer Rate" />
                            <StatPill value="Free" label="Always" />
                        </div>

                        <CompanyLogoStrip />
                    </div>

                    {/* Summer Banner */}
                    <SummerBanner />

                    {/* Filter Bar */}
                    <FilterBar
                        search={search} setSearch={setSearch}
                        domain={domain} setDomain={setDomain}
                        mode={mode} setMode={setMode}
                        count={filtered.length}
                    />

                    {/* Tab switcher */}
                    <div className="flex gap-2 mb-8 flex-wrap">
                        {[
                            { key: "all", label: "All Opportunities" },
                            { key: "internship", label: "Internships" },
                            { key: "summer", label: "Summer Internships" },
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.key
                                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-200"
                                    : "bg-white text-slate-500 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* ── Internships section ── */}
                    {(activeTab === "all" || activeTab === "internship") && internships.length > 0 && (
                        <section className="mb-12">
                            <SectionHeader
                                icon={<BriefcaseIcon />}
                                label="Internships"
                                badge={`${internships.length} open`}
                                color="bg-indigo-100 text-indigo-600"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {internships.map(c => <InternshipCard key={c.id} data={c} onSave={toggleSave} />)}
                            </div>
                        </section>
                    )}

                    {/* ── Summer Internships section ── */}
                    {(activeTab === "all" || activeTab === "summer") && summers.length > 0 && (
                        <section className="mb-12">
                            {/* Summer section header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                                    <SunIcon />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800">Summer Internships</h2>
                                </div>
                                <span className="ml-2 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold border border-amber-100">
                                    {summers.length} open
                                </span>
                                <span className="ml-1 px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold border border-orange-100 flex items-center gap-1">
                                    <SparkleIcon /> Closing soon
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {summers.map(c => <InternshipCard key={c.id} data={c} onSave={toggleSave} />)}
                            </div>
                        </section>
                    )}

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="text-center py-24">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                                <SearchIcon />
                            </div>
                            <h3 className="text-slate-700 font-semibold text-lg mb-2">No results found</h3>
                            <p className="text-slate-400 text-sm mb-5">Try adjusting your search or clearing the filters.</p>
                            <button
                                onClick={() => { setSearch(""); setDomain("All"); setMode("All"); setActiveTab("all"); }}
                                className="text-sm font-semibold text-indigo-600 border border-indigo-200 px-4 py-2 rounded-xl hover:bg-indigo-50 transition"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* CTA Banner */}
                    <CTABanner />

                    {/* Footer note */}
                    <p className="text-center text-xs text-slate-400 mt-6">
                        © 2025 Internly · All listings verified · <button className="underline hover:text-indigo-500 transition-colors">Privacy</button> · <button className="underline hover:text-indigo-500 transition-colors">Terms</button>
                    </p>
                </main>
            </div>

            <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold border border-indigo-100">
                            ✨ WHY THIS PROGRAM
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Everything you need to go from{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                                classroom to career
                            </span>
                        </h2>

                        <p className="mt-5 text-lg text-slate-600">
                            A fast-tracked, mentor-led experience built for ambitious students.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">

                        {/* Card 1 */}
                        <div className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                            <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl mb-6">
                                🚀
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                15 Days Intensive
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                A focused and fast-paced learning experience designed to maximize growth.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl mb-6">
                                👨‍💻
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Industry Mentors
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Learn directly from experienced professionals working in top companies.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mb-6">
                                💻
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Hands-On Projects
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Build real-world projects that strengthen your portfolio and resume.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                            <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6">
                                🏆
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Certificate
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Earn an industry-recognized certificate to showcase your skills.
                            </p>
                        </div>

                    </div>

                    {/* Extra Feature Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

                        <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
                            <h4 className="font-bold text-slate-900">Resume Review</h4>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
                            <h4 className="font-bold text-slate-900">Mock Interviews</h4>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
                            <h4 className="font-bold text-slate-900">Placement Support</h4>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
                            <h4 className="font-bold text-slate-900">Community Access</h4>
                        </div>

                    </div>

                </div>
            </section>

            <section className="w-full py-20 bg-white">
                <div className="w-full px-4 sm:px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 text-orange-600 border border-orange-100 text-sm font-semibold">
                                ✨ BENEFITS
                            </span>

                            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                                This isn't just training.
                                <span className="block bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                                    It's a launchpad.
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                                Designed by industry experts who know exactly what top companies
                                look for in fresh graduates. Learn practical skills that matter.
                            </p>

                            <button className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                                Apply Now →
                            </button>
                        </div>

                        {/* Right Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                                    🚀
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    Industry-Ready Skills
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    Bridge the gap between academic learning and real-world job requirements.
                                </p>
                            </div>

                            <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl">
                                    📈
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    Career Acceleration
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    Fast-track your career with placement assistance and networking.
                                </p>
                            </div>

                            <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-white text-2xl">
                                    🎯
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    Placement Support
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    Resume reviews, mock interviews and hiring partner referrals.
                                </p>
                            </div>

                            <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl">
                                    🤝
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    Peer Network
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    Join a community of ambitious students and industry mentors.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Badge */}
                    <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 font-semibold text-sm">
                            ✅ ELIGIBILITY
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="text-center mt-6 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                            Who can{" "}
                            <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                                apply?
                            </span>
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg">
                            Simple eligibility criteria to join the program.
                        </p>
                    </div>

                    {/* Eligibility Cards */}
                    <div className="space-y-5">

                        {[
                            "Currently enrolled in a college/university (any year, any branch)",
                            "Strong desire to learn and apply new concepts",
                            "Commitment to attend all program sessions",
                            "Basic understanding of computers and the internet",
                            "Enthusiasm to build a career in technology and innovation",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">
                                        ✅
                                    </div>

                                    <p className="text-slate-800 font-medium text-base md:text-lg">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
                            <h3 className="text-2xl font-bold text-emerald-600">15 Days</h3>
                            <p className="text-slate-600 mt-1">Intensive Learning</p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
                            <h3 className="text-2xl font-bold text-emerald-600">100%</h3>
                            <p className="text-slate-600 mt-1">Practical Approach</p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
                            <h3 className="text-2xl font-bold text-emerald-600">Live</h3>
                            <p className="text-slate-600 mt-1">Mentor Support</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">

                {/* Background Blur Effects */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold shadow-sm">
                            💬 FAQ
                        </span>

                        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Got <span className="text-blue-600">Questions?</span>
                        </h2>

                        <p className="mt-5 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Find answers to the most commonly asked questions about our
                            internship programs, certificates, schedules, and career
                            opportunities.
                        </p>
                    </div>

                    {/* FAQ Cards */}
                    <div className="space-y-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`group overflow-hidden rounded-3xl border bg-white/80 backdrop-blur-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
              ${openIndex === index
                                        ? "border-blue-200 shadow-xl shadow-blue-100"
                                        : "border-gray-100 shadow-sm hover:border-blue-200"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left px-6 md:px-8 py-6"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>

                                    <div
                                        className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                  ${openIndex === index
                                                ? "bg-blue-600 text-white rotate-180"
                                                : "bg-blue-50 text-blue-600"
                                            }`}
                                    >
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                {/* Smooth Accordion */}
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed">
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
