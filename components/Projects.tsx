"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    name: "Ann Arbor Study Spot & Tribe Finder",
    date: "March 2026",
    stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Twilio", "Pusher", "OpenAI API"],
    description:
      "Full-stack campus app with study spot reviews, saved lists, user profiles, real-time messaging, friend requests, study groups, and a live leaderboard.",
    why: "Ann Arbor has great study spots but no good way to find them or coordinate with friends. I wanted something students would use — with messaging, real-time features, and a leaderboard to make it fun.",
    github: "https://github.com/aadihuria",
    demo: "https://spotly8.vercel.app",
  },
  {
    name: "The Net Finder",
    date: "December 2025",
    stack: ["Next.js", "Python", "PostgreSQL", "Mapbox GL JS", "scikit-learn"],
    description:
      "Real-time court availability tracker for 100+ tennis and pickleball courts across SE Michigan. Users submit occupancy data that reflects live on an interactive Mapbox map.",
    why: "I play tennis and pickleball a lot around SE Michigan and kept showing up to full courts. Built this for anyone who's had the same problem — real-time court availability with filters for surface type, lighting, and public/private, optimized for mobile so you can check it on the way there.",    github: "https://github.com/aadihuria",
    demo: "https://thenetfinder.vercel.app",
  },
  {
    name: "Black-Litterman Portfolio Optimization Model",
    date: "September 2025",
    stack: ["Python", "cvxpy", "LangChain", "GPT-4o", "Streamlit"],
    description:
      "From-scratch Black-Litterman model with reverse optimization, Bayesian posterior updates, and mean-variance optimization. Backtested against market-cap and MVO benchmarks. Deployed as an interactive Streamlit dashboard.",
    why: "I was curious whether systematic Bayesian portfolio construction could actually beat naive allocation. This was my way of taking the theory from my Bayesian Data Analysis course and seeing if it held up on real data.",
    github: "https://github.com/aadihuria",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-[#00E5FF]" />
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#E2E8F0]">Projects</h2>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeUp key={project.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="font-mono text-[#E2E8F0] text-xs mb-1">{project.date}</p>
                  <h3 className="font-mono text-base font-bold text-[#E2E8F0] leading-snug group-hover:text-[#00E5FF] transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 shrink-0 mt-0.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-[#00E5FF]/30 text-[#00E5FF] bg-[#00E5FF]/5 hover:bg-[#00E5FF]/15 transition-colors duration-200"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E2E8F0] hover:text-[#00E5FF] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="skill-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#E2E8F0] text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Why */}
              <div className="border-t border-[#30363D] pt-4 mt-auto">
                <p className="font-mono text-[#00E5FF] text-xs mb-2">// why I built it</p>
                <p className="text-[#E2E8F0] text-sm leading-relaxed italic">
                  {project.why}
                </p>
              </div>
            </motion.div>
          </FadeUp>
        ))}

        {/* Coming soon placeholder for symmetry */}
        <FadeUp delay={0.3}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-lg p-6 h-full flex flex-col items-center justify-center border-dashed opacity-50 hover:opacity-70 transition-opacity"
            style={{ minHeight: "200px" }}
          >
            <p className="font-mono text-[#E2E8F0] text-sm">more coming soon</p>
            <p className="font-mono text-[#00E5FF] text-xs mt-2">// always building</p>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
