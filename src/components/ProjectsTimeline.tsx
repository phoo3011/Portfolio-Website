import { motion } from 'framer-motion';
import { Layers, Calendar } from 'lucide-react';

const projects = [
  {
    name: 'Government Agency Management System',
    organization: 'Government Agency',
    location: 'Chiang Mai, Thailand',
    period: '2025 - Present',
    description: 'Developed comprehensive management system for government operations with focus on efficiency and user experience.',
    highlights: ['React & TypeScript', 'Database Design', 'User Management'],
  },
  {
    name: 'E-Commerce Platform',
    organization: 'Personal Project',
    location: 'Remote',
    period: '2024',
    description: 'Built full-featured online store with cart, checkout, and payment integration using modern technologies.',
    highlights: ['Next.js', 'Stripe Integration', 'PostgreSQL'],
  },
  {
    name: 'Portfolio Website',
    organization: 'Personal Project',
    location: 'Chiang Mai, Thailand',
    period: '2024',
    description: 'Personal portfolio with dark theme, smooth animations, and responsive design.',
    highlights: ['React', 'Framer Motion', 'Tailwind CSS'],
  },
];

const ProjectsTimeline = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
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
            Projects
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {projects.map((project, index) => (
            <motion.div
              key={project.name}
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
                    <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
                  </div>

                  {/* Project Name & Organization */}
                  <h4 className="text-xl font-bold mb-1 font-spartan">{project.name}</h4>
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Layers className="w-4 h-4 text-primary/60" />
                    <span className="font-mono text-sm text-muted-foreground">{project.organization}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-mono text-sm text-muted-foreground">{project.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {project.highlights.map((highlight) => (
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

export default ProjectsTimeline;
