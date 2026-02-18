'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#why', label: 'How It Works' },
    { href: '#app', label: 'The App' },
    { href: '#tracks', label: 'Roadmap' },
    { href: '#form', label: 'Sign Up' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#181E1A] border-b border-[var(--border)]">
      <div className="flex items-center justify-between px-6 py-5">
        <div className="font-serif text-2xl tracking-tight text-[#e9edf5]">Infinit.</div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-mono text-[var(--muted)] hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] w-6 h-6 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[var(--border)]"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-mono text-[var(--muted)] hover:text-white transition-colors py-1">
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
