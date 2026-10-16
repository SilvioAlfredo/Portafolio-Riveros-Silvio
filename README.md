# Portafolio Riveros Silvio — React + Vite

Portfolio migrado desde `portafolio-react` para publicarse en GitHub Pages en:

https://silvioalfredo.github.io/Portafolio-Riveros-Silvio/

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy a GitHub Pages

Este repo usa GitHub Actions (`.github/workflows/deploy.yml`):

1. Cada push a `master` ejecuta `npm ci && npm run build`.
2. Sube `dist/` como artifact y lo publica en Pages.
3. Se genera `404.html` (copia de `index.html`) para SPA.

Configuración clave para Pages (project site):

- `vite.config.js` → `base: '/Portafolio-Riveros-Silvio/'`
- Imágenes en `src/` usan `${import.meta.env.BASE_URL}assets/...` en vez de `/assets/...`
- `public/.nojekyll` evita que Jekyll ignore archivos con `_`

Activar en GitHub: Settings → Pages → Source: **GitHub Actions**.

## Notas de migración

- Se reemplazó el sitio estático anterior (HTML/CSS/JS, `css/`, `js/`, `img/`, `sections/`) por este proyecto React. El historial anterior queda en git.
- Se eliminó `node_modules/` del tracking (estaba commiteado por error). `.gitignore` ya cubre `node_modules` y `dist`.
- Se agregaron dependencias faltantes: `tailwindcss@^4.3.3` y `@tailwindcss/vite@^4.3.3` (antes solo estaban en la carpeta padre).
