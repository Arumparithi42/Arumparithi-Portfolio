import resumePdf from '../assets/Resume-1st.pdf';
import cargame from '../assets/thumbnails/cargame.png';
import weatherwebapp from '../assets/thumbnails/weatherwebapp.png';
import spamapp from '../assets/thumbnails/spamapp.png';
import keysprint from '../assets/thumbnails/keysprint.png';

// ─────────────────────────────────────────────────────────
// PORTFOLIO DATA
// Edit this file to update content across the entire site.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Arumparithi B',
  initials: 'AB',
  roles: [
    'Computer Science Student',
    'Software Developer',
    'Cybersecurity Enthusiast',
  ],
  college: 'Madras Institute of Technology (MIT), Anna University',
  cgpa: '9.1 / 10',
  about: `Motivated third-year Computer Science student with a strong interest in software development and cybersecurity. Passionate about problem-solving and committed to continuous learning and technical growth.`,
  resumeUrl: resumePdf,
};

export const contact = {
  email: 'arumparithib@.gmail.com', 
  github: 'https://github.com/Arumparithi42', 
  linkedin: 'https://linkedin.com/in/Arumparithi42',
  phone: '+91 73971 58733',
  phoneHref: 'tel:+917397158733',
};

export const skills = [
  { name: 'Java', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'HTML', category: 'fullstack' },
  { name: 'CSS', category: 'fullstack' },
  { name: 'JavaScript', category: 'fullstack' },
  { name: 'React.js', category: 'fullstack' },
  { name: 'Vite', category: 'fullstack' },
  { name: 'Node.js', category: 'fullstack' },
  { name: 'Express.js', category: 'fullstack' },
  { name: 'MongoDB', category: 'fullstack' },
  { name: 'MySQL', category: 'fullstack' },
  { name: 'OracleDB', category: 'fullstack' },
];

export const tools = [
  'GitHub',
  'VS Code',
  'Postman',
  'NetBeans',
  'IntelliJ IDE',
  'CLion',
  'Pycharm',
  'Jupyter Notebook',
  'Vercel',
];

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Madras Institute of Technology, Anna University, Chennai, Tamilnadu',
    duration: 'Aug 2024 – Present',
    detail: 'CGPA: 9.1 / 10',
  },
  {
    degree: 'Higher Secondary Certificate (Class 12th)',
    institution: "St. Mary's Higher Secondary School, Dindigul, Tamilnadu",
    duration: 'Jun 2023 – Apr 2024',
    detail: 'Percentage: 96.8%',
  },
  {
    degree: ' Secondary School Leaving Certificate (Class 10th)',
    institution: "St. Mary's Higher Secondary School, Dindigul, Tamilnadu",
    duration: 'Jun 2021 – Apr 2022',
    detail: 'Percentage: 96.4%',
  },
];

// ─────────────────────────────────────────────────────────
// PROJECTS TEMPLATE
// Add a new object to this array for each project.
// Leave `thumbnail` as null to show a placeholder graphic.
// ─────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'KeySprint',
    description:
      'KeySprint is an interactive typing test web application that helps users evaluate and improve their typing speed, accuracy, and efficiency.',
    thumbnail: keysprint, 
    tags: ['React', 'Node.js','Express','MongoDB','CSS'],
    githubUrl: 'https://github.com/Arumparithi42/FullStackKeySprint',
    liveUrl: 'https://full-stack-key-sprint.vercel.app',
  },
  {
    id: 2,
    title: 'Weather Web App',
    description:
      'A simple React weather application that allows users to search for any city and view real-time weather information using the OpenWeatherMap API.',
    thumbnail: weatherwebapp,
    tags: ['React','JavaScript','CSS','OpenWeatherMap API'],
    githubUrl: 'https://github.com/Arumparithi42/Weather-App',
    liveUrl: 'https://ambitious-stone-02eb58e00.4.azurestaticapps.net/',
  },
  {
    id: 3,
    title: 'Spam Classification Engine',
    description:
      'A simple Spam Classification Engine that classifies a given SMS a spam or ham (not spam).',
    thumbnail: spamapp,
    tags: ['Python','Jupyter Notebook','Pandas','Streamlit'],
    githubUrl: 'https://github.com/Arumparithi42/Simple-Spam-Classification-App',
    liveUrl: 'https://arumparithi-spam-classification-app.streamlit.app',
  },
  {
    id: 4,
    title: 'Car Game',
    description:
      'A simple car game built using pygame where a player should avoid hitting incoming cars and survive as long as possible.',
    thumbnail: cargame,
    tags: ['Python', 'Pygame'],
    githubUrl: 'https://github.com/Arumparithi42/Car-game',
    liveUrl: '',
  },
];

// ─────────────────────────────────────────────────────────
// ACHIEVEMENTS & CERTIFICATIONS TEMPLATE
// Add a new object to this array for each achievement/certificate.
// Leave `image` as null to show a placeholder graphic.
// ─────────────────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: 'Achievement / Certification Title',
    description: 'A short description of the achievement or certification.',
    image: null, // e.g. '/certificates/cert-1.png'
    date: '2025',
  },
  {
    id: 2,
    title: 'Achievement / Certification Title',
    description: 'A short description of the achievement or certification.',
    image: null,
    date: '2025',
  },
  {
    id: 3,
    title: 'Achievement / Certification Title',
    description: 'A short description of the achievement or certification.',
    image: null,
    date: '2025',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
