'use client';

import { Section } from '@/components/ui/motion';

export function Tracks() {
  const tracks = [
    { title: 'Communities', desc: 'Groups for your industry, your city, or your niche. Share wins, ask questions, and find people who get it.' },
    { title: 'Business Courses', desc: 'Short, practical courses from other business owners. Learn what actually worked for them — not theory.' },
    { title: 'AI Assistant', desc: 'Quick answers about your business, your network, and what\'s happening in your space. Like a smart search that actually knows context.' },
  ];

  return (
    <Section id="tracks" className="container py-16 md:py-32 border-t border-[var(--border)]">
       <div className="mb-10 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4 block">(03) Coming Next</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white max-w-2xl">What we&apos;re<br/>building next.</h2>
       </div>
       
       <div className="grid md:grid-cols-3 border-[var(--border)] border-y md:border-y-0">
          {tracks.map((track, i) => (
             <div key={i} className="group relative border-b md:border-b-0 md:border-r border-[var(--border)] p-6 md:p-12 last:border-b-0 md:last:border-r-0 hover:bg-[#7EBA98]/[0.04] transition-colors">
                <span className="font-mono text-sm text-[var(--muted)] mb-4 md:mb-8 block">0{i + 1}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 md:mb-4">{track.title}</h3>
                <p className="font-mono text-sm text-[var(--muted)] leading-relaxed">{track.desc}</p>
             </div>
          ))}
       </div>
    </Section>
  );
}
