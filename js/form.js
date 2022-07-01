var names = document.querySelector(".campoNombre");
var email = document.querySelector(".campoEmail");
var asunto = document.querySelector(".campoAsunto");
var mensaje = document.querySelector(".mensaje");

function validarNombre(){
    nombre = names.value;
    if(nombre.length < 50){
        var validarNombre = true;
        console.log("correcto")
        return validarNombre;
    }else{
        alert("Exede el maximo permitido.");
        return false;
    }
}
function validarEmail(){
    correo = email.value;
    if (correo.length < 50){
        var validarEmail = true;
        console.log("correcto")
        return validarEmail;
    }else{
        alert("Exede el maximo permitido.");
        return false;
    }
}
function validarAsunto(){
    tema = asunto.value;
    if(tema.length < 50){
        var validarAsunto = true;
        console.log("correcto")
        return validarAsunto;
    }else{
        alert("Exede el maximo permitido.");
        return false;
    }
}
function validarMensaje(){
    messaje = mensaje.value;
    if(messaje.length < 300){
        var validarMensaje = true;
        console.log("correcto")
        return validarMensaje;
    }else{
        alert("Exede el maximo permitido.");
        return false;
    }
}

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if(validarNombre() == true){
        console.log("nombre verificado")
        if (validarEmail() == true){ 
            console.log("email verificado")
            if (validarAsunto() == true){ 
                console.log("asunto verificado")
                if(validarMensaje() == true){

                    console.log("mensaje verificado")
                    
                    btn.value = 'Sending...';

                    const serviceID = 'default_service';
                    const templateID = 'template_gxu3hq9';

                    emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                    btn.value = 'Enviar mensaje';
                    alert('Sent!');
                    }, (err) => {
                    btn.value = 'Enviar mensaje';
                    alert(JSON.stringify(err));
                });
                }
            }
        }
    }else if(validarNombre == false && validarEmail == false && validarAsunto == false && validarMensaje == false){
        alert("Alguno de los campos es incorrecto!");
    }

});
