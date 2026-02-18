'use client';

import { Section } from '@/components/ui/motion';

export function Why() {
  const pillars = [
    { title: 'Your Profile', desc: 'Set up your business — what you do, where you are, what you\'re looking for. People find you based on that, not an algorithm.' },
    { title: 'Real Connections', desc: 'Follow businesses you actually want to hear from. Your feed shows their posts, not sponsored content from strangers.' },
    { title: 'Discovery', desc: 'Search by category, city, or keyword. Find the manufacturer, the marketer, or the coffee shop that wants to cross-promote.' },
  ];

  return (
    <Section id="why" className="container py-16 md:py-32 border-t border-[var(--border)]">
       <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4 block">(01) How It Works</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-none text-white">
              Built simple on purpose.
            </h2>
          </div>
          
          <div className="space-y-8 md:space-y-12">
             <p className="font-mono text-base md:text-lg text-[var(--muted)] max-w-xl">
               Sign up, build your business profile, and start connecting. No complicated setup, no premium tiers — just the tools you need to find other businesses like yours.
             </p>
             
             <div className="grid gap-8">
                {pillars.map((pillar, i) => (
                   <div key={i} className="border-l border-[var(--border)] pl-8 py-2">
                      <h3 className="font-serif text-2xl text-white mb-2">{pillar.title}</h3>
                      <p className="font-mono text-sm text-[var(--muted)] leading-relaxed max-w-md">{pillar.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </Section>
  );
}
