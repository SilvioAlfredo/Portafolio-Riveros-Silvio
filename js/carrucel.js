const contenedorFormacion = document.querySelector('.formaciones');
const rutaArchivoJSONFormacion = "imgFormaciones.json";

const classFormacion = ".formaciónsItem"
const classImgFormacion = "imagenFormacion";

// función con 4 parámetros que genera parte del html
function generarEstructuras(ruta,contenedor,claseli,claseImg){
  fetch(ruta)
  .then(response => response.json())
  // en este punto se usa una función flecha para acceder a los datos del json
  .then(data => {
     // este bucle itera sobre el json 
    for (const dato of data) { 
      const titulo = dato.title; 
      const src = dato.src;
      const subtitle = dato.subtitle;
      const location = dato.location;
      // En esta línea se crea una constante a la cual se le asigna la creación de un elemento <li>
      const nuevoLi = document.createElement('li');
      // nuevoLi accede a la función inner... y se le asigna una estructura de html
      nuevoLi.innerHTML = `<img class="${claseImg}" src="${src}" alt="${titulo}"><h4 class="stringHabilidades"><strong>${titulo}</strong><br>${subtitle}<br>${location}</h4>`;
      nuevoLi.classList.add(claseli);
      contenedor.appendChild(nuevoLi);
    }
  })
  /* Esta línea está destinada para el tratamiento de errores.
  Usa una función flecha que imprime un error por consola y cita err*/
  .catch(err => console.error('Error al leer el archivo JSON:', err));
}
generarEstructuras(rutaArchivoJSONFormacion, contenedorFormacion, classFormacion, classImgFormacion)