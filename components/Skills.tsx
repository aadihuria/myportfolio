"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiR, SiJavascript, SiTypescript, SiCplusplus, SiHtml5,
} from "react-icons/si";
import {
  SiPandas, SiNumpy, SiPytorch, SiTensorflow, SiStreamlit,
  SiReact, SiNextdotjs, SiPrisma, SiScikitlearn, SiLangchain,
} from "react-icons/si";
import {
  SiGit, SiLinux, SiPostgresql, SiSupabase,
  SiPusher, SiJupyter, SiVercel, SiTwilio, SiOpenai,
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";
import type { IconType } from "react-icons";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

const skillGroups: { category: string; label: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    label: "languages",
    skills: [
      { name: "Python",     Icon: SiPython,       color: "#3B82F6" },
      { name: "SQL",        Icon: FaDatabase,      color: "#E2E8F0" },
      { name: "R",          Icon: SiR,             color: "#276DC3" },
      { name: "C / C++",   Icon: SiCplusplus,     color: "#00599C" },
      { name: "JavaScript", Icon: SiJavascript,    color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript,    color: "#3178C6" },
      { name: "Java",       Icon: FaJava,          color: "#E76F00" },
      { name: "HTML / CSS", Icon: SiHtml5,         color: "#E34F26" },
      { name: "MATLAB",     Icon: TbMathFunction,  color: "#0076A8" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    label: "frameworks & libraries",
    skills: [
      { name: "Pandas",     Icon: SiPandas,     color: "#150458" },
      { name: "NumPy",      Icon: SiNumpy,      color: "#4DABCF" },
      { name: "PyTorch",    Icon: SiPytorch,    color: "#EE4C2C" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "Streamlit",  Icon: SiStreamlit,  color: "#FF4B4B" },
      { name: "React",      Icon: SiReact,      color: "#61DAFB" },
      { name: "Next.js",    Icon: SiNextdotjs,  color: "#E2E8F0" },
      { name: "Prisma",     Icon: SiPrisma,     color: "#2D3748" },
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "LangChain",  Icon: SiLangchain,  color: "#1C3C3C" },
      { name: "Model Context Protocol", Icon: TbMathFunction, color: "#00E5FF" },
      { name: "cvxpy",      Icon: TbMathFunction, color: "#00E5FF" },
    ],
  },
  {
    category: "Tools & Platforms",
    label: "tools & platforms",
    skills: [
      { name: "Git",        Icon: SiGit,            color: "#F05032" },
      { name: "AWS",        Icon: FaAws,            color: "#FF9900" },
      { name: "Linux",      Icon: SiLinux,          color: "#FCC624" },
      { name: "PostgreSQL", Icon: SiPostgresql,     color: "#336791" },
      { name: "Supabase",   Icon: SiSupabase,       color: "#3ECF8E" },
      { name: "Vercel",     Icon: SiVercel,         color: "#E2E8F0" },
      { name: "Twilio",     Icon: SiTwilio,         color: "#F22F46" },
      { name: "OpenAI API", Icon: SiOpenai,         color: "#10A37F" },
      { name: "Pusher",     Icon: SiPusher,         color: "#a855f7" },
      { name: "Power BI",   Icon: BsBarChartFill,   color: "#F2C811" },
      { name: "Tableau",    Icon: BsBarChartFill,   color: "#E97627" },
      { name: "Excel",      Icon: RiFileExcel2Fill, color: "#217346" },
      { name: "Jupyter",    Icon: SiJupyter,        color: "#F37626" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#161B22]/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#00E5FF]" />
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#E2E8F0]">
              Skills
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.category} delay={i * 0.1}>
              <div className="glass-card rounded-lg p-6 transition-all duration-300 h-full">
                <p className="font-mono text-[#00E5FF] text-xs tracking-widest mb-6">
                  // {group.label}
                </p>
                <ul className="space-y-3">
                  {group.skills.map((skill, j) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <skill.Icon
                        size={18}
                        style={{ color: skill.color, flexShrink: 0 }}
                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-[#E2E8F0] text-sm group-hover:text-[#E2E8F0] transition-colors duration-150">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
