import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiTerminal } from 'react-icons/fi';
import { navLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/90 light-mode:bg-light-bg/90 backdrop-blur-md border-b border-ink-600 light-mode:border-light-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-mono text-signal font-semibold text-lg"
        >
          <FiTerminal className="text-signal" />
          <span>AB</span>
          <span className="w-2 h-4 bg-signal inline-block animate-blink" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-mono text-sm uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-signal'
                      : 'text-mist-400 hover:text-mist-100 light-mode:hover:text-light-text'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-signal"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="w-9 h-9 flex items-center justify-center border border-ink-600 light-mode:border-light-border text-mist-100 light-mode:text-light-text hover:border-signal hover:text-signal transition-colors duration-200"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center border border-ink-600 light-mode:border-light-border text-mist-100 light-mode:text-light-text"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink-950/95 light-mode:bg-light-bg/95 backdrop-blur-md border-b border-ink-600 light-mode:border-light-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block font-mono text-sm uppercase tracking-wider text-mist-200 hover:text-signal light-mode:text-light-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
