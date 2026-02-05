import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: [
      'Programming: Java, Python, JavaScript, TypeScript, C++',
      'Web Development: HTML, CSS, React',
      'Database: SQL, MySQL',
      'UX/UI Design: Wireframing, User Flow, Prototyping, Figma'
    ],
  },
  {
    title: 'Soft Skills',
    skills: ['Critical Thinking', 'Emotional Intelligence', 'Growth Mindset', 'Time Management', 'Etc.'],
  },
  {
    title: 'Languages',
    skills: ['Thai (Native)', 'English (Intermediate)'],
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
            ABOUT ME
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text font-spartan">
            Skills
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
              className="card-gradient border border-border/50 rounded-2xl p-6 min-w-0"
            >
              <h4 className="text-2xl font-semibold mb-6 text-center font-spartan">
                {category.title}
              </h4>
              <div className="space-y-3">
                {category.skills.map((skill, index) => {
                  const [label, ...rest] = skill.split(':');
                  const value = rest.join(':').trim();
                  
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors group overflow-x-auto scrollbar-custom"
                    >
                      <div className="w-2 h-2 rounded-full bg-foreground/60 group-hover:bg-foreground transition-colors flex-shrink-0" />
                      <span className="font-lato text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                        {value ? (
                          <>
                            <span className="font-bold">{label}:</span> {value}
                          </>
                        ) : (
                          skill
                        )}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
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

export default SkillsSection;
