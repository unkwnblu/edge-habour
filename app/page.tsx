"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";

const ease = cubicBezier(0.22, 1, 0.36, 1);

type UserType = "employer" | "candidate";

// ── Variants ──────────────────────────────────────────────

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 22, rotateX: 80 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease },
  },
};

// ── Background orbs config ─────────────────────────────────

const orbs = [
  {
    size: 640,
    style: { left: "-8%", top: "5%" },
    color: "rgba(29,78,216,0.07)",
    duration: 22,
    delay: 0,
  },
  {
    size: 520,
    style: { right: "-5%", top: "30%" },
    color: "rgba(99,102,241,0.07)",
    duration: 28,
    delay: 4,
  },
  {
    size: 440,
    style: { left: "35%", top: "60%" },
    color: "rgba(56,189,248,0.06)",
    duration: 20,
    delay: 8,
  },
  {
    size: 360,
    style: { right: "25%", top: "-10%" },
    color: "rgba(29,78,216,0.05)",
    duration: 25,
    delay: 2,
  },
];

const headline = ["The", "New", "Standard", "in", "Compliant", "Recruitment."];

// ── Sector icons ───────────────────────────────────────────

function HealthIcon({ size = 22, color = "#EF4444" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function HospitalityIcon({ size = 22, color = "#F59E0B" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" />
      <line x1="5" y1="21" x2="5" y2="10.85" />
      <line x1="19" y1="21" x2="19" y2="10.85" />
      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    </svg>
  );
}

function CustomerServiceIcon({ size = 22, color = "#10B981" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 13.5h5" />
    </svg>
  );
}

function DataIcon({ size = 22, color = "#6366F1" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

// ── Sector data ────────────────────────────────────────────

const sectors = [
  {
    Icon: HealthIcon,
    name: "Healthcare",
    desc: "Pre-vetted clinical and support staff with complete Right-to-Work documentation.",
    roles: ["Nurses", "HCAs", "Midwives", "Pharmacists"],
    badge: "DBS Checked",
    accent: "#EF4444",
    accentBg: "rgba(239,68,68,0.07)",
    accentPill: "rgba(239,68,68,0.08)",
    shadow: "rgba(239,68,68,0.12)",
  },
  {
    Icon: HospitalityIcon,
    name: "Hospitality",
    desc: "Front-of-house, kitchen, and senior management professionals ready from day one.",
    roles: ["Head Chefs", "GMs", "Sommeliers", "Events"],
    badge: "Same-week hire",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.07)",
    accentPill: "rgba(245,158,11,0.08)",
    shadow: "rgba(245,158,11,0.12)",
  },
  {
    Icon: CustomerServiceIcon,
    name: "Customer Service",
    desc: "Contact centre, CX, and retention specialists at every level of seniority.",
    roles: ["Agents", "Team Leads", "CX Managers", "Trainers"],
    badge: "Role-ready",
    accent: "#10B981",
    accentBg: "rgba(16,185,129,0.07)",
    accentPill: "rgba(16,185,129,0.08)",
    shadow: "rgba(16,185,129,0.12)",
  },
  {
    Icon: DataIcon,
    name: "Tech & Data",
    desc: "Analysts, engineers, and business intelligence professionals, fully compliance-checked.",
    roles: ["Analysts", "Engineers", "Scientists", "BI Devs"],
    badge: "Pre-vetted",
    accent: "#6366F1",
    accentBg: "rgba(99,102,241,0.07)",
    accentPill: "rgba(99,102,241,0.08)",
    shadow: "rgba(99,102,241,0.12)",
  },
];

// ── Scattered floating cards ──────────────────────────────

const floatingCards = [
  // Left-side scatters
  {
    kind: "badge" as const,
    label: "Right-to-Work Verified", accent: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    paths: ["M20 6L9 17l-5-5"],
    pos: { top: "11%", left: "1.5%" },
    enterX: -28, enterDelay: 1.55,
    floatY: -11, floatDuration: 4.2, floatDelay: 0,
  },
  {
    kind: "stat" as const,
    value: "500+", label: "UK Employers", accent: "#1D4ED8",
    pos: { top: "38%", left: "2%" },
    enterX: -28, enterDelay: 1.8,
    floatY: -8, floatDuration: 3.7, floatDelay: 0.6,
  },
  {
    kind: "badge" as const,
    label: "GDPR Compliant", accent: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
    paths: [
      "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z",
      "M7 11V7a5 5 0 0 1 10 0v4",
    ],
    pos: { top: "64%", left: "1.5%" },
    enterX: -28, enterDelay: 2.05,
    floatY: -10, floatDuration: 5.1, floatDelay: 1.3,
  },
  {
    kind: "stat" as const,
    value: "100+", label: "Roles Live", accent: "#EC4899",
    pos: { top: "84%", left: "3%" },
    enterX: -28, enterDelay: 2.3,
    floatY: -7, floatDuration: 4.0, floatDelay: 0.9,
  },
  // Right-side scatters
  {
    kind: "stat" as const,
    value: "2,400+", label: "Vetted Profiles", accent: "#F59E0B",
    pos: { top: "7%", right: "1.5%" },
    enterX: 28, enterDelay: 1.65,
    floatY: -12, floatDuration: 4.9, floatDelay: 0.2,
  },
  {
    kind: "badge" as const,
    label: "DBS Checked", accent: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)",
    paths: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
    pos: { top: "32%", right: "2%" },
    enterX: 28, enterDelay: 1.9,
    floatY: -9, floatDuration: 3.8, floatDelay: 0.8,
  },
  {
    kind: "stat" as const,
    value: "48hrs", label: "Avg. Time-to-Hire", accent: "#10B981",
    pos: { top: "57%", right: "1.5%" },
    enterX: 28, enterDelay: 2.15,
    floatY: -10, floatDuration: 4.5, floatDelay: 1.6,
  },
  {
    kind: "badge" as const,
    label: "Pre-vetted Talent", accent: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    paths: ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"],
    pos: { top: "80%", right: "2.5%" },
    enterX: 28, enterDelay: 2.4,
    floatY: -8, floatDuration: 3.5, floatDelay: 0.4,
  },
];

// ── Component ──────────────────────────────────────────────

export default function WaitlistPage() {
  const [userType, setUserType] = useState<UserType>("employer");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setFormError(null);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, type: userType }),
    });

    setLoading(false);

    if (!res.ok) {
      const { error } = await res.json();
      setFormError(error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col font-sans overflow-hidden">

      {/* ── Floating background orbs ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {!prefersReduced &&
          orbs.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                ...orb.style,
                width: orb.size,
                height: orb.size,
                background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              }}
              animate={{
                x: [0, 35, -20, 18, 0],
                y: [0, -45, 28, -18, 0],
                scale: [1, 1.08, 0.96, 1.04, 1],
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: orb.delay,
              }}
            />
          ))}

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1D4ED8 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Subtle top gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      </div>

      {/* ── Scattered floating cards (xl+) ── */}
      <div className="pointer-events-none absolute inset-0 hidden xl:block z-20" aria-hidden="true">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={card.pos as React.CSSProperties}
            initial={{ opacity: 0, x: card.enterX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: card.enterDelay, duration: 0.65, ease }}
          >
            <motion.div
              animate={{ y: !prefersReduced ? [0, card.floatY, 0] : 0 }}
              transition={
                !prefersReduced
                  ? { duration: card.floatDuration, repeat: Infinity, ease: "easeInOut", delay: card.floatDelay }
                  : {}
              }
            >
              {card.kind === "badge" ? (
                <div className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: card.bg }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={card.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.paths.map((d: string, j: number) => <path key={j} d={d} />)}
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 whitespace-nowrap">
                    {card.label}
                  </span>
                </div>
              ) : (
                <div className="bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)] text-center min-w-[88px]">
                  <p className="text-lg font-black leading-none mb-1" style={{ color: card.accent }}>
                    {card.value}
                  </p>
                  <p className="text-[10px] font-medium text-gray-400 leading-tight whitespace-nowrap">
                    {card.label}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Header ── */}
      <motion.header
        className="relative z-10 w-full px-6 py-6 sm:px-12 lg:px-16 flex items-center justify-between"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2.5 cursor-default select-none"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.08 },
            }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
          >
            <Image
              src="/eh-logo.svg"
              width={36}
              height={36}
              alt="Edge Harbour"
              priority
            />
          </motion.div>
          <motion.span
            className="text-xl font-black tracking-tight"
            variants={{
              rest: { x: 0 },
              hover: { x: 2 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            <span style={{ color: "#172B4D" }}>Edge</span>
            <span style={{ color: "#137FEC" }}>Harbour</span>
          </motion.span>
        </motion.div>

        {/* Contact link */}
        <motion.a
          href="mailto:hello@edgeharbour.co.uk"
          className="relative text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          Contact Us
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-gray-900 w-full"
            variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
            style={{ originX: 0 }}
            transition={{ duration: 0.22 }}
          />
        </motion.a>
      </motion.header>

      {/* ── Hero ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 sm:py-32 text-center">

        <motion.div
          className="flex flex-col items-center w-full"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Pill badge */}
          <motion.div variants={fadeUp}>
            <motion.div
              className="inline-flex items-center rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 mb-10 hover:bg-brand/10 hover:border-brand/50 transition-colors duration-200 cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <motion.span
                className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                ● Launching Soon in the UK
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Headline — word by word */}
          <motion.div variants={fadeUp} className="max-w-4xl mb-7">
            <h1
              className="font-black leading-[0.97] tracking-[-0.03em] text-gray-950 text-[clamp(2.6rem,8vw,6.25rem)]"
              style={{ perspective: 900 }}
            >
              <motion.span
                className="inline"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                initial="hidden"
                animate="show"
              >
                {headline.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={`inline-block mr-[0.2em] last:mr-0${
                      word === "Recruitment." ? " text-brand" : ""
                    }`}
                    whileHover={
                      !prefersReduced
                        ? { y: -4, transition: { type: "spring", stiffness: 500, damping: 20 } }
                        : {}
                    }
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed mb-14"
          >
            Hire pre-vetted, role-ready professionals faster. Edge Harbour is
            bringing complete Right-to-Work visibility and frictionless hiring
            to Healthcare, Hospitality, and beyond.
          </motion.p>

          {/* Form / Success */}
          <motion.div variants={fadeUp} className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.86, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 18,
                      delay: 0.05,
                    }}
                  >
                    <svg
                      className="w-7 h-7 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.div>
                  <motion.p
                    className="text-xl font-bold text-gray-900 tracking-tight"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 }}
                  >
                    You&apos;re on the list.
                  </motion.p>
                  <motion.p
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38 }}
                  >
                    We&apos;ll be in touch before we launch.
                  </motion.p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center gap-3.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Sliding toggle */}
                  <div className="relative flex w-full rounded-full bg-gray-100 p-1">
                    {(["employer", "candidate"] as UserType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setUserType(type)}
                        className="relative flex-1 rounded-full py-2.5 text-sm font-semibold cursor-pointer z-10 transition-colors duration-200 select-none"
                        style={{
                          color: userType === type ? "#0a0a0a" : "#9ca3af",
                        }}
                      >
                        {/* Sliding white pill behind active button */}
                        {userType === type && (
                          <motion.span
                            layoutId="toggle-pill"
                            className="absolute inset-0 rounded-full bg-white shadow-sm"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          />
                        )}
                        <span className="relative z-10">
                          {type === "employer"
                            ? "I am an Employer"
                            : "I am a Candidate"}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Email input */}
                  <motion.input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setFormError(null); }}
                    placeholder="Enter your work email..."
                    className="w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-200"
                    whileFocus={{ scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />

                  {/* Inline error */}
                  <AnimatePresence>
                    {formError && (
                      <motion.p
                        className="text-xs text-red-500 text-center -mt-1"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                      >
                        {formError}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* CTA button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={!loading ? {
                      scale: 1.025,
                      boxShadow: "0 10px 36px rgba(29,78,216,0.38)",
                    } : {}}
                    whileTap={!loading ? { scale: 0.975 } : {}}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    <motion.span
                      initial={{ opacity: 1 }}
                      className="inline-flex items-center gap-2"
                    >
                      {loading ? "Joining…" : (
                        <>
                          Join the Exclusive Waitlist
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatDelay: 1,
                            }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </motion.span>
                  </motion.button>

                  {/* Micro-copy */}
                  <motion.p
                    className="text-xs text-gray-400 mt-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Join 100+ UK businesses and professionals already on the list.
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* ── Stats strip (mobile / tablet only) ── */}
      <div className="xl:hidden relative z-10 px-6 pb-10 sm:px-12">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className="shrink-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.07, duration: 0.5, ease }}
            >
              {card.kind === "badge" ? (
                <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: card.bg }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={card.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.paths.map((d: string, j: number) => <path key={j} d={d} />)}
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 whitespace-nowrap">
                    {card.label}
                  </span>
                </div>
              ) : (
                <div className="bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.07)] text-center min-w-[80px]">
                  <p className="text-base font-black leading-none mb-0.5" style={{ color: card.accent }}>
                    {card.value}
                  </p>
                  <p className="text-[10px] font-medium text-gray-400 leading-tight whitespace-nowrap">
                    {card.label}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Sector cards ── */}
      <section className="relative z-10 px-6 pb-28 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease }}
          >
            <p className="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-2.5">
              Built for four critical industries
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Wherever compliance matters most.
            </h2>
          </motion.div>

          {/* 2 × 2 → 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 cursor-default hover:border-transparent transition-colors duration-300"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 + i * 0.09, duration: 0.65, ease }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 24px 64px ${sector.shadow}`,
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                }}
              >
                {/* Large watermark icon in background */}
                <div
                  className="pointer-events-none absolute -bottom-3 -right-3 opacity-[0.055] transition-all duration-500 group-hover:opacity-[0.09] group-hover:scale-110 group-hover:-translate-y-1"
                >
                  <sector.Icon size={88} color={sector.accent} />
                </div>

                {/* Top-right compliance badge */}
                <div
                  className="absolute top-4 right-4 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase"
                  style={{ color: sector.accent, background: sector.accentBg }}
                >
                  {sector.badge}
                </div>

                {/* Icon container */}
                <motion.div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: sector.accentBg }}
                  whileHover={{
                    scale: 1.14,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 380, damping: 16 },
                  }}
                >
                  <sector.Icon size={21} color={sector.accent} />
                </motion.div>

                {/* Sector name */}
                <h3 className="text-sm font-bold text-gray-900 mb-1.5 tracking-tight">
                  {sector.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-gray-400 leading-relaxed mb-5">
                  {sector.desc}
                </p>

                {/* Role pills */}
                <div className="flex flex-wrap gap-1.5">
                  {sector.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: sector.accent, background: sector.accentPill }}
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Bottom accent bar — slides in on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
                  style={{ background: sector.accent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <motion.footer
        className="relative z-10 px-6 py-7 sm:px-12 lg:px-16 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400 text-center sm:text-left leading-relaxed">
            Edge Harbour Recruitment Company Ltd
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Business", href: "/terms" },
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                className="relative text-[11px] text-gray-400 hover:text-gray-700 transition-colors duration-200"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {label}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px bg-gray-500"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
