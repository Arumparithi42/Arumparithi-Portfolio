import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <SectionWrapper id="education" label="Education" title="Academic Timeline">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-ink-600 light-mode:bg-light-border" />

        <div className="space-y-10">
          {education.map((item, i) => (
            <motion.div
              key={item.degree + item.duration}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Node */}
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink-950 light-mode:bg-light-bg border-2 border-signal" />

              <p className="font-mono text-xs uppercase tracking-wider text-signal mb-1">
                {item.duration}
              </p>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-mist-100 light-mode:text-light-text">
                {item.degree}
              </h3>
              <p className="text-mist-400 light-mode:text-light-muted text-sm mt-1">
                {item.institution}
              </p>
              <p className="font-mono text-sm text-scan mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
