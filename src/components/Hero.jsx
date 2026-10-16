import React from 'react';

export const Hero = () => {
  return (
    <section id="inicio" className="bg-[#090d10] grid grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-12 md:px-12 lg:py-20">
      {/* Columna Izquierda: Presentación */}
      <div className="md:col-span-7">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-sky-400">
          // <span className="text-slate-400">DESARROLLADOR Y DOCENTE</span>
        </span>
        <h1 className="mb-4 text-4xl font-extrabold text-slate-100 md:text-5xl">
          Hola, soy <span className="text-4x1">Silvio</span>
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-slate-300">
          Desarrollador de Software
        </h2>
        <p className="mb-8 max-w-xl text-slate-400">
          Formado en el desarrollo backend y el diseño de soluciones de software escalables. Combino una sólida base lógica en Java, Spring Boot y bases de datos con experiencia en metodologías ágiles, contenedores y diseño de interfaces claras e intuitivas.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Ver proyectos <span>→</span>
          </a>
          <a
            href="https://github.com/SilvioAlfredo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Columna Derecha: Tarjeta IDE */}
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#12181f] font-mono text-sm shadow-2xl md:col-span-5">
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#12181f] px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="text-xs text-slate-400">silvio_riveros.py</span>
        </div>
        <div className="p-5 text-slate-400 leading-relaxed overflow-x-auto">
          <pre>
            <code>
              <span className="text-rose-500">import</span> software_developer <span className="text-rose-500">as</span> sd{'\n\n'}
              <span className="text-rose-500">class</span> <span className="text-sky-400">Developer</span>(<span className="text-sky-400">sd.Developer</span>):{'\n'}
              {'  '}<span className="text-rose-500">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-500">self</span>):{'\n'}
              {'    '}<span className="text-orange-500">self</span>.name = <span className="text-emerald-400">"Silvio Riveros"</span>{'\n'}
              {'    '}<span className="text-orange-500">self</span>.role = [<span className="text-emerald-400">"Developer"</span>, <span className="text-emerald-400">"Tecnico"</span>]{'\n'}
              {'    '}<span className="text-orange-500">self</span>.stack = [<span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"SpringBoot"</span>, <span className="text-emerald-400">"React"</span>]{'\n\n'}
              {'  '}<span className="text-rose-500">def</span> <span className="text-blue-400">work</span>(<span className="text-orange-500">self</span>, topic):{'\n'}
              {'    '}<span className="text-rose-500">return</span> <span className="text-emerald-400">f"Trabajando &#123;topic&#125; con simplicidad"</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};