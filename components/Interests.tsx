"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { TbBallTennis, TbBallAmericanFootball, TbMusic, TbPlaneDeparture } from "react-icons/tb";
import type { IconType } from "react-icons";

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

const interests: { Icon: IconType; title: string; description: React.ReactNode }[] = [
  {
    Icon: TbBallTennis,
    title: "Tennis & Pickleball",
    description:
      "Grew up competing in tennis — now I play for fun around Ann Arbor. Recently got into pickleball and it's taken over my free time.",
  },
  {
    Icon: TbBallAmericanFootball,
    title: "Sports",
    description:
      "Michigan football at the Big House, Lions games with friends, and always down to watch whatever's on — especially when there's something on the line.",
  },
  {
    Icon: TbMusic,
    title: "Music",
    description:
      "R&B and hip-hop are my go-tos, but I'm always open to finding something new. If you have a rec, I'm listening.",
  },
  {
    Icon: TbPlaneDeparture,
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
    <div className="relative mt-6 rounded-xl overflow-hidden border border-[#E0E5EE] bg-white shadow-[0_1px_2px_rgba(27,33,48,0.04),0_16px_32px_-24px_rgba(27,33,48,0.22)]">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-10 pointer-events-none px-3 py-1.5 rounded-md bg-[#1B2130] text-white font-[family-name:var(--font-plex-mono)] text-xs whitespace-nowrap"
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
                      fill: isVisited ? "#2C5AA0" : "#EEF1F6",
                      stroke: "#DDE3EC",
                      strokeWidth: 0.5,
                      outline: "none",
                      transition: "fill 0.15s ease",
                    },
                    hover: {
                      fill: isVisited ? "#1F4278" : "#E3E8F0",
                      stroke: isVisited ? "#2C5AA0" : "#DDE3EC",
                      strokeWidth: isVisited ? 1 : 0.5,
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isVisited ? "#2C5AA0" : "#EEF1F6",
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
          <div className="w-3 h-3 rounded-sm bg-[#2C5AA0]" />
          <span className="text-[#545F72] text-xs font-[family-name:var(--font-plex-mono)]">visited ({VISITED_NAMES.size})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#EEF1F6] border border-[#DDE3EC]" />
          <span className="text-[#545F72] text-xs font-[family-name:var(--font-plex-mono)]">not yet</span>
        </div>
      </div>
    </div>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="py-28 border-t border-[#E0E5EE]">
      <div className="max-w-6xl mx-auto px-6">
      <FadeUp>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-[#2C5AA0]" />
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl font-medium text-[#1B2130]">Interests</h2>
        </div>
      </FadeUp>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {interests.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.08}>
            <div className="card rounded-xl p-5 h-full">
              <item.Icon size={22} className="text-[#2C5AA0] mb-3" />
              <h3 className="text-sm font-medium text-[#1B2130] mb-2">{item.title}</h3>
              <p className="text-[#545F72] text-sm leading-relaxed">{item.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Travel map */}
      <FadeUp delay={0.2}>
        <p className="eyebrow mb-3">Places I&apos;ve been</p>
        <TravelMap />
      </FadeUp>
      </div>
    </section>
  );
}
