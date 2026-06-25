import { motion } from 'framer-motion';
import { FiTarget, FiBookOpen, FiShield } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { profile } from '../data/portfolioData';

const highlights = [
  {
    icon: FiTarget,
    title: 'Problem Solver',
    text: 'Driven by curiosity to break down complex problems into clean, working solutions.',
  },
  {
    icon: FiShield,
    title: 'Security-Minded',
    text: 'Exploring how systems break — and how to build them so they don\u2019t.',
  },
  {
    icon: FiBookOpen,
    title: 'Always Learning',
    text: 'Committed to continuous growth across software development and security practices.',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" label="About" title="Who I Am">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="text-mist-200 light-mode:text-light-text text-lg leading-relaxed">
            {profile.about}
          </p>
          <p className="mt-4 text-mist-400 light-mode:text-light-muted leading-relaxed">
            Currently pursuing a B.E. in Computer Science and Engineering at{' '}
            <span className="text-signal">{profile.college}</span>, maintaining a CGPA of{' '}
            <span className="text-signal font-mono">{profile.cgpa}</span>. Building hands-on
            experience through full-stack projects, lab work, and a growing focus on cybersecurity
            fundamentals.
          </p>
        </motion.div>

        <div className="md:col-span-2 space-y-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-5 flex gap-4"
            >
              <h.icon className="text-signal flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold text-mist-100 light-mode:text-light-text">
                  {h.title}
                </h3>
                <p className="text-sm text-mist-400 light-mode:text-light-muted mt-1">{h.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
