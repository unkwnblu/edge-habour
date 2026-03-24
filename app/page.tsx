"use client";

import { useState } from "react";
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

// ── Component ──────────────────────────────────────────────

export default function WaitlistPage() {
  const [userType, setUserType] = useState<UserType>("employer");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
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
            className="w-8 h-8 rounded-[6px] bg-brand flex items-center justify-center shrink-0 shadow-sm"
            variants={{
              rest: { rotate: 0, scale: 1 },
              hover: { rotate: 7, scale: 1.08 },
            }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
          >
            <span className="text-white text-[10px] font-black tracking-widest leading-none">
              EH
            </span>
          </motion.div>
          <motion.span
            className="text-sm font-semibold tracking-tight text-gray-900"
            variants={{
              rest: { x: 0 },
              hover: { x: 2 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            Edge Harbour
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
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-200"
                    whileFocus={{ scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />

                  {/* CTA button */}
                  <motion.button
                    type="submit"
                    className="w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-white cursor-pointer"
                    whileHover={{
                      scale: 1.025,
                      boxShadow: "0 10px 36px rgba(29,78,216,0.38)",
                    }}
                    whileTap={{ scale: 0.975 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    <motion.span
                      initial={{ opacity: 1 }}
                      className="inline-flex items-center gap-2"
                    >
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

      {/* ── Industry sector tags ── */}
      <motion.section
        className="relative z-10 flex justify-center gap-3 flex-wrap px-6 pb-20"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease }}
      >
        {["Healthcare", "Hospitality", "Customer Service", "Data"].map(
          (sector, i) => (
            <motion.span
              key={sector}
              className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium text-gray-400 tracking-wide cursor-default select-none hover:text-brand hover:border-brand/40 hover:bg-brand/[0.04] transition-colors duration-200"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 + i * 0.07 }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              {sector}
            </motion.span>
          )
        )}
      </motion.section>

      {/* ── Footer ── */}
      <motion.footer
        className="relative z-10 px-6 py-7 sm:px-12 lg:px-16 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400 text-center sm:text-left leading-relaxed">
            Edge Harbour Recruitment Company Ltd &middot; Registered in England
            &amp; Wales
            <br className="hidden sm:block" />
            5, Brayford Square, London, England, E1 0SG
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
