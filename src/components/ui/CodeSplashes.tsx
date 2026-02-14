'use client';

import { useEffect, useRef } from 'react';

export default function CodeSplashes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // container for particles
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
    };
    
    let particles: Particle[] = [];
    let animationFrameId: number;
    const fontSize = 14;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = 60; // Height of the splash area
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly spawn splashes to simulate rain hitting the surface
      // Adjust probability based on width to keep density consistent
      const chance = canvas.width / 800; 
      
      if (Math.random() < 0.3 * chance) { // Adjust frequency
        const col = Math.floor(Math.random() * (canvas.width / fontSize));
        const x = col * fontSize + fontSize / 2;
        // Start from the bottom of the canvas (which is aligned with container top)
        const y = canvas.height; 

        // Spawn splash particles
        const numParticles = 2 + Math.floor(Math.random() * 3);
        
        // Add a "flash" or "glint" particle (white, short lived)
        particles.push({
            x,
            y,
            vx: 0,
            vy: 0,
            life: 0.5, // short flash
            color: '#ffffff'
        });

        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: x + (Math.random() - 0.5) * 4,
            y: y,
            vx: (Math.random() - 0.5) * 2, // Spread x sideways
            vy: -(Math.random() * 2 + 1.5), // Upward velocity
            life: 1.0,
            color: Math.random() > 0.5 ? '#cccccc' : '#888888', // Varied grey/white
          });
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // Gravity
        p.life -= 0.04; // Fade out speed

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        
        // Make the "flash" particle slightly bigger
        if (p.vx === 0 && p.vy === 0) {
             ctx.fillRect(p.x - 2, p.y - 4, 4, 2); // Horizontal glint
        } else {
             ctx.fillRect(p.x, p.y, 2, 2); // Droplets
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute -top-[60px] left-0 pointer-events-none z-20"
      style={{ width: '100%', height: '60px' }}
    />
  );
}
