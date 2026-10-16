import React from 'react';

export const Estadistic = () => {
  const stats = [
    { value: "5+", label: "Años experiencia" },
    { value: "10+", label: "Proyectos realizados." },
    { value: "Univ.", label: "Estudiante" }
  ];

  return (
    <section className="bg-[#090d10] px-6 py-8 md:px-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col rounded-xl border border-slate-800 bg-[#0f1622] p-6">
            <span className="font-mono text-3xl font-bold text-sky-400">{stat.value}</span>
            <span className="mt-1 text-sm text-slate-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};