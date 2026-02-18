import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    location: 'Chiang Mai, Thailand',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Managing a team of 5 developers.',
    highlights: ['Led migration to microservices', 'Improved performance by 40%', 'Mentored junior developers'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Agency',
    location: 'Chiang Mai, Thailand',
    period: '2020 - 2022',
    description: 'Built custom web solutions for various clients across e-commerce, healthcare, and finance sectors.',
    highlights: ['Delivered 20+ client projects', 'Implemented CI/CD pipelines', 'React & Vue expertise'],
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Inc.',
    location: 'Remote',
    period: '2018 - 2020',
    description: 'Developed responsive web interfaces and single-page applications with focus on user experience.',
    highlights: ['Built component library', 'A/B testing integration', 'Mobile-first development'],
  },
];
const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Career Path
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text font-spartan">
            Work Experience
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground rounded-full transform -translate-x-1/2 border-4 border-background z-10" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className={`card-gradient border border-border/50 rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300`}>
                  {/* Period badge */}
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>

                  {/* Role & Company */}
                  <h4 className="text-xl font-bold mb-1 font-spartan">{exp.role}</h4>
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary/60" />
                    <span className="font-mono text-sm text-muted-foreground">{exp.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-mono text-sm text-muted-foreground">{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternate layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
