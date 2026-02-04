import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: Phone, label: 'Phone', value: '+66 123 456 789', href: 'tel:+66123456789' },
  { icon: MapPin, label: 'Location', value: 'Chiang Mai, Thailand', href: '#' },
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
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-6 font-spartan">
            Get In Touch
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? 
            Feel free to reach out - I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-mono text-lg font-semibold mb-6 font-spartan">Contact Information</h4>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
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
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="font-mono text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 border border-border/50 rounded-full hover:bg-foreground hover:text-background transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="card-gradient border border-border/50 rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-mono text-sm rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
