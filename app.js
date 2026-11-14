function revelarPista(){
const mensaje = document.getElementById("mensaje-pista");
mensaje.innerHTML = "¡Pista encontrada! El radar detecta que las huellas llevan hacia la biblioteca principal de la masión" ;
const caja = document.getElementById("interactivo");
caja.style.backgroundColor = "#1f2a1f";
setTimeout(() => {
caja.style.backgroundcolor = "#161821";
}, 2000)
}
