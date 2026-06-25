import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { contact } from '../data/portfolioData';
import gmailLogo from '../assets/imageslogos/gmail.png';
import githubLogo from '../assets/imageslogos/github.png';
import linkedinLogo from '../assets/imageslogos/linkedin.png';
import phoneLogo from '../assets/imageslogos/phone.png';

const links = [
  { image: gmailLogo, label: 'Email', href: `mailto:${contact.email}` },
  { image: githubLogo, label: 'GitHub', href: contact.github },
  { image: linkedinLogo, label: 'LinkedIn', href: contact.linkedin },
  { image: phoneLogo, label: 'Phone', href: contact.phoneHref },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's Connect"
      subtitle="Open to software development and cybersecurity internship opportunities. Reach out through any channel below."
    >
      <div className="flex flex-wrap gap-6 sm:gap-8">
        {links.map(({ image, label, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
            rel={label === 'GitHub' || label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            aria-label={label}
            title={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3"
          >
            <span className="w-16 h-16 flex items-center justify-center border border-ink-600 light-mode:border-light-border group-hover:border-signal group-hover:shadow-[0_0_20px_rgba(61,220,151,0.35)] transition-all duration-300 rounded-full bg-ink-800/70 light-mode:bg-light-surface/90 p-3">
              <img src={image} alt={label} className="w-8 h-8 object-contain" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-mist-400 light-mode:text-light-muted group-hover:text-signal transition-colors duration-300">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
