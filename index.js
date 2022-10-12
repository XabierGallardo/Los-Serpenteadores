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

// Guardar valor campo email



function validarFormulario() {
    let valorCampoEmail = docGEBI("#email").value;
    return String(valorCampoEmail)
        .toLowerCase()
        .match('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi');
};