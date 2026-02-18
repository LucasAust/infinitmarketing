'use client';

import { useEffect, useRef } from 'react';

type Props = {
  contentRef?: React.RefObject<HTMLDivElement>;
};

export default function MatrixRain({ contentRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splashCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const splashCanvas = splashCanvasRef.current;
    if (!canvas || !splashCanvas) return;

    const ctx = canvas.getContext('2d');
    const splashCtx = splashCanvas.getContext('2d');
    if (!ctx || !splashCtx) return;

    const container = canvas.parentElement;
    
    let animationFrameId: number;
    let drops: number[] = [];
    
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
    };
    let splashes: Particle[] = [];

    const resize = () => {
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        splashCanvas.width = container.clientWidth;
        splashCanvas.height = container.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        splashCanvas.width = window.innerWidth;
        splashCanvas.height = window.innerHeight;
      }
      
      const fontSize = 14;
      const columns = Math.ceil(canvas.width / fontSize);
      drops = new Array(columns).fill(1).map(() => Math.random() * -100); 
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      // 1. CLEAR / FADE RAIN
      ctx.fillStyle = 'rgba(24, 30, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(126, 186, 152, 0.3)'; 
      ctx.font = `14px "Bitcount Prop Single", monospace`;

      const fontSize = 14;
      
      // Calculate collision box only if ref is provided
      let collisionRect = null;
      if (contentRef?.current && container) {
        const contentRect = contentRef.current.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Calculate position relative to the canvas/container
        collisionRect = {
           top: contentRect.top - containerRect.top,
           left: contentRect.left - containerRect.left,
           right: contentRect.right - containerRect.left,
           width: contentRect.width
        };
      }

      // 2. UPDATE RAIN
      for (let i = 0; i < drops.length; i++) {
        const text = Math.floor(Math.random() * 10).toString();
        
        const x = i * fontSize;
        const y = Math.floor(drops[i]) * fontSize;
        
        // Draw character
        ctx.fillText(text, x, y);
        
        // Check Collision with Header
        if (collisionRect) {
            // Check if this column is hitting the top edge
            // Logic: y moves in steps of 14 (fontSize). We need a window large enough to catch the jump.
            // Also, we want it to splash when the character visually hits the top.
            // Text is drawn at baseline 'y'. So when 'y' passes 'top', the character is entering.
            const collisionZoneSize = fontSize * 1.5; 
            
            if (y >= collisionRect.top && y <= collisionRect.top + collisionZoneSize) {
                if (x >= collisionRect.left && x <= collisionRect.right) {
                     // SPAWN SPLASH
                     // User said "where lighter text hit". That is here.
                     
                     // Number of particles - slightly more than "invisible" state
                     const numParticles = 2 + Math.floor(Math.random() * 3);
                     
                     // Flash (glint) - more visible opacity
                     splashes.push({
                        x: x + fontSize/2,
                        y: collisionRect.top,
                        vx: 0,
                        vy: 0,
                        life: 0.4, 
                        color: 'rgba(126, 186, 152, 0.8)'
                     });
                     
                     // Droplets
                     for (let j = 0; j < numParticles; j++) {
                         splashes.push({
                            x: x + fontSize/2 + (Math.random() - 0.5) * 4,
                            y: collisionRect.top,
                            vx: (Math.random() - 0.5) * 3, // slightly wider spread
                            vy: -(Math.random() * 1.5 + 1.0), // slightly more height
                            life: 0.4 + Math.random() * 0.3,
                            color: Math.random() > 0.5 ? 'rgba(126, 186, 152, 0.6)' : 'rgba(160, 176, 166, 0.6)',
                         });
                    }
                }
            }
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.35;
      }

      // 3. DRAW SPLASHES (Foreground)
      splashCtx.clearRect(0, 0, splashCanvas.width, splashCanvas.height);
      
      for (let i = splashes.length - 1; i >= 0; i--) {
        const p = splashes[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // Reduced Gravity
        p.life -= 0.05;

        if (p.life <= 0) {
          splashes.splice(i, 1);
          continue;
        }

        splashCtx.globalAlpha = Math.max(0, p.life);
        splashCtx.fillStyle = p.color;
        
        if (p.vx === 0 && p.vy === 0) {
             splashCtx.fillRect(p.x - 1, p.y - 2, 2, 1); // Smaller Glint
        } else {
             splashCtx.fillRect(p.x, p.y, 1.5, 1.5); // Smaller particles
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [contentRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-100 pointer-events-none w-full h-full"
      />
      <canvas
        ref={splashCanvasRef}
        className="absolute inset-0 z-20 pointer-events-none w-full h-full"
      />
    </>
  );
}
