'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/motion';
import MatrixRain from '@/components/ui/MatrixRain';

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="relative min-h-[80vh] md:min-h-screen pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <MatrixRain contentRef={contentRef} />
        
        <div className="container relative z-10">
          <FadeIn>
            <div ref={contentRef} className="relative max-w-4xl bg-[#181E1A]/80 backdrop-blur-md p-6 md:p-12 rounded-2xl md:rounded-3xl border border-[#7EBA98]/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-8xl leading-[0.9] tracking-tight mb-6 md:mb-8 text-[#ffffff]">
                Where small businesses <br />
                <span className="text-[var(--accent)] italic">find each other.</span>
              </h1>
              
              <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end">
                 <p className="text-base md:text-xl font-mono text-[var(--muted)] max-w-xl leading-relaxed">
                   A social platform built for small business owners. Find partners, share what you know, and grow together.
                 </p>

                 <div className="flex flex-col gap-3">
                    <Link href="#form" className="btn btn-solid">
                      <span>Get Early Access</span>
                    </Link>
                    <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono">
                      <span className="w-2 h-2 bg-[#7EBA98] rounded-full animate-pulse"></span>
                      <span>MVP Launching Soon</span>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container pb-16 md:pb-32">
        <div className="border-t border-[var(--border)] pt-6 md:pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
           {[
             { label: 'Built for', value: 'Small Businesses' },
             { label: 'Cost', value: 'Free' },
             { label: 'Focus', value: 'Real Connections' },
             { label: 'Status', value: 'MVP' }
           ].map((stat) => (
             <div key={stat.label}>
               <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider mb-1">{stat.label}</div>
               <div className="font-serif text-xl md:text-3xl">{stat.value}</div>
             </div>
           ))}
        </div>
      </div>
    </>
  );
}
