const contenedor = document.querySelector('.skills');
const rutaArchivoJSON = 'iconoSkills.json';

fetch(rutaArchivoJSON)
  .then(response => response.json())
  .then(data => {
    for (const dato of data) {
      const titulo = dato.title;
      const src = dato.src;
      const nuevoLi = document.createElement('li');
      nuevoLi.innerHTML = `<img class="imagenhabilidades" src="${src}" alt="${titulo}"><h4>${titulo}</h4>`;
      nuevoLi.classList.add('skillsItem');
      contenedor.appendChild(nuevoLi);
    }
  })
  .catch(err => console.error('Error al leer el archivo JSON:', err));

