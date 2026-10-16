import React from 'react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-[#090d0f] px-6 py-4 backdrop-blur-md md:px-12">
      <div className="font-mono text-base font-bold text-slate-100 select-none">
        <span className="text-sky-400">const</span>{' '}
        <span>Silvio Riveros</span>{' = '}
        <span className="text-blue-500">{"{}"}</span>
      </div>
      <nav className="hidden items-center gap-6 font-mono text-sm text-slate-400 sm:flex">
        <a href="#inicio" className="transition-colors hover:text-emerald-400">Inicio</a>
        <a href="#sobre-mi" className="transition-colors hover:text-emerald-400">Sobre mí</a>
        <a href="#tecnologias" className="transition-colors hover:text-emerald-400">Tecnologías</a>
        <a href="#proyectos" className="transition-colors hover:text-emerald-400">Proyectos</a>
        <a href="#contacto" className="transition-colors hover:text-emerald-400">Contacto</a>
      </nav>
    </header>
  );
};