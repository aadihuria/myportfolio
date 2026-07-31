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
          <div className="w-8 h-px bg-[#2C5AA0]" />
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl font-medium text-[#1B2130]">About</h2>
        </div>
      </FadeUp>

      {/* Photo + Text side by side */}
      <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Photo */}
        <FadeUp delay={0.1}>
          <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto md:mx-0 rounded-lg overflow-hidden border border-[#E0E5EE] shadow-[0_16px_32px_-20px_rgba(27,33,48,0.3)]">
            <Image
              src="/profile.jpg"
              alt="Aadi Huria"
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>
        </FadeUp>

        {/* Text */}
        <div className="space-y-5">
          <FadeUp delay={0.15}>
          <p className="text-[#3A4356] text-lg leading-relaxed">
            Aadi is a junior at the University of Michigan studying Data Science.
            He grew up in{" "}
            <span className="text-[#1B2130]">Canton, MI</span>, and played tennis competitively
            since he was eight. The sport taught him discipline and consistency that now shows
            up in everything he builds.
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="text-[#3A4356] text-lg leading-relaxed">
            That same drive led him to found{" "}
            <span className="text-[#1B2130] font-medium">Serve To Serve Academy</span>,
            a nonprofit making tennis accessible to underprivileged youth.
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <p className="text-[#3A4356] text-lg leading-relaxed">
            He&apos;s genuinely excited about{" "}
            <span className="text-[#1B2130] font-medium">AI</span> — not just as a
            tool, but as a way to solve problems that actually matter. At{" "}
            <span className="text-[#1B2130] font-medium">SafeBeat Rx</span>, he
            trained ML models to improve heart failure diagnostics. Outside of work,
            he likes leveraging technology to make a difference for the people
            around him.
          </p>
        </FadeUp>
        <FadeUp delay={0.45}>
          <p className="text-[#3A4356] text-lg leading-relaxed">
            This summer he&apos;s in Seattle as an{" "}
            <span className="text-[#1B2130] font-medium">SDE Intern at Amazon</span> on
            the Amazon Ads team, building RAG and MCP systems that improve retrieval
            accuracy and streamline development workflows.
          </p>
        </FadeUp>
        </div>
      </div>
    </section>
  );
}
