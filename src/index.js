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
  let invertedNumber = "";

  for(let i = numberCard.length-1 ; i >= 0; i--){
    invertedNumber = invertedNumber + numberCard[i];
    }
    const newArray = Array.from(invertedNumber).map(Number);
    console.log(newArray)

    let numberCardList = [];

    for(let i=0; i < newArray.length; i++){
      if(i%2!==0){
        numberCardList.push(newArray[i]*2);
      }else{
        numberCardList.push(newArray[i]*1);
      }
    }
    console.log("Pares multiplicados por 2", numberCardList)


}
    

  
  const button = document.getElementById("verify");
  button.addEventListener("click",getCreditCardNumber,false);


