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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-[#E0E5EE]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#2C5AA0]" />
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl font-medium text-[#1B2130]">
              Education
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="card rounded-xl p-6 flex items-center gap-5">
            <CompanyLogo name="University of Michigan" domain="umich.edu" />
            <div>
              <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-medium text-[#1B2130]">
                University of Michigan, Ann Arbor
              </h3>
              <p className="text-[#2C5AA0] text-sm mt-0.5">B.S. in Data Science · Class of 2027</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
