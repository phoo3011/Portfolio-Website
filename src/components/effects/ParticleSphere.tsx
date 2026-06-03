import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

const ParticleSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const size = Math.min(window.innerWidth * 0.8, 500);
      canvas.width = size;
      canvas.height = size;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles in sphere shape
    const particleCount = 800;
    const radius = canvas.width * 0.35;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      particlesRef.current.push({
        x,
        y,
        z,
        originalX: x,
        originalY: y,
        originalZ: z,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - canvas.width / 2) / canvas.width,
        y: (e.clientY - rect.top - canvas.height / 2) / canvas.height,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Slow rotation + mouse influence
      rotationRef.current.y += 0.003 + mouseRef.current.x * 0.005;
      rotationRef.current.x += mouseRef.current.y * 0.002;

      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Sort particles by z-depth for proper rendering
      const projected = particlesRef.current.map((p) => {
        // Rotate around Y axis
        const x1 = p.originalX * cosY - p.originalZ * sinY;
        const z1 = p.originalX * sinY + p.originalZ * cosY;

        // Rotate around X axis
        const y2 = p.originalY * cosX - z1 * sinX;
        const z2 = p.originalY * sinX + z1 * cosX;

        // Perspective projection
        const scale = 400 / (400 + z2);
        const x2d = centerX + x1 * scale;
        const y2d = centerY + y2 * scale;

        return { x: x2d, y: y2d, z: z2, scale };
      });

      // Sort by z (back to front)
      projected.sort((a, b) => a.z - b.z);

      // Draw particles
      projected.forEach((p) => {
        const alpha = Math.max(0.1, Math.min(0.9, (p.z + radius) / (2 * radius)));
        const size = Math.max(0.5, p.scale * 2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto cursor-crosshair"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default ParticleSphere;
