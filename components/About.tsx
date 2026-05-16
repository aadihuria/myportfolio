"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-[#00E5FF]" />
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#E2E8F0]">About</h2>
        </div>
      </FadeUp>

      {/* Photo + Text side by side */}
      <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Photo */}
        <FadeUp delay={0.1}>
          <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto md:mx-0 rounded-lg overflow-hidden border border-[#30363D] group">
            <Image
              src="/profile.jpg"
              alt="Aadi Huria"
              fill
              className="object-cover transition-all duration-500"
              sizes="280px"
            />
            {/* Cyan overlay tint on hover */}
            <div className="absolute inset-0 bg-[#00E5FF]/5 group-hover:bg-transparent transition-all duration-500" />
            {/* Corner accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#00E5FF] to-transparent" />
          </div>
        </FadeUp>

        {/* Text */}
        <div className="space-y-5">
          <FadeUp delay={0.15}>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Aadi is a sophomore at the University of Michigan studying Data Science.
              He grew up in{" "}
              <span className="text-[#E2E8F0]">Canton, MI</span>, competing in tennis
              for years — a sport that instilled in him the discipline and consistency
              he brings to everything he builds.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              He&apos;s genuinely excited about{" "}
              <span className="text-[#E2E8F0] font-medium">AI</span> — not just as a
              tool but as a way to solve problems that actually matter. Whether it&apos;s
              training ML models to improve heart failure diagnostics at{" "}
              <span className="text-[#E2E8F0] font-medium">SafeBeat Rx</span> or using
              AI to power smarter study group matching, he&apos;s drawn to work where
              the technology has a real human on the other end.
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              That same drive to give back led him to found{" "}
              <span className="text-[#E2E8F0] font-medium">Serve To Serve Academy</span>,
              a nonprofit making tennis accessible to underprivileged youth. He also leads
              data and tech work in the{" "}
              <span className="text-[#E2E8F0] font-medium">Enactus Consulting Club</span>{" "}
              at UMich, and this summer he&apos;s heading to Seattle as an{" "}
              <span className="text-[#E2E8F0] font-medium">Amazon SDE Intern</span> on
              the AI-Powered Ads team.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
