import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, MapPin } from 'lucide-react';

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
  { icon: Github, href: 'https://github.com/phoo3011', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/phoo3011/', label: 'LinkedIn' },
  { icon: DevfolioIcon, href: 'https://devfolio.co/@phoo3011', label: 'Devfolio' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl">
                <img
                  src="/dog.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
              <span className="text-glow">Phooriwat Suphakkanok</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4"
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
              <MapPin className="w-4 h-4 text-muted-foreground" />
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
                whileHover={{ scale: 1.05 }}
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
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 border border-border/50 rounded-full hover:bg-secondary hover:border-foreground/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
