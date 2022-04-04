import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");
const enviar = document.querySelector("[data-enviar]");


inputs.forEach((input) => {
    //console.log(input.attributes.name);
    input.setCustomValidity("El campo está vacío"); 

    input.addEventListener("blur", (input) => {
        validar(input.target)
    });
    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado
        validar(input.target);
    });


});

enviar.addEventListener("click", (event) => {
    //event.preventDefault(); 
});