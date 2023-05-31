const textArea = document.querySelector(".textArea");
const textAreaMensaje = document.querySelector(".textAreaMensaje");
const btnCopiar = document.querySelector(".btnCopiar");

//validar con expresiones regulares de solo permitir minúsculas.
function validarTexto(){
    var texto = document.querySelector(".textArea").value;
    var regexValidar = (/^[a-z\s]*$/);
    var validar = regexValidar.test(texto);
    if( !validar || validar === 0 ){
        alert("Error, solo se permiten letras minúsculas y sin acentos")
    }else{
        return true;
    }
}

// Utilizando un for y un switch
function encriptarPalabra(texto) {
    if(validarTexto()=== true){
        var encriptado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
      
        switch (letra.toLowerCase()) {
        case "e":
            encriptado += "enter";
            break;
        case "i":
            encriptado += "imes";
            break;
        case "a":
            encriptado += "ai";
            break;
        case "o":
            encriptado += "ober";
            break;
        case "u":
            encriptado += "ufat";
            break;
        default:
            encriptado += letra;
        }
    }
    return encriptado;
    }
    
}

function btnEncriptar(){
    const textoEncriptado = encriptarPalabra(textArea.value);
    textAreaMensaje.value = textoEncriptado;
    textAreaMensaje.style.backgroundImage = "none";
    textArea.value = "";
}


// Utilizando la función replace
function desencriptarPalabra(textoEncriptado){
    var desencriptado = textoEncriptado; 
    desencriptado = desencriptado.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
      
    return desencriptado;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptarPalabra(textArea.value)
    textAreaMensaje.value = textoEncriptado;
    textArea.value = "";
}

function Btncopiar(){
    textAreaMensaje.select();
    navigator.clipboard.writeText(textAreaMensaje.value)
    textAreaMensaje.value = "";
    alert("Texto Copiado")
}

