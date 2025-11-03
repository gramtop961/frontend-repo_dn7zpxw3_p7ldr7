import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 pb-16 pt-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Let’s build something thoughtful</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70">
          I’m open to product design roles, system work, and motion-focused collaborations. 
          Send a note with a bit of context—problem, constraints, and goals.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs text-white/50">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        <span>Built with React & Tailwind</span>
      </div>
    </footer>
  );
}
