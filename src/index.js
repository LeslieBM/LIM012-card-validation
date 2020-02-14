import validator from './validator.js';
    
    console.log(validator);

// Inicia la sección
//function start(){
//document.getElementById("startpage").style.display = "none";
//document.getElementById("entercard").style.display = "block";
//}
//const btn = document.getElementById("btn");
//enter.addeventlistener("click",start,false);

// Solicitar Número de la Tarjeta

function getCreditCardNumber() {
  const numberCard = document.getElementById("creditcard").value;
  let nombreInvertido = '';

  for(let i= numberCard.length-1 ; i >= 0; i--){
    nombreInvertido = nombreInvertido + numberCard[i];
    }
    let convertirNumero = parseInt(nombreInvertido,10);
    console.log(nombreInvertido);
}
    
  const button = document.getElementById("verify");
  button.addEventListener("click",getCreditCardNumber,false);

 //Pasar los números a un array en orden inverso
 



