"use client";

import { useState } from "react";

function initials(name: string) {
  return name
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function CompanyLogo({ name, domain }: { name: string; domain?: string }) {
  const [failed, setFailed] = useState(!domain);

  if (failed) {
    return (
      <div className="w-11 h-11 rounded-lg bg-[#E8EFF9] border border-[#CBDBF0] flex items-center justify-center shrink-0">
        <span className="text-[#2C5AA0] text-xs font-semibold font-[family-name:var(--font-plex-mono)]">
          {initials(name)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-lg bg-white border border-[#E0E5EE] flex items-center justify-center shrink-0 overflow-hidden p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?sz=128&domain=${domain}`}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
