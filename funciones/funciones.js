//Simplemente se pone la propiedad que gestiona en movimiento en pausa
function parar(){
  block.style.animationPlayState="paused";
  block.style.WebkitAnimationPlayState="paused";
}

//Luego la ponemos en marcha otra vez
function seguir(){
  block.style.animationPlayState="running";
  block.style.WebkitAnimationPlayState="running";
}
//Cambiamos el valor de la duración, concatenando una s.
function velocidad(valor){
  block.style.WebkitAnimationDuration = (valor*2)+'s';
}
