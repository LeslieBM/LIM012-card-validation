import validator from './validator.js';
    
    console.log(validator);

// Sección Inicial
const buttonEnter = document.getElementById("button1");
const sectionEnterCard = document.getElementById("entercard");

// Mostrar Sección de Ingresar Datos de tarjeta
const startSection = document.getElementById("startpage");
buttonEnter.addEventListener("click",start);
function start(){
  startSection.classList.add("ocultar");
  sectionEnterCard.classList.remove("ocultar");
};

//let numberCard2 = document.getElementById("creditcard").value;
const result = document.getElementById("result");
document.getElementById("button2").addEventListener("click",cardValidation);

function cardValidation(){
  let todo = validator.isValid(document.getElementById("creditcard").value);
  let todo2 = validator.maskify(document.getElementById("creditcard").value);
  sectionEnterCard.classList.add("ocultar");
  let validate = document.getElementById("validation");
  validate.classList.remove("ocultar");
  result.innerHTML= todo + " " +todo2;
};




  
  


