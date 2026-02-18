import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, MapPin, FileText } from 'lucide-react';
import { useRef } from 'react';

const DevfolioIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 60.3 66.2"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g>
      <g>
        <path d="M60.3,36.4C60.3,52,48.6,64.7,33.8,66c0,0-19.1,0.5-25.4-0.1c-2.4-0.3-4.4-1.8-5.3-4c0.9,0.4,1.8,0.7,2.8,0.8
          C8,62.9,11.5,63,16.4,63c7.2,0,15.1-0.2,15.1-0.2h0.1c7.9-0.7,15.2-4.3,20.4-10.2c4.5-5,7.4-11.3,8.2-17.9
          C60.3,35.2,60.3,35.8,60.3,36.4z"/>
        <path d="M58,30c0,15.6-11.7,28.3-26.6,29.5c0,0-19.1,0.5-25.4-0.1c-3.4-0.3-5.9-3.5-6-7.1l0.1-45
          c0.1-3.6,2.7-6.8,6.1-7.1c6.3-0.5,25.4,0.1,25.4,0.1C46.4,1.6,58,14.4,58,30z"/>
      </g>
    </g>
  </svg>
);

const socialLinks = [
  { icon: FileText, href: 'https://phoo3011.my.canva.site/', label: 'Resume' },
  { icon: Github, href: 'https://github.com/phoo3011', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/phoo3011/', label: 'LinkedIn' },
  { icon: DevfolioIcon, href: 'https://devfolio.co/@phoo3011', label: 'Devfolio' },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        style={{ opacity }}
      />
      
      {/* Parallax Decorative circles with rotation */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex-shrink-0"
          >
            <motion.div 
              className="relative"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Profile Image */}
              <motion.div 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl"
                whileHover={{ 
                  boxShadow: '0 0 40px rgba(255,255,255,0.3)',
                  borderColor: 'rgba(255,255,255,0.5)'
                }}
              >
                <motion.img
                  src="/dog.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>
              
              {/* Animated ring around profile */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-full pointer-events-none"
                animate={{ 
                  borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-2xl"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-muted-foreground mb-3 tracking-wider"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight whitespace-nowrap font-spartan"
            >
              <motion.span 
                className="text-glow inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Phooriwat Suphakkanok
              </motion.span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl md:text-2xl gradient-text font-medium font-lato">
                Student at Chiang Mai University
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <MapPin className="w-4 h-4 text-muted-foreground" />
              </motion.div>
              <span className="text-sm text-muted-foreground">Chiang Mai, Thailand</span>
            </motion.div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-foreground text-background font-mono text-sm rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
              >
                Contact
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="p-3 border border-border/50 rounded-full hover:bg-secondary hover:border-foreground/30 transition-all group"
                  aria-label={social.label}
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-foreground/50 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
