import React, { useState } from 'react';

export const Projects = () => {
  // Estado para controlar qué video se está reproduciendo (guarda la URL del video o null si está cerrado)
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const projects = [
    {
      title: "Juego trivia",
      description: "Un juego sencillo de trivia, con enfoque educativo.",
      image: `${import.meta.env.BASE_URL}assets/projects/trivia-app.png`,
      tags: ["Nextjs", "Flask", "SQLITE"],
      demoUrl: "https://www.youtube.com/embed/EnnhvEgU_3o",
      codeUrl: "#",
      isPrivate: true
    },
    {
      title: "Gestión Inventario",
      description: "Herramienta para gestionar el Stock de un negocio",
      image: `${import.meta.env.BASE_URL}assets/projects/gestion-inventario.png`,
      tags: ["Rust", "Slint", "SQLITE"],
      demoUrl: "https://www.youtube.com/embed/MLV0GHTsHP0",
      codeUrl: "#",
      isPrivate: true
    },
    {
      title: "Al Lado - Bolsa de trabajo",
      description: "Una app social que vincula necesidades con mano de obra cercana",
      image: `${import.meta.env.BASE_URL}assets/projects/AlLado.png`,
      tags: ["Nextjs", "Expo", "Springboot", "Postgres"],
      demoUrl: "https://www.youtube.com/embed/Y8hzo_WjQF4",
      codeUrl: "#",
      isPrivate: true
    },
    {
      title: "Aplicación Clima",
      description: "App móvil con React Native + Expo (SDK 57) y Expo Router. Clima actual por GPS, pronóstico 5 días / 24 h, búsqueda de ciudades y favoritos. Consume Open-Meteo sin clave.",
      image: `${import.meta.env.BASE_URL}assets/projects/app-clima.png`,
      tags: ["React Native", "Expo", "Expo Router", "Open-Meteo"],
      demoUrl: "https://www.youtube.com/embed/8vdzou_t-r8",
      codeUrl: "https://github.com/SilvioAlfredo/app-clima-mobile",
      isPrivate: false
    },
    {
      title: "App Task",
      description: "Gestor de tareas de escritorio en Rust + Slint para Linux. Múltiples listas, filtros, tema claro/oscuro, ES/EN, zoom de texto y guardado local. Empaquetado Flatpak en camino.",
      image: `${import.meta.env.BASE_URL}assets/projects/app-task.png`,
      tags: ["Rust", "Slint"],
      demoUrl: "https://www.youtube.com/embed/5eMGEii0u8A",
      codeUrl: "https://github.com/SilvioAlfredo/app-task",
      isPrivate: false
    },
    {
      title: "Biblioteca Horizonte",
      description: "Sistema de gestión y reserva de recursos. Frontend Next.js 15 + React 19 + Tailwind, backend Flask + SQLAlchemy + JWT. Evita duplicaciones horarias con trazabilidad de estados.",
      image: `${import.meta.env.BASE_URL}assets/projects/biblioteca-horizonte.png`,
      tags: ["Next.js", "React", "Flask", "JWT", "SQLAlchemy"],
      demoUrl: "https://www.youtube.com/embed/3haayauNMGs",
      codeUrl: "https://github.com/SilvioAlfredo/biblioteca-horizonte",
      isPrivate: false
    }
  ];

  return (
    <section id="proyectos" className="bg-[#090d10] px-6 py-12 md:px-12 relative">
      <div className="mb-8">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-sky-400">
          // <span className="text-slate-400">PROYECTOS</span>
        </span>
        <h2 className="text-3xl font-bold text-slate-100">Proyectos Destacados</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0f1622] p-6 transition hover:border-slate-700 hover:-translate-y-1"
          >
            <div>
              <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 text-2xl font-bold text-slate-100">{project.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-slate-400">{project.description}</p>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[15px]">
              {/* Botón Ver proyecto: abre el modal si hay video */}
              {project.demoUrl && project.demoUrl !== "#" ? (
                <button 
                  onClick={() => setActiveVideoUrl(project.demoUrl)}
                  className="text-sky-400 hover:underline cursor-pointer bg-transparent border-none p-0 font-mono text-sm"
                >
                  Ver proyecto ↗
                </button>
              ) : (
                <span className="text-slate-600">Demo N/D</span>
              )}

              {/* Enlace de Código / Solicitar acceso */}
              {project.isPrivate ? (
                <a 
                  href="#contacto" 
                  className="text-amber-400 transition hover:text-amber-300 hover:underline"
                  title="Código privado. Haz clic para solicitar acceso por contacto."
                >
                  Código privado 🔒
                </a>
              ) : (
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-400 hover:underline"
                >
                  Ver código ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* MODAL / MINI VENTANA FLOTANTE PARA EL VIDEO */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-xl border border-slate-800 bg-[#12181f] p-4 shadow-2xl">
            
            {/* Botón para cerrar el modal */}
            <button 
              onClick={() => setActiveVideoUrl(null)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-200 border border-slate-700 hover:bg-rose-600 transition"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Contenedor responsivo de YouTube (Aspect Ratio 16:9) */}
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe 
                src={`${activeVideoUrl}?autoplay=1`} 
                title="Demo del proyecto" 
                className="h-full w-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};