import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Why } from '@/components/Why';
import { Tracks } from '@/components/Tracks';
import { BookingForm } from '@/components/BookingForm';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      <Why />
      <Tracks />

      <Section id="form" className="container py-24 md:py-32 border-t border-[var(--border)]">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4 block">(04) Access</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Join the first wave.</h2>
            <p className="font-mono text-lg text-[var(--muted)] max-w-xl">
              We’re onboarding in small cohorts to keep the experience clean and high-signal. No waitlist games — just honest matching.
            </p>
          </div>
        </div>
        <BookingForm />
      </Section>

      <Footer />
    </main>
  );
}
