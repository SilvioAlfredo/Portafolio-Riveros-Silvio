import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0a0d12] px-6 py-8 md:px-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Silvio Riveros</h3>
            <p className="font-mono text-sm text-slate-400">Aprendiendo, construyendo y creciendo cada día.</p>
          </div>

          <div className="flex gap-5 text-xl text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-slate-100">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-slate-100">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition hover:text-slate-100">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-slate-900 pt-4 text-xs md:flex-row md:items-center">
          <p className="text-slate-500">
            © {currentYear} Silvio Riveros. Todos los derechos reservados.
          </p>
          <span className="font-mono text-sky-400">
            Built with React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};