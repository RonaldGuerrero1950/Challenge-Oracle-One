var bontonCopiado = document.querySelector("#boton-copiar");
bontonCopiado.addEventListener("click", copiarAlPortaPapeles,false);

function copiarAlPortaPapeles() {
    var contenido = document.getElementById("mostrar");

    var inputTransitorio = document.createElement("input");
    inputTransitorio.setAttribute("value", contenido.innerHTML);
    document.body.appendChild(inputTransitorio);

    inputTransitorio.select();
    document.execCommand("copy");

    document.body.removeChild(inputTransitorio);

}