import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { achievements } from '../data/portfolioData';

function AchievementCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="card-surface flex flex-col overflow-hidden hover:border-signal group"
    >
      <div className="aspect-[4/3] bg-ink-700 light-mode:bg-light-bg border-b border-ink-600 light-mode:border-light-border flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={`${item.title} certificate`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <FiAward className="text-mist-400/40 light-mode:text-light-muted/40" size={40} />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-base text-mist-100 light-mode:text-light-text">
            {item.title}
          </h3>
          {item.date && (
            <span className="font-mono text-xs text-signal whitespace-nowrap">{item.date}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-mist-400 light-mode:text-light-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      title="Achievements & Certifications"
      subtitle="Recognitions and certifications earned along the way. Edit src/data/portfolioData.js to add yours, including certificate images."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <AchievementCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
