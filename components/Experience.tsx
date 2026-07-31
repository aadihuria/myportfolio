"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CompanyLogo from "./CompanyLogo";

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

const experiences = [
  {
    company: "Amazon",
    domain: "amazon.com",
    role: "Software Development Engineer Intern – Amazon Ads",
    dates: "Jun – Aug 2026",
    location: "Seattle, WA",
    tag: null,
    bullets: [
      "Achieved a ~30% reduction in development timeline by engineering a multi-source Retrieval-Augmented Generation (RAG) agentic system to validate product requirements against distributed package constraints and automate code reviews.",
      "Improved retrieval accuracy from 54% to 93% across 50+ service packages by designing a three-backend retrieval architecture on Amazon Bedrock utilizing deterministic fallback logic and confidence-score filtering.",
      "Building a team-wide Model Context Protocol (MCP) server in TypeScript to asynchronously mine, quality-gate, and deduplicate package constraints, creating a continuously self-improving knowledge base for the retrieval system.",
    ],
  },
  {
    company: "SafeBeat Rx",
    domain: "safebeatrx.com",
    role: "Data & Machine Learning Engineer Intern",
    dates: "May – Aug 2025",
    location: "Remote",
    tag: null,
    bullets: [
      "Reduced hardware sensor configuration cost by 30% while maintaining >95% diagnostic accuracy by training CNN models in PyTorch across 1,000+ ECG datasets to identify optimal hardware setup for heart failure prediction.",
      "Eliminated 300+ hours of manual preprocessing by engineering SQL queries to convert raw ECG datasets into machine-readable format; presented findings to the Founder and CTO via an interactive Tableau dashboard.",
    ],
  },
  {
    company: "PwC",
    domain: "pwc.com",
    role: "Consulting Extern – Nonprofit client seeking growth",
    dates: "Jun – Aug 2025",
    location: "Remote",
    tag: null,
    bullets: [
      "Identified 15+ high-fit corporate partners projected to bring $50K+ in funding and 20-25% mentor network expansion; created Python weighted scoring model that evaluated 100+ companies for mission alignment.",
    ],
  },
  {
    company: "Enactus Consulting Club, University of Michigan",
    domain: "enactus.org",
    role: "Data & Technology Lead – Restaurant client seeking profit improvement",
    dates: "Jan 2025 – Present",
    location: "Ann Arbor, MI",
    tag: null,
    bullets: [
      "Uncovered direct-order underperformance and menu inefficiencies as 2 profit erosion drivers across 5,000+ order records using a scikit-learn linear regression model.",
      "Designed direct-ordering incentives and side-item menu refresh to address diagnosed profit drivers, projecting 18% increase in direct in-house orders and equipping the client with a Power BI dashboard for ongoing performance monitoring.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-[#E0E5EE]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#2C5AA0]" />
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl font-medium text-[#1B2130]">Experience</h2>
          </div>
        </FadeUp>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <FadeUp key={exp.company} delay={i * 0.1}>
              <div className="card rounded-xl p-6">
                <div className="flex gap-4">
                  <CompanyLogo name={exp.company} domain={exp.domain} />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-medium text-[#1B2130]">{exp.company}</h3>
                          {exp.tag && (
                            <span className="pill">
                              {exp.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[#2C5AA0] text-sm mt-0.5">{exp.role}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[#8993A6] text-xs font-[family-name:var(--font-plex-mono)]">{exp.dates}</p>
                        <p className="text-[#8993A6] text-xs font-[family-name:var(--font-plex-mono)]">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[#3A4356] text-sm leading-relaxed">
                          <span className="text-[#2C5AA0] mt-0 shrink-0">–</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
