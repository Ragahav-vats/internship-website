import React from 'react'
import { useState } from "react";

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908C16.658 14.252 17.64 11.944 17.64 9.2z" fill="#4285F4" />
        <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
        <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
);

const LockIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const ClockIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
    </svg>
);

const EyeOnIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

function Toast({ visible, message }) {
    return (
        <div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl text-white text-sm font-medium shadow-2xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                }`}
            style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
        >
            <CheckIcon />
            {message}
        </div>
    );
}

function Orb({ className }) {
    return (
        <div
            className={`absolute rounded-full pointer-events-none ${className}`}
            style={{ filter: "blur(80px)" }}
        />
    );
}

export default function Login() {
    const [showPwd, setShowPwd] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: "" });

    const showToast = (message) => {
        setToast({ visible: true, message });
        setTimeout(() => setToast({ visible: false, message: "" }), 2800);
    };

    const handleSignIn = () => {
        if (loading) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showToast("Signed in successfully!");
        }, 1600);
    };

    const handleGoogle = () => showToast("Connecting to Google…");
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-violet-100 to-sky-100 px-4 py-10">

                {/* Background orbs */}
                <Orb className="w-96 h-96 bg-indigo-200 -top-40 -left-24 animate-pulse" />
                <Orb className="w-80 h-80 bg-violet-200 -bottom-20 -right-16 animate-pulse" />
                <Orb className="w-56 h-56 bg-sky-200 top-1/3 right-1/4 animate-pulse" />

                {/* Card */}
                <div
                    className="relative z-10 w-full max-w-4xl flex rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                        background: "rgba(255,255,255,0.78)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.65)",
                    }}
                >
                    {/* ── Left brand panel ── */}
                    <div
                        className="hidden md:flex w-5/12 flex-col justify-between p-10 relative overflow-hidden"
                        style={{ background: "linear-gradient(155deg,#6366f1 0%,#8b5cf6 60%,#a78bfa 100%)" }}
                    >
                        {/* Decorative rings */}
                        <div className="absolute -top-24 -right-28 w-96 h-96 rounded-full border border-white/20" />
                        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border border-white/20" />
                        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/20 opacity-40" />

                        {/* Logo */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-10">
                                <div className="w-8 h-8 rounded-xl bg-white/25 flex items-center justify-center">
                                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse inline-block" />
                                </div>
                                <span className="text-white font-semibold text-lg tracking-tight">Luminary</span>
                            </div>

                            <h2 className="text-white font-bold leading-tight mb-4 text-4xl">
                                Everything you<br />need, unified.
                            </h2>
                            <p className="text-indigo-200 text-sm leading-relaxed max-w-xs">
                                One workspace for your team's projects, documents, and conversations — always in sync.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="relative z-10">
                            <div className="flex gap-6 mb-6">
                                {[
                                    { val: "40k+", label: "Teams worldwide" },
                                    { val: "99.9%", label: "Uptime SLA" },
                                    { val: "SOC2", label: "Certified" },
                                ].map((s) => (
                                    <div key={s.val}>
                                        <p className="text-white font-bold text-xl">{s.val}</p>
                                        <p className="text-indigo-300 text-xs">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Avatar stack */}
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[
                                        { letter: "A", bg: "bg-amber-400" },
                                        { letter: "M", bg: "bg-emerald-500" },
                                        { letter: "S", bg: "bg-rose-500" },
                                        { letter: "R", bg: "bg-blue-500" },
                                    ].map(({ letter, bg }) => (
                                        <div
                                            key={letter}
                                            className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white ${bg}`}
                                        >
                                            {letter}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-indigo-200 text-xs">Join thousands of happy users</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right login panel ── */}
                    <div className="flex-1 flex flex-col justify-center px-8 py-10 sm:px-12">

                        {/* Mobile logo */}
                        <div className="flex items-center gap-2 mb-6 md:hidden">
                            <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                                <span className="w-2 h-2 bg-white rounded-full inline-block" />
                            </div>
                            <span className="font-semibold text-slate-800 text-base">Luminary</span>
                        </div>

                        {/* Header */}
                        <h1 className="text-slate-800 font-bold text-3xl mb-1">Welcome back</h1>
                        <p className="text-slate-500 text-sm mb-7">Sign in to continue to your workspace.</p>

                        {/* Google button */}
                        <button
                            onClick={handleGoogle}
                            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-2xl py-3 text-slate-700 font-medium text-sm mb-5 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                        >
                            <GoogleIcon />
                            Continue with Google
                        </button>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center mb-5">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <span className="relative bg-white px-3 text-xs text-slate-400">or sign in with email</span>
                        </div>

                        {/* Email field */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-slate-600 mb-1.5">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15"
                            />
                        </div>

                        {/* Password field */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="text-xs font-medium text-slate-600">Password</label>
                                <button className="text-xs font-medium text-indigo-500 hover:text-indigo-700 transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPwd ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPwd(!showPwd)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500 transition-colors"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPwd ? <EyeOffIcon /> : <EyeOnIcon />}
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center gap-2 mb-6">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="w-3.5 h-3.5 rounded accent-indigo-500 cursor-pointer"
                            />
                            <label htmlFor="remember" className="text-xs text-slate-500 cursor-pointer select-none">
                                Keep me signed in for 30 days
                            </label>
                        </div>

                        {/* Sign in button */}
                        <button
                            onClick={handleSignIn}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-80"
                            style={{
                                background: "linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)",
                                boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                            }}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" />
                                    </svg>
                                    Signing in…
                                </>
                            ) : (
                                <>
                                    Sign in
                                    <ArrowRightIcon />
                                </>
                            )}
                        </button>

                        {/* Sign up */}
                        <p className="text-center text-xs text-slate-500 mt-5">
                            New to Luminary?{" "}
                            <button className="font-semibold text-indigo-500 hover:text-indigo-700 transition-colors">
                                Create a free account →
                            </button>
                        </p>

                        {/* Trust badges */}
                        <div className="flex items-center justify-center gap-4 mt-6 pt-5 border-t border-slate-100">
                            {[
                                { icon: <LockIcon />, label: "256-bit TLS" },
                                { icon: <ShieldIcon />, label: "SOC 2 compliant" },
                                { icon: <ClockIcon />, label: "99.9% uptime" },
                            ].map(({ icon, label }) => (
                                <div key={label} className="flex items-center gap-1.5 text-slate-400">
                                    {icon}
                                    <span className="text-xs">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Toast */}
                <Toast visible={toast.visible} message={toast.message} />
            </div>
        </>
    )
}
