import React from 'react';
import { ArrowRight, Play, Palette } from 'lucide-react';

const projects = [
  {
    tag: 'Case Study',
    title: 'Improving onboarding conversion for a SaaS dashboard',
    desc: 'A systems-led redesign that simplified setup, clarified hierarchy, and reduced time-to-value.',
    cta: 'Read Case Study',
  },
  {
    tag: 'Motion Reel',
    title: 'Micro-interactions that clarify & delight',
    desc: 'Principled transitions, empty states, and feedback moments. A short reel of production-ready motion.',
    cta: 'Watch Reel',
    icon: Play,
  },
  {
    tag: 'Design System',
    title: 'Tokens, components, documentation',
    desc: 'A cohesive system for shipping faster with quality—tokens, patterns, and usage guidance.',
    cta: 'Explore System',
    icon: Palette,
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Selected Work</h2>
        <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
          See all <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function Card({ tag, title, desc, cta, icon: Icon }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
      <div>
        <span className="text-[11px] uppercase tracking-wide text-white/60">{tag}</span>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:opacity-90">
          {Icon ? <Icon className="h-4 w-4" /> : null}
          {cta}
        </button>
        <span className="text-xs text-white/50">Placeholder • assets coming soon</span>
      </div>
    </article>
  );
}
