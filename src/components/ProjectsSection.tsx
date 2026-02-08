import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Relief Mesh | Winner (Localism, Future Light (Student Prize)',
    description: 'Decentralized disaster relief platform enabling offline SOS communication.',
    organization: 'ETHChiangmai Hackathon 2026',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'MetaMask', 'P2P Networking', 'Leaflet', 'Ethereum Smart Contracts', 'Ethers.js'],
    image: '/Relief%20Mesh.jpg',
    github: 'https://github.com/phoo3011/ReliefMesh-TeamUIA',
    live: '/Relief%20Mesh%20-%20Team%20UIA.mp4',
    visit: 'https://devfolio.co/projects/relief-mesh-7406',
    featured: true,
  },
  {
    title: 'Additional System CCTV-Cogniser V1',
    description: 'System dashboard visualizing people counts, camera zones, and critical event alerts.',
    organization: 'Chiang Mai Provincial Office',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/Additional%20System%20CCTV-Cogniser%20V1.jpg',
    github: 'https://github.com/phoo3011/Dashboard-ChiangMai-Provincial-Office.git',
    live: '/Additional%20System%20CCTV-Cogniser%20V1.mp4',
    featured: true,
  },
  {
    title: 'Impact Exchange',
    description: 'Chiang Mai community platform for cashless skill sharing.',
    organization: 'Shakesphere x Nomad Summit Buildathon 2026',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/Impact%20Exchange.jpg',
    github: '#',
    live: '/Impact%20Exchange.mp4',
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
    title: 'Smart Accounting and Management',
    description: 'Web-based POS and accounting management system.',
    tags: ['Ban Mae Hoi Ngoen School'],
    image: '/Smart%20Accounting%20and%20Management.jpg',
    github: 'https://github.com/phoo3011/My-Shop.git',
    live: '/Smart%20Accounting%20and%20Management.mp4',
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
                <motion.div 
                  className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="aspect-video perspective">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"
                    whileHover={{ opacity: 0.3 }}
                  />
                  
                  {/* Animated overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                    animate={{ x: ['0%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    whileHover={{ opacity: 0.5 }}
                  />
                </motion.div>

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
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: tagIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255,255,255,0.2)' }}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground cursor-pointer transition-all"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-full font-mono text-sm hover:bg-secondary transition-all group"
                      >
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                          <Github className="w-4 h-4" />
                        </motion.div>
                        Code
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full font-mono text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                    >
                      <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                      Live Demo
                    </motion.a>
                    {project.visit && (
                      <motion.a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full font-mono text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                      >
                        <motion.div animate={{ rotate: [0, 45, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
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
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotate: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              className="group card-gradient border border-border/50 rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
            >
              <motion.div 
                className="flex items-start justify-between mb-4 min-h-[32px]"
                whileHover={{ x: 5 }}
              >
                <div className="flex gap-3">
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:text-foreground text-muted-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.live && project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:text-foreground text-muted-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
                <motion.div
                  animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all" />
                </motion.div>
              </motion.div>

              <motion.h5 
                className="text-xl font-bold mb-2 group-hover:text-glow transition-all font-spartan"
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h5>
              <motion.p 
                className="text-sm text-muted-foreground mb-4 line-clamp-2 font-lato min-h-[48px]"
                whileHover={{ color: 'rgb(255,255,255,0.8)' }}
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: tagIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, x: 2 }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {tag}
                  </motion.span>
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
