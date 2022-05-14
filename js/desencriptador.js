textoOriginal = document.querySelector("#texto-original");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var mostrarDesencriptado = document.querySelector("#mostrar");

botonDesencriptar.addEventListener("click", function() {

    var arrayString = crearArray(textoOriginal);
    var arrayDesencriptado = desencriptador(arrayString);
    var nuevostringdesen = arrayDesencriptado.toString();
    var nuevostring22 = nuevostringdesen.replace(/(,)/gm,"");
    mostrarDesencriptado.textContent = nuevostring22;
    textoOriginal.value="";
})

function crearArray(textoEncriptado) {
    let arrayString = [];

    for(let i of textoEncriptado.value) {
        arrayString.push(i);
    }

    return arrayString;
}

function desencriptador(arrayString) {
    
    for (let i = 0; i < arrayString.length; i++) {
        if(arrayString[i] == "a" && arrayString[i+1]=="i"){
            arrayString.splice(i,1,"a");
            arrayString.splice(i+1,1,"");
            
        }
        if(arrayString[i] == "e" && arrayString[i+1]=="n" && arrayString[i+2] == "t" && arrayString[i+3] == "e" && arrayString[i+4] == "r"){
            arrayString.splice(i,1,"e");
            arrayString.splice(i+1,1,"");
            arrayString.splice(i+2,1,"");
            arrayString.splice(i+3,1,"");
            arrayString.splice(i+4,1,"");
            
        }
        if(arrayString[i] == "i" && arrayString[i+1]=="m" && arrayString[i+2] == "e" && arrayString[i+3] == "s"){
            arrayString.splice(i,1,"i");
            arrayString.splice(i+1,1,"");
            arrayString.splice(i+2,1,"");
            arrayString.splice(i+3,1,"");
            
        }
        if(arrayString[i] == "o" && arrayString[i+1]=="b" && arrayString[i+2] == "e" && arrayString[i+3] == "r"){
            arrayString.splice(i,1,"o");
            arrayString.splice(i+1,1,"");
            arrayString.splice(i+2,1,"");
            arrayString.splice(i+3,1,"");
            
        }
        if(arrayString[i] == "u" && arrayString[i+1]=="f" && arrayString[i+2] == "a" && arrayString[i+3] == "t"){
            arrayString.splice(i,1,"u");
            arrayString.splice(i+1,1,"");
            arrayString.splice(i+2,1,"");
            arrayString.splice(i+3,1,"");
            
        }            
    }
    return arrayString;

    /* 
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat" 
    */
}

