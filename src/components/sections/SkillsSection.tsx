import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Technical Skills",
    items: [
      {
        label: "Programming",
        tags: ["Java", "Python", "JavaScript", "TypeScript"],
      },
      {
        label: "Web Development",
        tags: ["HTML", "CSS", "Tailwind CSS", "React"],
      },
      { label: "Database", tags: ["MySQL", "SQLite"] },
      {
        label: "UX/UI Design",
        tags: ["Wireframing", "User Flow", "Prototyping", "Figma"],
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        label: "",
        tags: [
          "Critical Thinking",
          "Emotional Intelligence",
          "Growth Mindset",
          "Time Management",
          "etc",
        ],
      },
    ],
  },
  {
    title: "Languages",
    items: [{ label: "", tags: ["Thai (Native)", "English (Intermediate)"] }],
  },
];

const tagVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.06,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

const SkillCard = ({
  category,
  delay,
  className = "",
}: {
  category: (typeof skillCategories)[0];
  delay: number;
  className?: string;
}) => {
  let tagOffset = 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`card-gradient border border-border/50 rounded-2xl p-6 ${className}`}
    >
      <h4 className="text-xl font-semibold mb-6 text-center font-marcellus">
        {category.title}
      </h4>
      <div className="space-y-4">
        {category.items.map((group) => {
          const groupOffset = tagOffset;
          tagOffset += group.tags.length;
          return (
            <div key={group.label || "default"}>
              {group.label && (
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {group.label}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    custom={groupOffset + i}
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1 rounded-full text-xs font-sfpro border border-border/60 bg-secondary/50 text-foreground cursor-default select-none"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-merriweather text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            ABOUT ME
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text font-marcellus">
            Skills
          </h3>
        </motion.div>

        {/* Layout: Technical left | Soft Skills + Languages right */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <SkillCard category={skillCategories[0]} delay={0} />

          <div className="flex flex-col gap-6 h-full">
            <SkillCard category={skillCategories[1]} delay={0.15} />
            <SkillCard
              category={skillCategories[2]}
              delay={0.25}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
