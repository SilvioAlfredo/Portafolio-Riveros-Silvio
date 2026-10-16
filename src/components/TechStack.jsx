import React from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiRust,
  SiFlask,
  SiSpringboot,
  SiHibernate,
  SiSqlalchemy,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiTailwindcss,
  SiSlint,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiPodman,
  SiApachemaven,
  SiLinux,
  SiVite,
  SiGodotengine,
  SiSelenium,
  SiPostman,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

const ICON_SIZE = 24;

// Algunas tecnologías no tienen icono en Simple Icons:
// monograma textual con el mismo tamaño visual.
function TextGlyph({ text, fontSize = '20px' }) {
  return (
    <span
      aria-hidden="true"
      className="flex items-center justify-center font-mono font-bold leading-none"
      style={{ width: ICON_SIZE, height: ICON_SIZE, fontSize }}
    >
      {text}
    </span>
  );
}

function SkillIcon({ label, children, color }) {
  return (
    <span
      title={label}
      aria-label={label}
      className="flex w-[68px] flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-1 py-2.5 transition hover:-translate-y-0.5 hover:border-sky-500"
    >
      <span style={{ color: color || '#e2e8f0' }} className="flex">
        {children}
      </span>
      <span className="w-full truncate text-center font-mono text-[11px] leading-tight text-slate-400">
        {label}
      </span>
    </span>
  );
}

export const TechStack = () => {
  const categories = [
    {
      title: 'Lenguajes',
      skills: [
        { label: 'Python', icon: <SiPython size={ICON_SIZE} />, color: '#3776AB' },
        { label: 'Java', icon: <FaJava size={ICON_SIZE} />, color: '#ED8B00' },
        { label: 'JavaScript', icon: <SiJavascript size={ICON_SIZE} />, color: '#F7DF1E' },
        { label: 'TypeScript', icon: <SiTypescript size={ICON_SIZE} />, color: '#3178C6' },
        { label: 'Rust', icon: <SiRust size={ICON_SIZE} />, color: '#E2E8F0' },
        { label: 'SQL', icon: <FaDatabase size={ICON_SIZE} />, color: '#38BDF8' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { label: 'Flask', icon: <SiFlask size={ICON_SIZE} />, color: '#E2E8F0' },
        { label: 'Spring Boot', icon: <SiSpringboot size={ICON_SIZE} />, color: '#6DB33F' },
        { label: 'Hibernate', icon: <SiHibernate size={ICON_SIZE} />, color: '#BCAE79' },
        { label: 'SQLAlchemy', icon: <SiSqlalchemy size={ICON_SIZE} />, color: '#D71F00' },
        { label: 'Axum', icon: <TextGlyph text="Ax" />, color: '#E8730C' },
        { label: 'JWT', icon: <TextGlyph text="JWT" fontSize="12px" />, color: '#E2E8F0' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { label: 'HTML', icon: <SiHtml5 size={ICON_SIZE} />, color: '#E34F26' },
        { label: 'CSS', icon: <SiCss size={ICON_SIZE} />, color: '#1572B6' },
        { label: 'React', icon: <SiReact size={ICON_SIZE} />, color: '#61DAFB' },
        { label: 'Next.js', icon: <SiNextdotjs size={ICON_SIZE} />, color: '#E2E8F0' },
        { label: 'Expo', icon: <SiExpo size={ICON_SIZE} />, color: '#E2E8F0' },
        { label: 'Tailwind', icon: <SiTailwindcss size={ICON_SIZE} />, color: '#06B6D4' },
        { label: 'Slint', icon: <SiSlint size={ICON_SIZE} />, color: '#E2E8F0' },
      ],
    },
    {
      title: 'Bases de datos',
      skills: [
        { label: 'MySQL', icon: <SiMysql size={ICON_SIZE} />, color: '#4479A1' },
        { label: 'PostgreSQL', icon: <SiPostgresql size={ICON_SIZE} />, color: '#6397C7' },
        { label: 'SQLite', icon: <SiSqlite size={ICON_SIZE} />, color: '#0F80CC' },
      ],
    },
    {
      title: 'Herramientas',
      skills: [
        { label: 'Git', icon: <SiGit size={ICON_SIZE} />, color: '#F05032' },
        { label: 'GitHub', icon: <SiGithub size={ICON_SIZE} />, color: '#E2E8F0' },
        { label: 'Docker', icon: <SiDocker size={ICON_SIZE} />, color: '#2496ED' },
        { label: 'Podman', icon: <SiPodman size={ICON_SIZE} />, color: '#892CA0' },
        { label: 'Maven', icon: <SiApachemaven size={ICON_SIZE} />, color: '#C71A36' },
        { label: 'Linux', icon: <SiLinux size={ICON_SIZE} />, color: '#FCC624' },
        { label: 'Vite', icon: <SiVite size={ICON_SIZE} />, color: '#A855F7' },
        { label: 'Godot', icon: <SiGodotengine size={ICON_SIZE} />, color: '#478CBF' },
        { label: 'Selenium', icon: <SiSelenium size={ICON_SIZE} />, color: '#43B02A' },
        { label: 'Postman', icon: <SiPostman size={ICON_SIZE} />, color: '#FF6C37' },
      ],
    },
  ];

  return (
    <section id="tecnologias" className="bg-[#12181f] px-6 py-12 md:px-12">
      <div className="mb-8">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-sky-400">
          // <span className="text-slate-400">TECNOLOGÍAS</span>
        </span>
        <h2 className="text-3xl font-bold text-slate-100">Stack tecnológico</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title} className="rounded-xl border border-slate-800 bg-[#090d10] p-6 transition hover:border-slate-700 hover:-translate-y-1">
            <h3 className="mb-4 font-mono text-lg font-medium text-blue-500">{category.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <SkillIcon key={skill.label} label={skill.label} color={skill.color}>
                  {skill.icon}
                </SkillIcon>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
