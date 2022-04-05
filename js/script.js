import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");
const enviar = document.querySelector("[data-enviar]");


inputs.forEach((input) => {
    //console.log(input.attributes.name);

    input.addEventListener("blur", (input) => {
        validar(input.target)
    });

    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado
        
        const tipoDeInput = input.target.dataset.tipo;

        // if ( tipoDeInput == "nombre"){        // comprueba solo el campo data-tipo="nombre" en cada ingreso de teclado
        //       validar(input.target);
        // }   
        validar(input.target);
    });

});

enviar.addEventListener("click", () => {
    //event.preventDefault(); 
    inputs.forEach( (input) => {
        validar(input);
    });

});