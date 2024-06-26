// Selecciono el elemento en html al que añadiré la estructura generada con js
const contenedor = document.querySelector('.skills');
const contenedorHobbies = document.querySelector('#contenedorHobbies');

// Alojo la ruta del archivo json que contiene los recursos en una constante
const rutaArchivoJSON = 'iconoSkills.json';
const rutaArchivoJSONHobbies = 'iconoHobbies.json';

// Asigno a constante el nombre de una clase css
const classSkills = ".skillsItem";
const classImgHabilidades = "imagenhabilidades";


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
      // En esta línea se crea una constante a la cual se le asigna la creación de un elemento <li>
      const nuevoLi = document.createElement('li');
      // nuevoLi accede a la función inner... y se le asigna una estructura de html
      nuevoLi.innerHTML = `<img class="${claseImg}" src="${src}" alt="${titulo}"><h4 class="stringHabilidades">${titulo}</h4>`;
      nuevoLi.classList.add(claseli);
      contenedor.appendChild(nuevoLi);
    }
  })
  /* Esta línea está destinada para el tratamiento de errores.
  Usa una función flecha que imprime un error por consola y cita err*/
  .catch(err => console.error('Error al leer el archivo JSON:', err));
}
// Estas son llamadas a la función para pasarle los correspondientes parámetros
generarEstructuras(rutaArchivoJSON, contenedor,classSkills,classImgHabilidades)
generarEstructuras(rutaArchivoJSONHobbies, contenedorHobbies,classSkills, classImgHabilidades)
