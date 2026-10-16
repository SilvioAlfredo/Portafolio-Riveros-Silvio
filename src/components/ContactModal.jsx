import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Mismos parámetros que en Portafolio-Riveros-Silvio/js/form.js
const SERVICE_ID = 'default_service';
const TEMPLATE_ID = 'template_gxu3hq9';
const PUBLIC_KEY = 'b2V7O-ng_I3KyVUBo';

export function ContactModal({ open, onClose }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const validate = (data) => {
    if (!data.name.trim() || data.name.length > 50) return 'El nombre es requerido (máx. 50 caracteres).';
    if (!data.email.trim() || data.email.length > 50) return 'El email es requerido (máx. 50 caracteres).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Ingresá un correo electrónico válido.';
    if (!data.asunto.trim() || data.asunto.length > 50) return 'El asunto es requerido (máx. 50 caracteres).';
    if (!data.message.trim() || data.message.length > 300) return 'El mensaje es requerido (máx. 300 caracteres).';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      asunto: formRef.current.asunto.value,
      message: formRef.current.message.value,
    };

    const error = validate(formData);
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    setStatus({ type: 'sending', message: 'Enviando...' });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ type: 'success', message: '¡Consulta enviada! Me pondré en contacto a la brevedad.' });
      formRef.current.reset();
    } catch (err) {
      setStatus({ type: 'error', message: 'No se pudo enviar. Intentá nuevamente.' });
      console.error(err);
    }
  };

  const closeOnBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={closeOnBackdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-xl border border-slate-800 bg-[#0d1319] p-6 text-left shadow-2xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-100">Contacto</h3>
            <p className="mt-1 text-sm text-slate-400">
              Completá el formulario y me pondré en contacto lo antes posible.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="rounded-md px-2 py-1 text-xl leading-none text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            ×
          </button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-300">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="¿Cuál es su nombre?"
              maxLength={50}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#090d10] px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="correo" className="mb-1 block text-sm font-medium text-slate-300">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="email"
              placeholder="texto@texto.com"
              maxLength={50}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#090d10] px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="asunto" className="mb-1 block text-sm font-medium text-slate-300">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              placeholder="¿Cuál es su asunto?"
              maxLength={50}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#090d10] px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-slate-300">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="message"
              placeholder="Mensaje"
              maxLength={300}
              required
              rows={4}
              className="w-full resize-none rounded-lg border border-slate-700 bg-[#090d10] px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none"
            />
          </div>

          {status.type !== 'idle' && (
            <p
              aria-live="polite"
              className={
                status.type === 'success'
                  ? 'text-sm text-emerald-400'
                  : status.type === 'error'
                    ? 'text-sm text-red-400'
                    : 'text-sm text-slate-400'
              }
            >
              {status.message}
            </p>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={status.type === 'sending'}
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.type === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
