"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-6 border-t border-[#E0E5EE]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#2C5AA0]" />
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl font-medium text-[#1B2130]">Let&apos;s talk</h2>
        </div>

        <p className="text-[#545F72] text-lg max-w-xl leading-relaxed mb-10">
          I&apos;m always open to interesting problems, internship opportunities, or a good tennis match.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:ahuria@umich.edu"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C5AA0] text-white text-sm font-medium rounded-md hover:bg-[#1F4278] transition-all duration-200 mb-12 group"
        >
          <span>ahuria@umich.edu</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-6 mb-16">
          <a
            href="https://github.com/aadihuria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#545F72] hover:text-[#2C5AA0] transition-colors text-sm"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aadih"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#545F72] hover:text-[#2C5AA0] transition-colors text-sm"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E0E5EE] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-plex-mono)] text-[#8993A6] text-xs">
            © 2026 Aadi Huria
          </p>
          <p className="font-[family-name:var(--font-plex-mono)] text-[#8993A6] text-xs">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
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
