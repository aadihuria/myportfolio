"use client";

import { useState, useEffect } from "react";
import { motion, type Easing } from "framer-motion";

const roles = [
  "Data Science @ Michigan",
  "Amazon SDE Intern",
  "Builder",
  "Tennis Player",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <span className="text-[#00E5FF]">
      {displayed}
      <span className="cursor-blink text-[#00E5FF]">|</span>
    </span>
  );
}

const EASE_OUT: Easing = "easeOut";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#00E5FF]/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#00E5FF]/20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Pre-label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold text-[#E2E8F0] leading-none tracking-tight mb-2"
        >
          Aadi Huria
          <span className="cursor-blink text-[#00E5FF] ml-2">_</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-xl sm:text-2xl md:text-3xl font-mono mt-4 mb-6 h-10"
        >
          <TypewriterText />
        </motion.div>

        {/* One-liner */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="text-[#E2E8F0] text-lg sm:text-xl max-w-2xl leading-relaxed mb-3"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Rising Junior at The University of Michigan studying Data Science 
        </motion.p>

        {/* Location */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="text-[#E2E8F0] text-sm font-mono mb-10"
        >
          📍 Ann Arbor, MI
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="flex flex-wrap gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-[#00E5FF] text-[#0D1117] font-mono text-sm font-bold rounded tracking-wide hover:bg-[#38BDF8] transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="mailto:ahuria@umich.edu"
            className="px-6 py-3 border border-[#00E5FF] text-[#00E5FF] font-mono text-sm rounded tracking-wide hover:bg-[#00E5FF]/10 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/aadihuria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#E2E8F0] hover:text-[#00E5FF] transition-colors text-sm font-mono group"
          >
            <GithubIcon />
            <span className="group-hover:underline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/aadih"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#E2E8F0] hover:text-[#00E5FF] transition-colors text-sm font-mono group"
          >
            <LinkedinIcon />
            <span className="group-hover:underline">LinkedIn</span>
          </a>
          <a
            href="mailto:ahuria@umich.edu"
            className="flex items-center gap-2 text-[#E2E8F0] hover:text-[#00E5FF] transition-colors text-sm font-mono group"
          >
            <EmailIcon />
            <span className="group-hover:underline">Email</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#E2E8F0] text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#00E5FF] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
