import Link from 'next/link';
import { Section } from '@/components/ui/motion';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 border-b border-[var(--border)] bg-[#0a0a0a]">
      <div className="flex items-center gap-3">
        <div className="font-serif text-2xl tracking-tight text-[#e9edf5]">Infinit.</div>
      </div>
      <nav className="flex items-center gap-6">
        <Link href="#tracks" className="text-sm font-mono text-[var(--muted)] hover:text-white transition-colors">Tracks</Link>
        <Link href="#form" className="text-sm font-mono text-[var(--muted)] hover:text-white transition-colors">Access</Link>
      </nav>
    </header>
  );
}
