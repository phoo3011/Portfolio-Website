import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Smart Accounting and Management',
    description: 'Web-based POS and accounting management system.',
    organization: 'Ban Mae Hoi Ngoen School',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/Smart%20Accounting%20and%20Management.jpg',
    github: 'https://github.com/POTAEPT/my-shop.git',
    live: '/Smart%20Accounting%20and%20Management.mp4',
    featured: true,
  },
  {
    title: 'Additional System CCTV-Cogniser V1',
    description: 'System dashboard visualizing people counts, parking status, camera zones, and critical event alerts.',
    organization: 'Chiang Mai Provincial Office',
    tags: ['React', 'TypeScript', 'CSS'],
    image: '/Additional%20System%20CCTV-Cogniser%20V1.jpg',
    github: 'https://github.com/phoo3011/Dashboard-ChiangMai-Provincial-Office.git',
    live: '/Additional%20System%20CCTV-Cogniser%20V1.mp4',
    featured: true,
  },
  {
    title: 'Relief Mesh | Winner (Localism, Future Light (Student Prize)',
    description: 'Decentralized disaster relief platform enabling offline SOS communication.',
    organization: 'ETHChiangmai Hackathon 2026',
    tags: ['React', 'TypeScript', 'CSS', 'MetaMask', 'P2P networking', 'Leaflet', 'Ethereum Smart Contracts', 'Ethers.js'],
    image: '/Relief%20Mesh.jpg',
    github: 'https://github.com/POTAEPT/ReliefMesh-UIAteam.git',
    live: '/Relief%20Mesh%20-%20Team%20UIA.mp4',
    visit: 'https://devfolio.co/projects/relief-mesh-7406',
    featured: true,
  },
  {
    title: 'Smart Deck Management',
    description: 'Facilitates table arrangement using 2D/3D models generated from scans or manual input.',
    tags: ['Hylife Hackathon 2025'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Impact Exchange',
    description: 'Chiang Mai community platform for cashless skill sharing.',
    tags: ['Shakesphere x Nomad Summit Buildathon 2026'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    github: '#',
    live: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-6">
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
          <h3 className="text-3xl md:text-5xl font-bold gradient-text font-spartan">
            Projects
          </h3>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    Featured Project
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-glow transition-all font-spartan">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-lato">
                    {project.description}
                  </p>
                  {project.organization && (
                    <p className="text-xs text-muted-foreground mb-4">
                      {project.organization}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-full font-mono text-sm hover:bg-secondary transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full font-mono text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    {project.visit && (
                      <motion.a
                        href={project.visit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full font-mono text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Visit Site
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h4 className="font-mono text-center text-sm text-muted-foreground mb-8 tracking-widest uppercase">
            Other Projects
          </h4>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group card-gradient border border-border/50 rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:text-foreground text-muted-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:text-foreground text-muted-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <h5 className="text-xl font-bold mb-2 group-hover:text-glow transition-all font-spartan">
                {project.title}
              </h5>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 font-lato min-h-[48px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
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

export default ProjectsSection;
