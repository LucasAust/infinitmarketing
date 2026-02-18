'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import { supabase } from '@/lib/supabase';

export function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    if (Object.values(payload).some(val => !String(val).trim())) {
      alert('Please fill out all fields.');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from('marketingsignups').insert([payload]);
      if (error) throw error;

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 bg-[#141a16] p-5 md:p-12 border border-[var(--border)]">
      <div className={clsx("relative overflow-hidden transition-all duration-500", success ? "opacity-0 pointer-events-none h-0 p-0 overflow-hidden" : "opacity-100")}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Name</label>
            <input id="name" name="name" type="text" placeholder="Ava Carter" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-[#7EBA98] transition-colors rounded-none" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Email</label>
            <input id="email" name="email" type="email" placeholder="you@business.com" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-[#7EBA98] transition-colors rounded-none" />
          </div>
          <div className="space-y-2">
            <label htmlFor="business" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Business</label>
            <input id="business" name="business" type="text" placeholder="North Loop Market" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-[#7EBA98] transition-colors rounded-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label htmlFor="city" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">City</label>
                <input id="city" name="city" type="text" placeholder="Austin, TX" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-[#7EBA98] transition-colors rounded-none" />
             </div>
             <div className="space-y-2">
                <label htmlFor="category" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Category</label>
                <select id="category" name="category" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white focus:outline-none focus:border-[#7EBA98] transition-colors rounded-none">
                  <option value="" className="text-black">Select...</option>
                  <option className="text-black">Beauty &amp; Personal Care</option>
                  <option className="text-black">Food &amp; Beverage</option>
                  <option className="text-black">Health, Fitness &amp; Medical</option>
                  <option className="text-black">Retail, Brands &amp; Consumer Goods</option>
                  <option className="text-black">Hospitality &amp; Events</option>
                  <option className="text-black">Construction &amp; Trades</option>
                  <option className="text-black">Real Estate &amp; Property</option>
                  <option className="text-black">Automotive</option>
                  <option className="text-black">Manufacturing &amp; Production</option>
                  <option className="text-black">Wholesale &amp; Distribution</option>
                  <option className="text-black">Marketing &amp; Creative Services</option>
                  <option className="text-black">Professional &amp; Advisory Services</option>
                  <option className="text-black">IT, Software &amp; Technology</option>
                  <option className="text-black">HR, Staffing &amp; Training</option>
                  <option className="text-black">Facility, Cleaning &amp; Maintenance</option>
                </select>
             </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="priority" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">What interests you most?</label>
            <select id="priority" name="priority" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white focus:outline-none focus:border-[#7EBA98] transition-colors rounded-none">
              <option value="" className="text-black">Select...</option>
              <option className="text-black">Connect with local businesses</option>
              <option className="text-black">Find collaboration partners</option>
              <option className="text-black">Share knowledge &amp; learn from peers</option>
              <option className="text-black">Get referrals from other businesses</option>
              <option className="text-black">Cross-promote with similar brands</option>
              <option className="text-black">Join a supportive business community</option>
            </select>
          </div>
          
          <button type="submit" disabled={loading} className="btn btn-solid w-full mt-6">
             <span>{loading ? 'Sending...' : 'Request Access'}</span>
          </button>
        </form>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 bg-[#141a16] flex flex-col items-center justify-center text-center p-8"
          >
             <h3 className="font-serif text-3xl text-white mb-2">Received.</h3>
             <p className="font-mono text-sm text-[var(--muted)]">We&apos;ll reach out shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!success && (
        <div className="flex flex-col justify-between h-full pt-8 md:pt-0">
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">What you get</h3>
            <ul className="space-y-6">
              {['A real business profile.', 'Direct messaging.', 'Discovery by other owners.', 'Completely free.'].map((item, i) => (
                <li key={i} className="flex gap-4 text-sm font-mono text-[var(--muted)] uppercase tracking-wide border-b border-[var(--border)] pb-2 last:border-b-0">
                  <span className="text-[var(--accent)]">0{i+1}</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <div className="font-serif text-lg text-white mb-1">Early access</div>
              <p className="text-xs font-mono text-[var(--muted)]">We&apos;re onboarding the first group now. Limited spots.</p>
          </div>
        </div>
      )}
    </div>
  );
}
