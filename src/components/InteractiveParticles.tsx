import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const InteractiveParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
    }));
    setParticles(initialParticles);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles with reduced frequency
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 180;

          let newVx = particle.vx;
          let newVy = particle.vy;

          // Only apply mouse force if close enough
          if (distance < maxDistance && distance > 0) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / maxDistance) * 0.4;
            newVx = Math.cos(angle) * force;
            newVy = Math.sin(angle) * force;
          }

          let newX = particle.x + newVx;
          let newY = particle.y + newVy;

          // Bounce off walls
          if (newX < 0 || newX > window.innerWidth) {
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY < 0 || newY > window.innerHeight) {
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx * 0.95,
            vy: newVy * 0.95,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const distance = Math.sqrt(
          Math.pow(mousePos.x - particle.x, 2) +
          Math.pow(mousePos.y - particle.y, 2)
        );
        const baseOpacity = 0.2;
        const mouseOpacity = Math.max(0, 1 - distance / 180) * 0.6;
        const finalOpacity = baseOpacity + mouseOpacity;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-foreground to-primary pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: finalOpacity,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${particle.size * 1.5}px rgba(255,255,255,${finalOpacity * 0.5})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveParticles;
