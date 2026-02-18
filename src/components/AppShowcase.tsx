'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/motion';

const screens = [
  {
    id: 'feed',
    label: 'Feed',
    image: '/screenshots/feed.jpg',
    title: 'Your Feed',
    description: 'See what businesses in your network are up to. New product drops, open collaborations, partnership asks — all in one scroll. Follow who matters to you and skip the noise.',
  },
  {
    id: 'profile',
    label: 'Profile',
    image: '/screenshots/profile.jpg',
    title: 'Your Profile',
    description: 'Your business card, but useful. Show what you do, where you are, and what you\'re looking for. Pin your best posts and let your connections and saves speak for themselves.',
  },
  {
    id: 'organization',
    label: 'Organization',
    image: '/screenshots/organization.jpg',
    title: 'Organization Pages',
    description: 'Set up your business with team members, tags, and open collaborations. Other businesses can see what you\'re about and reach out directly.',
  },
  {
    id: 'discover',
    label: 'Discover',
    image: '/screenshots/discover.jpg',
    title: 'Discover',
    description: 'Browse businesses, people, and open collaborations by category, location, or keyword. Find the manufacturer three towns over or the marketing agency that gets your niche.',
  },
  {
    id: 'messages',
    label: 'Messages',
    image: '/screenshots/messages.jpg',
    title: 'Messages',
    description: 'DM other business owners directly. No email chains, no LinkedIn cold messages. Just real conversations with people who are building something too.',
  },
];

export function AppShowcase() {
  const [active, setActive] = useState(0);

  return (
    <Section id="app" className="container py-24 md:py-32 border-t border-[var(--border)]">
      <div className="mb-10 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4 block">(02) Inside the App</span>
        <h2 className="font-serif text-4xl md:text-6xl text-white max-w-3xl">See what you're signing up for.</h2>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 mb-8 md:mb-12 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
        {screens.map((screen, i) => (
          <button
            key={screen.id}
            onClick={() => setActive(i)}
            className={`relative px-4 md:px-5 py-2 md:py-2.5 font-mono text-xs md:text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${
              active === i
                ? 'text-[#181E1A]'
                : 'text-[var(--muted)] hover:text-white'
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#7EBA98] rounded-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{screen.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-16 items-center">
        {/* Screenshot — phone frame */}
        <div className="mx-auto w-[200px] md:mx-0 md:w-full">
          <div className="relative rounded-[1.5rem] border border-[var(--border)] bg-[#0f1410] p-2 shadow-[0_0_40px_rgba(126,186,152,0.04)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-[1.15rem]"
              >
                <Image
                  src={screens[active].image}
                  alt={screens[active].title}
                  width={680}
                  height={1480}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center py-4 md:py-8"
          >
            <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider mb-4">
              0{active + 1} / 05
            </span>
            <h3 className="font-serif text-2xl md:text-5xl text-white mb-4 md:mb-6">{screens[active].title}</h3>
            <p className="font-mono text-sm md:text-lg text-[var(--muted)] leading-relaxed max-w-lg">
              {screens[active].description}
            </p>

            {/* Nav dots */}
            <div className="flex gap-2 mt-8 md:mt-12">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i
                      ? 'w-8 bg-[#7EBA98]'
                      : 'w-3 bg-[var(--border)] hover:bg-[var(--muted)]'
                  }`}
                  aria-label={`View ${screens[i].title}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
