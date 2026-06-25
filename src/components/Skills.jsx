import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills, tools } from '../data/portfolioData';
import javaLogo from '../assets/imageslogos/java.png';
import pythonLogo from '../assets/imageslogos/python.png';
import cLogo from '../assets/imageslogos/CLarge.png';
import cppLogo from '../assets/imageslogos/c++.png';
import htmlLogo from '../assets/imageslogos/html.png';
import cssLogo from '../assets/imageslogos/css.png';
import javascriptLogo from '../assets/imageslogos/javascrip.png';
import reactLogo from '../assets/imageslogos/react.png';
import viteLogo from '../assets/imageslogos/vite.png';
import nodeLogo from '../assets/imageslogos/nodejs.png';
import expressLogo from '../assets/imageslogos/expressjs.png';
import mongodbLogo from '../assets/imageslogos/mongodb2.png';
import mysqlLogo from '../assets/imageslogos/mysql.png';
import oracleLogo from '../assets/imageslogos/sql.png';
import githubLogo from '../assets/imageslogos/github.png';
import vscodeLogo from '../assets/imageslogos/vscode.png';
import postmanLogo from '../assets/imageslogos/postman.png';
import netbeansLogo from '../assets/imageslogos/apachenetbeans.png';
import intellijLogo from '../assets/imageslogos/intellij.png';
import clionLogo from '../assets/imageslogos/clion.png';
import pycharmLogo from '../assets/imageslogos/pycharm.png';
import jupyterLogo from '../assets/imageslogos/jupyter.png';
import vercelLogo from '../assets/imageslogos/vercel.png';

const skillImageMap = {
  Java: javaLogo,
  Python: pythonLogo,
  C: cLogo,
  'C++': cppLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: javascriptLogo,
  'React.js': reactLogo,
  Vite: viteLogo,
  'Node.js': nodeLogo,
  'Express.js': expressLogo,
  MongoDB: mongodbLogo,
  MySQL: mysqlLogo,
  OracleDB: oracleLogo,
};

const toolImageMap = {
  GitHub: githubLogo,
  'VS Code': vscodeLogo,
  Postman: postmanLogo,
  NetBeans: netbeansLogo,
  'IntelliJ IDE': intellijLogo,
  CLion: clionLogo,
  Pycharm: pycharmLogo,
  'Jupyter Notebook': jupyterLogo,
  Vercel: vercelLogo,
};

const categoryLabels = {
  language: 'Languages',
  fullstack: 'Full Stack',
};

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export default function Skills() {
  const grouped = groupByCategory(skills);

  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Technical Toolkit"
      subtitle="Languages and technologies I have used so far."
    >
      <div className="space-y-10">
        {Object.entries(grouped).map(([category, items], groupIdx) => (
          <div key={category}>
            <h3 className="mb-4 text-xs font-sans uppercase tracking-[0.2em] text-mist-40 light-mode:text-light-muted">
              {categoryLabels[category] || category}
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {items.map((skill, i) => {
                const logoSrc = skillImageMap[skill.name];

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0 }}
                    whileHover={{ y: -10 }}
                    className="card-surface flex min-h-[96px] flex-col items-center justify-center gap-2 rounded-[1.25rem] p-3 hover:border-signal group cursor-default"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-600/70 bg-ink-900/80 p-1.5 shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110 light-mode:border-light-border light-mode:bg-light-surface/90">
                      {logoSrc && (
                        <img
                          src={logoSrc}
                          alt={skill.name}
                          className="h-18 w-18 object-contain transition-transform duration-200 group-hover:scale-110"
                        />
                      )}
                    </div>
                    <span className="text-center text-sm font-medium text-mist-200 light-mode:text-light-text">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-xs font-sans uppercase tracking-[0.2em] text-mist-40 light-mode:text-light-muted">
            Tools &amp; Platforms
          </h3>
          <div className="flex flex-wrap gap-8">
            {tools.map((tool, i) => {
              const logoSrc = toolImageMap[tool];

              return (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0}}
                  whileHover={{ y: -12 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-600 bg-ink-800/70 p-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-scan light-mode:border-light-border light-mode:bg-light-surface"
                >
                  {logoSrc ? (
                    <img src={logoSrc} alt={tool} className="h-20 w-20 object-contain" />
                  ) : (
                    <span className="text-xs font-sans text-mist-200 light-mode:text-light-text">
                      {tool}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
