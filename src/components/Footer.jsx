import { profile } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-600 light-mode:border-light-border px-6 sm:px-10 lg:px-20 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="font-mono text-mist-400 light-mode:text-light-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-mist-400/70 light-mode:text-light-muted/70">
          Built with React, Vite &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
