// Inicia la sección
function start () {
document.getElementById("startpage").style.display = "none";
document.getElementById("entercard").style.display = "block";
}
const btn = document.getElementById("btn");
enter.addeventlistener("click",start,false);

// Solicitar Número de la Tarjeta
function validar () {
    let numberCard= document.getElementById ("creditcard").value;
    // Pasar los nros a un array inverso
    let numberCardReverse= (numberCard.split("")).reverse();
    // Aplicar la operación a las posiciones pares
    for(let i=0; i< numberCardReverse.length; i++){
        if( i % 2 !== 0){;
            let multiply = numberCardReverse[i]*2
                if( multiply >= 10 );
                    let sum = 0
                    while (multiply) {
                    sum += multiply % 10;
                    multiply = Match.floor(multiply/10)
                }
                    pairNumber.push(sum);
            }else{
            pairNumber.push(multiply);
            }
        }else{
        pairNumber.push(parseInt())
        }
        var numToValidate = 0; // Creamos una variable numberToValidate para darle un valor de inicio
        for(var j = 0; j < pairNum.length; j++){ //Iterar los números pares
          numToValidate += pairNum[j]; //Se concatenan los números
        }
        if(numToValidate % 10 === 0){ // Deacuerdo al algoritmo, si al sumar todos los números, el residuo de la división de estos entre 10 es 0 entonces la tarjeta es
          return "Válida"; // El número es valido
        }else{
          return "Inválida"; // El número es invalido
        }
      }
      document.write(isValidCard(numCard));
    
    const boton = document.getElementById ("verify");
    boton.addeventlistener("click", validar);
    
    console.log(numberCard)
    
    import validator from './validator.js';
    
    console.log(validator);
