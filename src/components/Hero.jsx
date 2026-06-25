import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import { profile, contact } from '../data/portfolioData';

function useTypedRotation(words, typingSpeed = 55, pauseTime = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), typingSpeed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typed = useTypedRotation(profile.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-20 pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative grid background */}
      <div
        className="absolute inset-0 bg-grid bg-grid-pattern opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950 light-mode:via-light-bg/40 light-mode:to-light-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-signal text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-signal rounded-full animate-pulseRing" />
          status: available for internships
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-mist-100 light-mode:text-light-text tracking-tight leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 h-8 sm:h-9 flex items-center"
        >
          <span className="font-mono text-lg sm:text-2xl text-scan">
            {'> '}
            {typed}
            <span className="inline-block w-[2px] h-5 sm:h-6 bg-scan ml-1 align-middle animate-blink" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-mist-400 light-mode:text-light-muted text-base sm:text-lg leading-relaxed"
        >
          {profile.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-mist-200 light-mode:text-light-text"
        >
          <span className="flex items-center gap-2">
            <span className="text-signal">CGPA</span> {profile.cgpa}
          </span>
          <span className="hidden sm:inline text-ink-600">|</span>
          <span className="text-mist-400 light-mode:text-light-muted">{profile.college}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
            View Projects
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary">
            <FiMail size={16} /> Get In Touch
          </a>
          <a href={profile.resumeUrl} className="btn-secondary" download="Arumparithi-B-Resume.pdf" rel="noopener noreferrer">
            <FiDownload size={16} /> Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist-400 hover:text-signal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
