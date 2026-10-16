import React from 'react';

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="bg-[#090d10] px-6 py-12 md:px-12">
      <div className="mb-8">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-sky-400">
          // <span className="text-slate-400">QUIEN SOY</span>
        </span>
        <h2 className="text-3xl font-bold text-slate-100">Sobre mí</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        {/* Foto de perfil */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="aspect-square overflow-hidden rounded-xl border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <img 
              src={`${import.meta.env.BASE_URL}assets/mi_foto.jpg`} 
              alt="Silvio Riveros" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="md:col-span-8 lg:col-span-9">
          <h3 className="mb-4 text-xl font-semibold text-sky-400">
            Técnico Superior en Desarrollo de Software
          </h3>
          <p className="mb-6 max-w-2xl text-slate-400 leading-relaxed">
            Me especializo en desarrollo backend y fullstack, con experiencia en lenguajes como Java, Spring Boot y tecnologías web modernas. Me enfoco en escribir código limpio, escalable y mantenible.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg border border-slate-800 bg-[#0f1622] px-4 py-2 font-mono text-xs text-slate-200">
              Backend
            </span>
            <span className="rounded-lg border border-slate-800 bg-[#0f1622] px-4 py-2 font-mono text-xs text-slate-200">
              Frontend
            </span>
            <span className="rounded-lg border border-slate-800 bg-[#0f1622] px-4 py-2 font-mono text-xs text-slate-200">
              Modelado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};