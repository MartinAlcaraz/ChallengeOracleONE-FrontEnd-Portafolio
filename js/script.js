import { validar } from "./validaciones.js";

const inputs= document.querySelectorAll(".input");
const enviar = document.querySelector("[data-enviar]");

inputs.forEach( (input) => {
    //console.log(input.attributes.name);
    input.addEventListener("blur", (input) => {
        validar(input.target) });
});

enviar.addEventListener("click", (event) => {
    event.preventDefault();
    
    
})