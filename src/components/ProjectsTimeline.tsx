import { motion } from 'framer-motion';
import { Layers, Calendar, ArrowUpRight } from 'lucide-react';

type Project = {
  name: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  link: string;
};

const projects: Project[] = [
      {
    name: 'Data Storytelling & Dashboard Design by Zygen',
    organization: 'CAMT, CMU',
    location: 'Thailand',
    period: '2026',
    description: 'A UX/UI and Data Workshop on driving business insights through storytelling and dashboards.',
    highlights: [],
    link: 'https://www.facebook.com/CAMTOfficial/posts/pfbid02rVMJfXTM2VDuDocFUN88kWsqGq5JiYHEqBQh86x3PREdyeNq8UgdvP89cKGZAUupl?rdid=uvwfltcY3BihcNll#',
  },
  {
    name: 'Crafting World-Class UX/UI with Irene Pereyra',
    organization: 'CAMT, CMU',
    location: 'Thailand',
    period: '2026',
    description: 'UX/UI design talk on world-class design principles and real-world best practices.',
    highlights: [],
    link: 'https://www.facebook.com/story.php?story_fbid=pfbid0vES4ztuioq19bs1TFAubYLeu83n1J1PGcg8aUjVcrhLbjuWG65XuWt7YH5RmvyCHl&id=100064686758968&_rdr',
  },
  {
    name: 'Young DEV CAMT 2026 (STAFF)',
    organization: 'CAMT, CMU',
    location: 'Thailand',
    period: '2026',
    description: 'Provided hands-on guidance to workshop participants.',
    highlights: [],
    link: 'https://www.facebook.com/CAMTOfficial/posts/1309124051253808/',
  },
  {
    name: 'UX/UI Foundation Program by T.C.C. Technology',
    organization: 'CAMT, CMU',
    location: 'Thailand',
    period: '2025',
    description: 'A foundational UX/UI program covering user-centered design and hands-on interface design workshops.',
    highlights: [],
    link: 'https://www.facebook.com/story.php?story_fbid=pfbid02iT71KadiZrPjv2xS4uaHtLzuDpa64oSXtQqQFxAx7hTsiYtc2JaygCKBbS34nt1hl&id=100064686758968&_rdr',
  },
];

const ProjectsTimeline = () => {
  return (
    <section id="activities" className="relative py-24 px-6">
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
            Activities
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground rounded-full transform -translate-x-1/2 border-4 border-background z-10" />

              <div className={`relative flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <motion.div
                  className="group card-gradient border border-border/50 rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300"
                  whileHover={{ y: -10, rotate: index % 2 === 0 ? -1.5 : 1.5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-spartan text-sm text-muted-foreground">{project.period}</span>
                  </div>

                  <motion.h4
                    className="text-xl font-bold mb-1 font-spartan group-hover:text-glow transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.name}
                  </motion.h4>

                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Layers className="w-4 h-4 text-primary/60" />
                    <span className="font-mono text-sm text-muted-foreground">{project.organization}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-mono text-sm text-muted-foreground">{project.location}</span>
                  </div>

                  <motion.p
                    className="text-muted-foreground text-sm leading-relaxed mb-4"
                    whileHover={{ color: 'rgb(255,255,255,0.82)' }}
                  >
                    {project.description}
                  </motion.p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {project.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(255,255,255,0.2)' }}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* View button */}
                <div
                  className={`mt-3 md:mt-0 md:absolute md:top-[85%] md:-translate-y-1/2 z-20 ${
                    index % 2 === 0
                      ? 'md:right-full md:mr-4'
                      : 'md:left-full md:ml-4'
                  }`}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-mono font-medium text-zinc-900 shadow-sm transition-all duration-300 hover:shadow-md group"
                    whileHover={{ scale: 0.92 }}
                    whileTap={{ scale: 0.88 }}
                  >
                    <motion.span
                      className="inline-flex"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.span>
                    <motion.span whileHover={{ scale: 1.087 }}>View</motion.span>
                  </motion.a>
                </div>
              </div>

              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>

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