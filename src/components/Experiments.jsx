import React, { useState } from 'react';

export const Experiments = () => {
  const [privateMsgVisible, setPrivateMsgVisible] = useState(false);
  const experiments = [
    {
      tags: "[ Godot ]",
      title: "Xilofon",
      description: "Recreando un xilofón con Godot Engine",
      url: "https://github.com/SilvioAlfredo/Xilofon"
    },
    {
      tags: "[ Python ]",
      title: "Automatización de precios",
      description: "Un script de Python que localiza una lista de productos. Se aplican formulas de cálculo y se exporta el pdf",
      private: true
    },
    {
      tags: "[ python / sqlite / mysql / SQLAlchemy ]",
      title: "Migrar de SQLite a MySQL. ",
      description: "Con un script de Python se migra la base de datos del juego Murder Mistery a MySQL.",
      url: "https://github.com/SilvioAlfredo/migrar_SQLite_a_MySQL"
    }
  ];

  return (
    <section id="laboratorio" className="bg-[#12181f] px-6 py-12 md:px-12">
      <div className="mb-8">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-sky-400">
          // <span className="text-slate-400">LABORATORIO</span>
        </span>
        <h2 className="text-3xl font-bold text-slate-100">Experimentos & Proyectos Personales</h2>
      </div>

      <div className="flex flex-col gap-4">
        {experiments.map((item, index) => {
          if (item.private) {
            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setPrivateMsgVisible((v) => !v);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setPrivateMsgVisible((v) => !v);
                  }
                }}
                className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#111517] p-6"
              >
                <div>
                  <span className="font-mono text-xs text-blue-500">{item.tags}</span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                  {privateMsgVisible && (
                    <p className="mt-2 text-sm text-amber-400">Código privado 🔒</p>
                  )}
                </div>
                <span className="shrink-0 rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-400">
                  Código privado 🔒
                </span>
              </div>
            );
          }

          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#111517] p-6 transition hover:border-blue-500 hover:bg-[#151d2e] hover:-translate-y-0.5"
            >
              <div>
                <span className="font-mono text-xs text-blue-500">{item.tags}</span>
                <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
              <span className="text-slate-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};