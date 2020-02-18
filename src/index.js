import validator from './validator.js';
    
    console.log(validator);

// Inicia la sección
  const enter = document.getElementById("btn");
  const startSection = document.getElementById("startpage");
  enter.addEventListener("click",()=>{
    startSection.classList.add("ocultar");
  });
  const sectionCard = document.getElementById("entercard");
  sectionCard.classList.add("ocultar");

// Solicitar Número de la Tarjeta
function getCreditCardNumber() {
  let numberCard = document.getElementById("creditcard").value;
  let invertedNumber = "";
//Invertir Números de la tarjeta
  for(let i= numberCard.length-1 ; i >= 0; i--){
    invertedNumber = invertedNumber + numberCard[i];
    }
    //Convertir a array y a números
    const newArray = Array.from(invertedNumber).map(Number);
    //console.log("Nros invertidos",newArray)
    //Multiplicar por 2 las posiciones pares
    let numberCardList = [];

    for(let i=0; i < newArray.length; i++){
      if(i%2!==0){
        numberCardList.push(newArray[i]*2);
      }else{
        numberCardList.push(newArray[i]*1);
      }
    }
    //console.log("Pares multiplicados por 2", numberCardList)

    //Sumar los dígitos de los nros. mayores que 9 de las posiciones pares 
    let numberCardList2 = [];

    for(let i=0; i < numberCardList.length; i++){
      if(numberCardList[i]>=10){
        numberCardList2.push((numberCardList[i]-10)+1);
      }else{
        numberCardList2.push(numberCardList[i]*1)
      }
    }
    //console.log("Sumar dígitos de nros mayores que 10",numberCardList2);

    //Sumar todos los números
    let numberCardSum = numberCardList2.reduce((sum,actual)=>sum+actual,0);
    //console.log("suma",numberCardSum)

    //Validar Tarjeta de Crédito
    let validation = false;
    if(numberCardSum%10===0){
        validation = true;
      }
      console.log(validation);
}

function maskify(){
  
  let numberCard2 = document.getElementById("creditcard").value;
  let numbers = "";

  for(let i=0; i<numberCard2.length; i++){

    if(i<= numberCard2.length - 5 ){
      numbers = numbers + "#";
    }else{
      numbers = numbers + numberCard2[i]*1;
    } 
  } 
    console.log(numbers);
}

  const button = document.getElementById("verify");
  button.addEventListener("click",getCreditCardNumber,false);
  button.addEventListener("click",maskify,false)