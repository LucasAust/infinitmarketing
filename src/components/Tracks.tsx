'use client';

import { Section } from '@/components/ui/motion';

export function Tracks() {
  const tracks = [
    { title: 'Communities', desc: 'Private and public groups with rule-sets, moderation, and exclusive member feeds.' },
    { title: 'Business Courses', desc: 'Integrated LMS for verifying your expertise and learning from industry leaders.' },
    { title: 'AI Assistant', desc: 'Context-aware chatbot for quick business insights and navigation assistant.' },
  ];

  return (
    <Section id="tracks" className="container py-24 md:py-32 border-t border-[var(--border)]">
       <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4 block">(02) Roadmap</span>
          <h2 className="font-serif text-5xl md:text-6xl text-white max-w-2xl">Stage 1.<br/>What’s to Come.</h2>
       </div>
       
       <div className="grid md:grid-cols-3 border-[var(--border)] border-y md:border-y-0">
          {tracks.map((track, i) => (
             <div key={i} className="group relative border-b md:border-b-0 md:border-r border-[var(--border)] p-8 md:p-12 last:border-b-0 md:last:border-r-0 hover:bg-white/[0.02] transition-colors">
                <span className="font-mono text-sm text-[var(--muted)] mb-8 block">0{i + 1}</span>
                <h3 className="font-serif text-3xl text-white mb-4">{track.title}</h3>
                <p className="font-mono text-sm text-[var(--muted)] leading-relaxed">{track.desc}</p>
             </div>
          ))}
       </div>
    </Section>
  );
}
