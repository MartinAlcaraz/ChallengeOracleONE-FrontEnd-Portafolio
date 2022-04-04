
export const validar = (input) => {
    const tipoDeInput = (input.dataset.tipo);

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
    // para comprobar si un input es valido hay que setear setCustomValidity("")
    // con string vacío ""        
    // para que No se muestren los mensajes de error (por defecto) al
    //  enviar el formulario con datos incorrectos, hay que setear 
    //el setCustomValidity con un char espacio (" ") o con algun string

    if (input.validity.valid) {
        input.setCustomValidity(" ");
        input.parentElement.querySelector(".message-error").innerHTML = "";
        input.parentElement.classList.remove("input__invalid");
    } else {
        input.parentElement.classList.add("input__invalid");
        let mensajeDeError = mostrarMensajeDeError(input, tipoDeInput);
        input.parentElement.querySelector(".message-error").innerHTML = mensajeDeError;
    }
}

const validadores = {
    nombre: (input) => validarNombre(input)
}

function validarNombre(input) {
    //  para que input.checkValidity() no arroje un false y compruebe si es valido
    //  el campo primero hay que setear el setCustomValidity("") en vacío, string vacío.                 
    let mensaje = "";
    
    let texto = input.value.trim();

    if (texto.length < 3) {
        mensaje = "El nombre tiene que tener al menos 3 caracteres."
    } else {
        if (texto.length > 50){
            mensaje = "El nombre tiene que tener menos de 50 caracteres."
        }
    }
    input.setCustomValidity(mensaje);
}
 
    


const tipoDeErrores = [     // vector con los tipos de errores que pueden ocurrir
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooLong",
    "tooShort"
];

const mensajeDeErrores = {
    nombre: {
        valueMissing: "Ingrese su nombre. ",
        tooLong: "El nombre no puede tener mas de 50 caracteres. ",
        tooShort: "El nombre tiene que tener al menos 3 caracteres. "
    },
    email: {

    },
    asunto: {

    },
    mensaje: {

    }
}

function mostrarMensajeDeError(input, tipoDeInput) {
    let mensajes = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log("..error tipo: ", error);
            console.log(mensajeDeErrores[tipoDeInput][error]);
            mensajes += mensajeDeErrores[tipoDeInput][error];
        }

    });
    return mensajes;

}




