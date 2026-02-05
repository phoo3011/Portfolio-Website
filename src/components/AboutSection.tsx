import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Building2 } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Development',
    description: '',
  },
  {
    icon: Palette,
    title: 'UX/UI Design',
    description: '',
  },
  {
    icon: Rocket,
    title: 'Hackathon Winner',
    description: 'ETHChiangmai 2026',
    subtitle: '(Relief Mesh)',
  },
  {
    icon: Building2,
    title: 'Government Project',
    description: 'Chiang Mai Provincial Office',
  },
];

const stats = [
  { number: '2+', label: 'Years Experience' },
  { number: '5+', label: 'Projects Completed' },
  { number: '10+', label: 'Technologies' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            ABOUT ME
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-6 font-spartan">
            Profile
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-lato">
              DII (CAMT) student at Chiang Mai University with a foundation in development and UX/UI design, and experience in hackathons and real-world system development for government agencies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-mono text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: 'hsl(var(--foreground) / 0.3)' }}
                className="card-gradient border border-border/50 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="text-xl font-semibold font-spartan">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 font-lato">{item.description}</p>
                {item.subtitle && <p className="text-sm text-muted-foreground font-lato">{item.subtitle}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
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

export default AboutSection;
