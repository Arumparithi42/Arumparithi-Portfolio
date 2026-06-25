import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const hasLinks = project.githubUrl || project.liveUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="card-surface flex flex-col overflow-hidden hover:border-signal group"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-ink-700 light-mode:bg-light-bg border-b border-ink-600 light-mode:border-light-border flex items-center justify-center overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <FiFolder className="text-mist-400/40 light-mode:text-light-muted/40" size={40} />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-mist-100 light-mode:text-light-text">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-mist-400 light-mode:text-light-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {project.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 bg-ink-700 light-mode:bg-light-bg text-scan border border-ink-600 light-mode:border-light-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-mono text-mist-200 light-mode:text-light-text hover:text-signal transition-colors duration-200"
            >
              <FiGithub size={16} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-mono text-mist-400/50 light-mode:text-light-muted/50 cursor-not-allowed">
              <FiGithub size={16} /> Code
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-mono text-mist-200 light-mode:text-light-text hover:text-signal transition-colors duration-200"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-mono text-mist-400/50 light-mode:text-light-muted/50 cursor-not-allowed">
              <FiExternalLink size={16} /> Live Demo
            </span>
          )}
        </div>

        {!hasLinks && (
          <p className="mt-3 font-mono text-[11px] text-mist-400/60 light-mode:text-light-muted/60">
            add links in portfolioData.js
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="What I've Built"
      subtitle="A selection of projects spanning full-stack development and applied problem-solving. Edit src/data/portfolioData.js to add your own."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
