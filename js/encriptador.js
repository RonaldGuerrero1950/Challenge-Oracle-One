var textoOriginal = document.querySelector("#texto-original");
var botonEncriptar = document.querySelector("#boton-encriptar");
var textoEncriptado = document.querySelector("#mostrar");

botonEncriptar.addEventListener("click", function () {

    var arrayOriginal = makeArray(textoOriginal);

    var arrayEncriptado = encriptador(arrayOriginal);    
    
    var nuevostring = arrayEncriptado.toString();
    var nuevostring2 = nuevostring.replace(/(,)/gm,"");
    textoEncriptado.textContent = nuevostring2;

    textoOriginal.value="";
})

function makeArray(textoOriginal) {
    let arrayString = [];

    for(let i of textoOriginal.value) {
        arrayString.push(i);
    }

    return arrayString;
}

function encriptador(arrayOriginal) {
    for (let i = 0; i < arrayOriginal.length; i++) {
        if(arrayOriginal[i]=="a"){
            arrayOriginal.splice(i,1,"ai");
        }
        if(arrayOriginal[i]=="e"){
            arrayOriginal.splice(i,1,"enter");
        }
        if(arrayOriginal[i]=="i"){
            arrayOriginal.splice(i,1,"imes");
        }   
        if(arrayOriginal[i]=="o"){
            arrayOriginal.splice(i,1,"ober");
        }
        if(arrayOriginal[i]=="u"){
            arrayOriginal.splice(i,1,"ufat");
        }
    }
    return arrayOriginal;
}

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"  */