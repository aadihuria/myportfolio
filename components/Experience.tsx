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

const experiences = [
  {
    company: "Amazon",
    role: "SDE Intern",
    dates: "Jun – Aug 2026",
    location: "Seattle, WA",
    tag: "Upcoming",
    bullets: ["Incoming SDE Intern on the Amazon Ads team."],
  },
  {
    company: "SafeBeat Rx",
    role: "Data Analyst Intern",
    dates: "May – Aug 2025",
    location: "Remote",
    tag: null,
    bullets: [
      "Analyzed 1,000+ ECG datasets in R to reduce sensor configuration costs while maintaining diagnostic accuracy.",
      "Used SQL to mine and clean 100+ ECG files into machine-readable format, saving 300+ manual hours.",
      "Developed PyTorch models on heart-rate variability data achieving >95% classification accuracy.",
      "Built Tableau dashboards for ECG analytics reviewed weekly by founders and CTO.",
    ],
  },
  {
    company: "PwC",
    role: "Consulting Extern",
    dates: "Jun – Aug 2025",
    location: "Remote",
    tag: null,
    bullets: [
      "Screened 100+ companies to identify 15+ high-fit corporate partners for strategic initiatives.",
      "Unlocked $50K+ in funding potential through structured dataset analysis and partnership modeling.",
    ],
  },
  {
    company: "Enactus Consulting Club, UMich",
    role: "Lead Business Analyst",
    dates: "Jan 2025 – Present",
    location: "Ann Arbor, MI",
    tag: null,
    bullets: [
      "Analyzed 5,000+ order records using SQL and Python to surface 2 key profit drivers.",
      "Projected 18% increase in direct orders via incentive restructuring and menu redesign.",
      "Built client-retained Power BI dashboard for executive stakeholder presentations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#161B22]/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#00E5FF]" />
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#E2E8F0]">Experience</h2>
          </div>
        </FadeUp>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#00E5FF] via-[#30363D] to-transparent hidden md:block" />

          <div className="space-y-10 md:pl-10">
            {experiences.map((exp, i) => (
              <FadeUp key={exp.company} delay={i * 0.1}>
                <div className="relative glass-card rounded-lg p-6 transition-all duration-300 group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-7 w-3 h-3 rounded-full bg-[#0D1117] border-2 border-[#00E5FF] hidden md:block group-hover:bg-[#00E5FF] transition-colors duration-200" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-mono text-lg font-bold text-[#E2E8F0]">{exp.company}</h3>
                        {exp.tag && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                            {exp.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-[#00E5FF] text-sm font-mono mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[#94A3B8] text-xs font-mono">{exp.dates}</p>
                      <p className="text-[#94A3B8] text-xs font-mono">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[#94A3B8] text-sm leading-relaxed">
                        <span className="text-[#00E5FF] mt-0 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
