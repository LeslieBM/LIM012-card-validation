const validator = {
};
// Solicitar Número de la Tarjeta
validator.isValid = numberCard=>{
  let invertedNumber = "";
  //Invertir Números de la tarjeta
    for(let i= numberCard.length-1 ; i >= 0; i--){
    invertedNumber = invertedNumber + numberCard[i];
  }
    //Convertir en array y a números
  const newArray = Array.from(invertedNumber).map(Number);

    //Multiplicar por 2 las posiciones pares
  let numberCardList = [];
    for(let i=0; i < newArray.length; i++){
      if(i%2!==0){
        numberCardList.push(newArray[i]*2);
      }else{
        numberCardList.push(newArray[i]*1);
      }
    }
  //Sumar los dígitos de los nros. mayores que 9 de las posiciones pares 
  let numberCardList2 = [];
    for(let i=0; i < numberCardList.length; i++){
      if(numberCardList[i]>=10){
        numberCardList2.push((numberCardList[i]-10)+1);
      }else{
        numberCardList2.push(numberCardList[i]*1)
      }
    }

    //Sumar todos los números
  let numberCardSum = numberCardList2.reduce((sum,actual)=>sum+actual,0);

    //Validar Tarjeta de Crédito
  let validation = false;
    if(numberCardSum%10==0){
      validation = true;
    }
      if(validation==true){
        return true ;
      }
      else{
        return false;
      }
}
//Enmascarar los números
validator.maskify = numberCard =>{
  let numbers = "";
    for(let i=0; i<numberCard.length; i++){
      if(i<numberCard.length - 4 ){
      numbers = numbers + "#";
      }else{
      numbers = numbers + numberCard[i];
    }
  } 
  return numbers;
}
export default validator;
