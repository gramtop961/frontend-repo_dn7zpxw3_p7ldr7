import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0"> 
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-xs text-white/80">Product + UI/UX + Motion</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Designing clear, curious, and delightful product experiences
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            I’m a product designer who blends strategy, craft, and motion to ship polished, human-centered interfaces. 
            This portfolio is a living system—case studies, experiments, and thinking in public.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow/10 transition hover:opacity-90"
            >
              <Rocket className="h-4 w-4" /> View Selected Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              Let’s Talk
            </a>
          </div>
          <p className="text-xs text-white/50">
            Tip: You can interact with the 3D object. Try dragging it.
          </p>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:h-[520px]">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Subtle shine overlay that doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-white/5" />
        </div>
      </div>
    </section>
  );
}
