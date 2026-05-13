"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// Country names as they appear in world-atlas properties.name
const VISITED_NAMES = new Set([
  // Asia
  "India",
  "Nepal",
  "Pakistan",
  "United Arab Emirates",
  // Europe
  "Croatia",
  "Czechia",
  "Denmark",
  "France",
  "Germany",
  "Greece",
  "Italy",
  "Lithuania",
  "Norway",
  "Portugal",
  "Romania",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "Vatican",
  // North America
  "Canada",
  "Costa Rica",
  "Mexico",
  "United States of America",
  // South America
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Peru",
  "Venezuela",
]);

const interests = [
  {
    icon: "🎾",
    title: "Tennis & Pickleball",
    description:
      "Grew up competing in tennis — now I play for fun around Ann Arbor. Recently got into pickleball and it's taken over my free time.",
  },
  {
    icon: "🏈",
    title: "Sports",
    description:
      "Michigan football at the Big House, Lions games with friends, and always down to watch whatever's on — especially when there's something on the line.",
  },
  {
    icon: "🎵",
    title: "Music",
    description:
      "R&B and hip-hop are my go-tos, but I'm always open to finding something new. If you have a rec, I'm listening.",
  },
  {
    icon: "✈️",
    title: "Travel",
    description: (
      <>
        I&apos;ve been lucky to visit a lot of countries. Hover over the highlighted ones below —
        each one has a story.
      </>
    ),
  },
];

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function TravelMap() {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  return (
    <div className="relative mt-6 rounded-lg overflow-hidden border border-[#30363D] bg-[#161B22]">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-10 pointer-events-none px-3 py-1.5 rounded bg-[#0D1117] border border-[#00E5FF]/40 text-[#00E5FF] font-mono text-xs whitespace-nowrap"
          style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -130%)" }}
        >
          {tooltip.name}
        </div>
      )}

      <ComposableMap
        projectionConfig={{ scale: 147 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name as string;
              const isVisited = VISITED_NAMES.has(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(evt) => {
                    if (isVisited) {
                      setTooltip({
                        name: countryName,
                        x: evt.nativeEvent.offsetX,
                        y: evt.nativeEvent.offsetY,
                      });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill: isVisited ? "#00E5FF" : "#1C2333",
                      stroke: "#30363D",
                      strokeWidth: 0.5,
                      outline: "none",
                      transition: "fill 0.15s ease",
                    },
                    hover: {
                      fill: isVisited ? "#38BDF8" : "#222C3C",
                      stroke: isVisited ? "#00E5FF" : "#30363D",
                      strokeWidth: isVisited ? 1 : 0.5,
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isVisited ? "#00E5FF" : "#1C2333",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Legend */}
      <div className="flex items-center gap-4 px-4 pb-3 pt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#00E5FF]" />
          <span className="text-[#94A3B8] text-xs font-mono">visited ({VISITED_NAMES.size})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#1C2333] border border-[#30363D]" />
          <span className="text-[#94A3B8] text-xs font-mono">not yet</span>
        </div>
      </div>
    </div>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="py-28 max-w-6xl mx-auto px-6">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-[#00E5FF]" />
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#E2E8F0]">Interests</h2>
        </div>
      </FadeUp>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {interests.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.08}>
            <div className="glass-card rounded-lg p-5 h-full transition-all duration-300 hover:border-[#00E5FF]/30">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-mono text-sm font-bold text-[#E2E8F0] mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Travel map */}
      <FadeUp delay={0.2}>
        <p className="font-mono text-[#00E5FF] text-xs tracking-widest mb-3">// places I&apos;ve been</p>
        <TravelMap />
      </FadeUp>
    </section>
  );
}
