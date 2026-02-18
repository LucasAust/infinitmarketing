import Link from 'next/link';

export function Footer() {
  return (
    <footer className="container py-24 mt-24 border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
         <div>
            <h1 className="font-serif text-8xl md:text-[10rem] leading-none text-white tracking-tighter opacity-10 select-none">Infinit.</h1>
         </div>
         <div className="flex flex-col md:flex-row gap-12 md:gap-24 font-mono text-sm uppercase tracking-wider">
            <div className="flex flex-col gap-4">
               <span className="text-[var(--muted)] border-b border-[var(--border)] pb-2 mb-2">Navigation</span>
               <Link href="#why" className="hover:text-white transition-colors">Philosophy</Link>
               <Link href="#tracks" className="hover:text-white transition-colors">Tracks</Link>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-[var(--muted)] border-b border-[var(--border)] pb-2 mb-2">Legal</span>
               <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
               <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-[var(--muted)] border-b border-[var(--border)] pb-2 mb-2">Social</span>
               <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
               <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            </div>
         </div>
      </div>
      <div className="mt-12 pt-8 border-t border-[var(--border)] font-mono text-xs text-[var(--muted)]">
         <span>© 2024 Infinit Network.</span>
      </div>
    </footer>
  );
}
