import React from 'react';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="mb-8 flex items-center justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About</h2>
        <span className="text-sm text-white/50">Designer • Problem-solver • Motion curious</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-base leading-relaxed text-white/80">
            I design thoughtful product experiences end-to-end—from framing the problem and research synthesis,
            to interaction design, prototyping, motion, and handoff. My approach is systems-first: ship value early,
            refine with signal, and craft the details that make interfaces feel alive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Recently, my focus has been on design systems, performance-oriented UI, and motion that clarifies hierarchy.
            I enjoy collaborating closely with engineering, shaping quality through documentation and purposeful animation.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-sm font-medium uppercase tracking-wide text-white/60">Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>• End-to-end product design (0→1 and 1→n)</li>
              <li>• Design systems and tokens</li>
              <li>• Motion for feedback and delight</li>
              <li>• Prototyping and usability testing</li>
              <li>• Cross-functional storytelling</li>
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <Stat label="Projects" value="25+" />
              <Stat label="Impact" value="↑ KPI" />
              <Stat label="Experience" value="4+ yrs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-white/50">{label}</div>
    </div>
  );
}
