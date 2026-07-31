"use client";

import { motion, type Easing } from "framer-motion";
import Image from "next/image";

const EASE_OUT: Easing = "easeOut";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  }),
};

const lines = [
  "Junior at the University of Michigan, studying Data Science.",
  "Right now I'm on the Amazon Ads team in Seattle, working on retrieval systems and internal tooling.",
  "I've also built a few things on the side — a study spot finder for Ann Arbor, a court tracker for tennis and pickleball, and a portfolio model from a stats class that got a little out of hand.",
  "Played competitive tennis growing up, which is why I started Serve To Serve Academy.",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full grid md:grid-cols-[1fr_300px] gap-14 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className="eyebrow mb-5"
          >
            Ann Arbor, MI
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="font-[family-name:var(--font-fraunces)] text-5xl sm:text-6xl font-medium text-[#1B2130] leading-[1.05] tracking-tight mb-10"
          >
            Hi, I&apos;m Aadi.
          </motion.h1>

          <div className="space-y-3 mb-10 max-w-2xl">
            {lines.map((line, i) => (
              <motion.p
                key={line}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.25 + i * 0.08}
                className="text-[#545F72] text-lg leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[#2C5AA0] text-white text-sm font-medium rounded-md tracking-wide hover:bg-[#1F4278] transition-colors duration-200"
            >
              View my work
            </a>
            <a
              href="mailto:ahuria@umich.edu"
              className="px-6 py-3 border border-[#C7CFDC] text-[#1B2130] text-sm font-medium rounded-md tracking-wide hover:border-[#2C5AA0] hover:text-[#2C5AA0] transition-colors duration-200"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.75}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/aadihuria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#545F72] hover:text-[#2C5AA0] transition-colors text-sm group"
            >
              <GithubIcon />
              <span className="group-hover:underline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aadih"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#545F72] hover:text-[#2C5AA0] transition-colors text-sm group"
            >
              <LinkedinIcon />
              <span className="group-hover:underline">LinkedIn</span>
            </a>
            <a
              href="mailto:ahuria@umich.edu"
              className="flex items-center gap-2 text-[#545F72] hover:text-[#2C5AA0] transition-colors text-sm group"
            >
              <EmailIcon />
              <span className="group-hover:underline">Email</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="relative w-full aspect-[3/4] max-w-[300px] mx-auto md:mx-0 rounded-xl overflow-hidden border border-[#E0E5EE] shadow-[0_16px_32px_-20px_rgba(27,33,48,0.3)]"
        >
          <Image
            src="/profile.jpg"
            alt="Aadi Huria"
            fill
            className="object-cover"
            sizes="300px"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[#8993A6] text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-[#C7CFDC]" />
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
