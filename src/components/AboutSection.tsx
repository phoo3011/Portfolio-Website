import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with best practices',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and clients',
  },
];

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
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
            About Me
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience 
              building modern web applications. I specialize in React, Node.js, and 
              cloud technologies to create scalable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My journey in tech started with a curiosity for how things work, 
              and has evolved into a career focused on creating impactful digital 
              experiences. I believe in writing clean, maintainable code and 
              staying current with industry trends.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
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
                <h4 className="font-mono text-lg font-semibold mb-2 font-spartan">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
