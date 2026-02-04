import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Digital Industry Integration (DII)',
    school: 'Chiang Mai University',
    faculty: 'College of Arts, Media and Technology (CAMT)',
    location: 'Chiang Mai, Thailand',
    period: '2025 - Present',
    gpa: '',
    description: '',
    highlights: [],
  },
  {
    degree: 'Chiang Mai University Demonstration School',
    school: '',
    faculty: 'Sciences and Mathematics Program',
    location: 'Chiang Mai, Thailand',
    period: '2019 - 2024',
    gpa: '',
    description: '',
    highlights: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Education
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text font-spartan">
            Academic Background
          </h3>
        </motion.div>

        {/* Education Items */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative card-gradient border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                {/* Content */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold mb-1 font-spartan">{edu.degree}</h4>
                          {edu.school && <p className="text-muted-foreground font-mono text-sm">{edu.school}</p>}
                          {edu.faculty && <p className="text-muted-foreground/80 text-sm">{edu.faculty}</p>}
                          <p className="text-muted-foreground/60 text-xs mt-1">{edu.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-mono">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {/* Description */}
                  {edu.description && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {/* Highlights */}
                  {edu.highlights.length > 0 && (
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
