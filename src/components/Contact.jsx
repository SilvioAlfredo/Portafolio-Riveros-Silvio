import React, { useState } from 'react';
import profile from '../data/profile.json';
import { ContactModal } from './ContactModal';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="contacto" className="bg-[#090d10] px-6 py-16 text-center md:px-12">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-sky-400">
          // <span className="text-slate-400">DISPONIBILIDAD</span>
        </span>
      <h2 className="mb-4 text-3xl font-bold text-slate-100">¿Tenés un proyecto en mente?</h2>
      <p className="mx-auto mb-8 max-w-xl text-slate-400">
        Estoy disponible para oportunidades laborales, proyectos freelance o colaboraciones. Hablemos sobre cómo llevar a cabo tus ideas.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Enviar Email
        </button>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="www.linkedin.com/in/silvioriveros"
          className="rounded-lg border border-slate-800 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          LinkedIn
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-800 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          GitHub
        </a>
      </div>
      {isModalOpen && (
        <ContactModal key="contact-modal" open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}