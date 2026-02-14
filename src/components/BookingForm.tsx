'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import Link from 'next/link';

export function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // Validation (simplified)
    const missing = Object.values(payload).some(val => !String(val).trim());
    if (missing) {
      alert('Please fill out all fields.');
      setLoading(false);
      return;
    }

    const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co'; // Replace with env
    const SUPABASE_ANON_KEY = 'YOUR-ANON-KEY'; // Replace with env
    
    // allow submission simulation if keys are missing for demo
    if (SUPABASE_URL.includes('YOUR-')) {
       await new Promise(r => setTimeout(r, 1500));
       setLoading(false);
       setSuccess(true);
       return;
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/interest_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed');

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 mt-12 bg-[#050505] p-6 md:p-12 border border-[var(--border)]">
      <div className={clsx("relative overflow-hidden transition-all duration-500", success ? "opacity-0 pointer-events-none h-0 p-0 overflow-hidden" : "opacity-100")}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Name</label>
            <input id="name" name="name" type="text" placeholder="Ava Carter" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-white transition-colors rounded-none" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Email</label>
            <input id="email" name="email" type="email" placeholder="you@business.com" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-white transition-colors rounded-none" />
          </div>
          <div className="space-y-2">
            <label htmlFor="business" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Business</label>
            <input id="business" name="business" type="text" placeholder="North Loop Market" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-white transition-colors rounded-none" />
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-2">
                <label htmlFor="city" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">City</label>
                <input id="city" name="city" type="text" placeholder="Austin, TX" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white placeholder-[var(--muted)]/30 focus:outline-none focus:border-white transition-colors rounded-none" />
             </div>
             <div className="space-y-2">
                <label htmlFor="category" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Category</label>
                <select id="category" name="category" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white focus:outline-none focus:border-white transition-colors rounded-none">
                  <option value="" className="text-black">Select...</option>
                  <option className="text-black">Food & Bev</option>
                  <option className="text-black">Retail</option>
                  <option className="text-black">Services</option>
                  <option className="text-black">Wellness</option>
                  <option className="text-black">Events</option>
                  <option className="text-black">Other</option>
                </select>
             </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="priority" className="text-xs uppercase tracking-wider font-mono text-[var(--muted)]">Priority</label>
            <select id="priority" name="priority" required disabled={loading} className="w-full bg-transparent border-b border-[var(--border)] py-2 text-white focus:outline-none focus:border-white transition-colors rounded-none">
              <option value="" className="text-black">Select...</option>
              <option className="text-black">Co-promote a launch</option>
              <option className="text-black">Find referral partners</option>
              <option className="text-black">Fill events / pop-ups</option>
              <option className="text-black">Increase local foot traffic</option>
              <option className="text-black">Expand to another city</option>
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
            className="absolute inset-0 z-10 bg-[#050505] flex flex-col items-center justify-center text-center p-8"
          >
             <h3 className="font-serif text-3xl text-white mb-2">Received.</h3>
             <p className="font-mono text-sm text-[var(--muted)]">We’ll reach out shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!success && (
        <div className="flex flex-col justify-between h-full pt-8 md:pt-0">
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">Membership</h3>
            <ul className="space-y-6">
              {['Curated partnerships.', 'Launch kits included.', 'Dedicated support.', 'Zero % fees.'].map((item, i) => (
                <li key={i} className="flex gap-4 text-sm font-mono text-[var(--muted)] uppercase tracking-wide border-b border-[var(--border)] pb-2 last:border-b-0">
                  <span className="text-[var(--accent)]">0{i+1}</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <div className="font-serif text-lg text-white mb-1">City Anchors</div>
              <p className="text-xs font-mono text-[var(--muted)]">Selections for Q3 anchors closing soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}