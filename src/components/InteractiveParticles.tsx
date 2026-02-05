import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
}

const InteractiveParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 4.5 + 1,
      rotation: Math.random() * 360,
    }));
    setParticles(initialParticles);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Update particle positions towards mouse
      setParticles((prev) =>
        prev.map((particle) => {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 250;

          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / maxDistance) * 0.6;
            
            return {
              ...particle,
              vx: Math.cos(angle) * force,
              vy: Math.sin(angle) * force,
            };
          }

          return {
            ...particle,
          };
        })
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePos]);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

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
            vx: particle.vx * 0.96 + (Math.random() - 0.5) * 0.3,
            vy: particle.vy * 0.96 + (Math.random() - 0.5) * 0.3,
            rotation: particle.rotation + (Math.random() - 0.5) * 8,
          };
        })
      );
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Draw connections between nearby particles
  const connections = [];
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        connections.push({
          id: `${i}-${j}`,
          x1: particles[i].x,
          y1: particles[i].y,
          x2: particles[j].x,
          y2: particles[j].y,
          distance,
        });
      }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Draw connections as SVG */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            initial={{ strokeOpacity: 0 }}
            animate={{ strokeOpacity: 1 - conn.distance / 100 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </svg>

      {/* Draw particles */}
      {particles.map((particle) => {
        const distance = Math.sqrt(
          Math.pow(mousePos.x - particle.x, 2) +
          Math.pow(mousePos.y - particle.y, 2)
        );
        const baseOpacity = 0.3;
        const mouseOpacity = Math.max(0, 1 - distance / 250) * 1;
        const finalOpacity = Math.min(1, baseOpacity + mouseOpacity);
        const scale = 1 + Math.max(0, 1 - distance / 250) * 0.8;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-foreground via-primary to-foreground"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size * scale,
              height: particle.size * scale,
              opacity: finalOpacity,
              transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
              filter: `drop-shadow(0 0 ${Math.max(3, particle.size)}px rgba(255,255,255,${finalOpacity * 0.8})) drop-shadow(0 0 ${Math.max(6, particle.size * 2)}px rgba(99,102,241,${finalOpacity * 0.5}))`,
            }}
            animate={{
              boxShadow: [
                `0 0 ${particle.size * 2}px rgba(255,255,255,0.3)`,
                `0 0 ${particle.size * 4}px rgba(99,102,241,0.6)`,
                `0 0 ${particle.size * 2}px rgba(255,255,255,0.3)`,
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveParticles;
