import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'phooriwat3011@gmail.com', href: 'mailto:phooriwat3011@gmail.com' },
  { icon: Phone, label: 'Phone', value: '(+66) 98 952 6051', href: 'tel:+66989526051' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
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
          <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-6 font-spartan">
            Contact
          </h3>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 w-full max-w-xl"
          >
            <h4 className="text-2xl font-semibold mb-6 font-spartan">Contact Information</h4>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? undefined : '_blank'}
                rel={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 card-gradient border border-border/50 rounded-xl hover:border-foreground/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <info.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-spartan text-muted-foreground uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="font-medium font-lato">{info.value}</p>
                </div>
              </motion.a>
            ))}

            
          </motion.div>

          
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

export default ContactSection;
