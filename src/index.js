import validator from './validator.js';
    
// Sección de Página Inicial
const startSection = document.getElementById("startpage");
const sectionEnterCard = document.getElementById("entercard");

// Sección de Ingresar Datos de tarjeta
const buttonEnter = document.getElementById("button1");
buttonEnter.addEventListener("click", () =>{
  startSection.classList.add("ocultar");
  sectionEnterCard.classList.remove("ocultar");
})
//Sección Resultado de Validar Tarjeta
  const formulario = document.getElementById("formulario")
  formulario.addEventListener("submit", (event) =>{  
  event.preventDefault();
  const isValidResult = validator.isValid(document.getElementById("creditcard").value);
  const maskifyResult = validator.maskify(document.getElementById("creditcard").value);
  sectionEnterCard.classList.add("ocultar");
  document.getElementById("validation").classList.remove("ocultar");
  numResult.innerHTML= maskifyResult;
  if(isValidResult == true){
    result1.innerHTML = "Es válida";
    thanks.innerHTML = "¡Gracias por tu donación!";
  }
  else{
    result1.innerHTML = "No es válida";
    thanks.innerHTML = "Vuelve a ingresar tu número de tarjeta de crédito";
  }
});
const numResult = document.getElementById("numResult");
const result1 = document.getElementById("result1");
const thanks = document.getElementById("thanks");
const validateSection = document.getElementById("validation");
const buttonReturn = document.getElementById("returnButton");
buttonReturn.addEventListener("click",()=>{
  validateSection.classList.add("ocultar");
  sectionEnterCard.classList.remove("ocultar");
})