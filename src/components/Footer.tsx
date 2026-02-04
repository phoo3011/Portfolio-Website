import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
