import type { Metadata } from 'next';
import { Vidaloka, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/scroll/SmoothScroll';

const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Infinit Marketing',
  description: 'Marketing for the next era.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vidaloka.variable} ${mono.variable}`}>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single&display=swap" rel="stylesheet" />
      </head>
      <body className="font-mono bg-[#0a0a0a] text-[#e0e0e0] antialiased selection:bg-[#fff] selection:text-[#000]">
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }} 
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
