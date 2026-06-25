import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Wraps a section with consistent scroll-reveal animation, id anchor, and spacing.
 */
export default function SectionWrapper({ id, label, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 px-6 sm:px-10 lg:px-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(label || title) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            {label && <p className="section-label">{label}</p>}
            {title && <h2 className="heading-lg">{title}</h2>}
            {subtitle && (
              <p className="mt-3 text-mist-400 max-w-2xl light-mode:text-light-muted">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
