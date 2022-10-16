//MICRO-OPTIMIZACIÓN DE CÓDIGO
const doc = document;
function log(message) { console.log(message); };
function docQS(element) { return doc.querySelector(element); };
function docGEBI(element) { return doc.getElementById(element); };
function docQSA(element) { return doc.querySelectorAll(element); };

// USING FETCH API
// DOCUMENTACIONAPI a usar https://www.anapioficeandfire.com/documentation
// Ejemplo datos libros GOT
let url = 'https://www.anapioficeandfire.com/api/books';

// MAKE REQUEST
let books;
// window.onload = () => fetch(url, { headers: { 'Accept': 'application/vnd.iceandfire+json' } })
//     .then(res => res.json())
//     .then(res => { books = res; log('BOOKS WAS MODIFIED!'); log(books); });



// Asignar validacion formulario al hacer click en boton enviar
docGEBI("enviar").addEventListener("click", function(){
	// Evitar envio por defecto del formulario
	event.preventDefault();
	validarFormulario();
	});


function validarFormulario() {

    // Guardado de valores de los campos del formulario
    let nombre = docGEBI("nombre").value;
    let apellidos = docGEBI("apellidos").value;
    let email = docGEBI("email").value;
    let mensaje = docGEBI("mensaje").value;
    let validacion = docGEBI("validacion");

    // Caracteres en Regex
    let caracteres = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    console.log("Validando formulario");
    
    // Comprobar que no haya campos vacios ni caracteres incompletos en el mail
    if(nombre == "" || apellidos == "" || email == "" || mensaje == "" )  {
        validacion.innerHTML = "Por favor cubra todos los campos";
    } else if(!email.match(caracteres)) {
        validacion.innerHTML = "Mail incorrecto";
    }else {
        validacion.innerHTML = "Formulario validado!";
    }
};
