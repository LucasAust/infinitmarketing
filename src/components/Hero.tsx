'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/motion';
import MatrixRain from '@/components/ui/MatrixRain';

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="relative min-h-screen pt-16 pb-24 md:pt-24 overflow-hidden">
        <MatrixRain contentRef={contentRef} />
        
        <div className="container relative z-10">
          <FadeIn>
            <div ref={contentRef} className="relative max-w-4xl bg-[#0a0a0a]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8 text-[#ededed]">
                Connections for the <br />
                <span className="text-[var(--accent)] italic">next era.</span>
              </h1>
              
              <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
                 <p className="text-lg md:text-xl font-mono text-[var(--muted)] max-w-xl leading-relaxed">
                   Secure your handle. Build your profile. Connect with verified businesses in the First Edition of Infinit.
                 </p>

                 <div className="flex flex-col gap-3">
                    <Link href="#form" className="btn btn-solid">
                      <span>Join MVP</span>
                    </Link>
                    <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Registration Open</span>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container pb-24 md:pb-32">
        <div className="border-t border-[var(--border)] pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'Network', value: 'Private' },
             { label: 'Cost', value: 'Zero Ad Spend' },
             { label: 'Focus', value: 'Co-Marketing' },
             { label: 'Status', value: 'Beta' }
           ].map((stat) => (
             <div key={stat.label}>
               <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider mb-1">{stat.label}</div>
               <div className="font-serif text-2xl md:text-3xl">{stat.value}</div>
             </div>
           ))}
        </div>
      </div>
    </>
  );
}
