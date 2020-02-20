import validator from './validator.js';
    
// Sección de Página Inicial
const startSection = document.getElementById("startpage");
const sectionEnterCard = document.getElementById("entercard");

// Sección de Ingresar Datos de tarjeta
const buttonEnter = document.getElementById("button1");
buttonEnter.addEventListener("click",start);
function start(){
  startSection.classList.add("ocultar");
  sectionEnterCard.classList.remove("ocultar");
}
//Sección Resultado de Validar Tarjeta
const buttonValidar = document.getElementById("button2");
buttonValidar.addEventListener("click",cardValidation);
const result = document.getElementById("result");
const result1 = document.getElementById("result1");

function cardValidation(){
  let isValidResult = validator.isValid(document.getElementById("creditcard").value);
  let maskifyResult = validator.maskify(document.getElementById("creditcard").value);
  sectionEnterCard.classList.add("ocultar");
  const validateSection = document.getElementById("validation");
  validateSection.classList.remove("ocultar");
  result.innerHTML= maskifyResult;
  if(isValidResult == true){
    result1.innerHTML = "tu tarjeta es valida";
  }
  else{
    result1.innerHTML = "tu tarjeta es invalida";
  }
}

const validateSection = document.getElementById("validation");
const buttonReturn = document.getElementById("returnButton");
buttonReturn.addEventListener("click",goBack);
function goBack(){
  validateSection.classList.add("ocultar");
  sectionEnterCard.classList.remove("ocultar");
}