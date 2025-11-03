import React from 'react';
import { PenTool, Layout, Film, Settings, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Layout,
    title: 'Product / UI',
    items: ['Flows & IA', 'Wireframes', 'Design systems', 'Design tokens', 'Accessibility'],
  },
  {
    icon: PenTool,
    title: 'UX',
    items: ['Research synthesis', 'Prototyping', 'Usability testing', 'Content design'],
  },
  {
    icon: Film,
    title: 'Motion / Video',
    items: ['Micro-interactions', 'Principles & easing', 'Lottie / After Effects', 'YouTube edits'],
  },
  {
    icon: Settings,
    title: 'Tools',
    items: ['Figma', 'Framer', 'After Effects', 'FigJam', 'Notion'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-8 flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-yellow-300" />
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Skills & Tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <SkillCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon: Icon, title, items }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-lg bg-white/10 p-2 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-sm font-medium uppercase tracking-wide text-white/80">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
