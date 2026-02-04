import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Skills
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text font-spartan">
            Technologies I Use
          </h3>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              viewport={{ once: true }}
              className="card-gradient border border-border/50 rounded-2xl p-6"
            >
              <h4 className="font-mono text-lg font-semibold mb-6 text-center font-spartan">
                {category.title}
              </h4>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-foreground/60 group-hover:bg-foreground transition-colors" />
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm font-mono">
            ...and always learning new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
