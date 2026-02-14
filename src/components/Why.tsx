'use client';

import { Section } from '@/components/ui/motion';

export function Why() {
  const pillars = [
    { title: 'Identity', desc: 'Secure your business profile with verified metadata, location, and establishment year.' },
    { title: 'Connection', desc: 'Prioritized feeds from your network. Follow, Unfollow, and Block controls built-in.' },
    { title: 'Discovery', desc: 'Search similar accounts and content. Fetch relevant posts without the noise.' },
  ];

  return (
    <Section id="why" className="container py-24 md:py-32 border-t border-[var(--border)]">
       <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4 block">(01) Edition One</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-none text-white">
              The MVP Essentials.
            </h2>
          </div>
          
          <div className="space-y-12">
             <p className="font-mono text-lg text-[var(--muted)] max-w-xl">
               The core of Infinit is live. Register with Apple/Google, build your business profile, and start networking.
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
