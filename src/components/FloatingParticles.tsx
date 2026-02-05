import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 8,
    animation: Math.floor(Math.random() * 3),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        let animationProps = {};
        
        if (particle.animation === 0) {
          // Floating up and down
          animationProps = {
            animate: {
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }
          };
        } else if (particle.animation === 1) {
          // Circular motion
          animationProps = {
            animate: {
              x: [0, 30, 0, -30, 0],
              y: [0, 30, 40, 30, 0],
              opacity: [0.1, 0.3, 0.5, 0.3, 0.1],
            }
          };
        } else {
          // Floating side to side
          animationProps = {
            animate: {
              x: [0, 20, -20, 0],
              y: [0, -20, -20, 0],
              opacity: [0.1, 0.35, 0.35, 0.1],
            }
          };
        }

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-foreground/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            {...animationProps}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;
