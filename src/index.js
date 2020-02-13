// Inicia la sección

// Solicitar Número de la Tarjeta
function validar () {
    let numberCard = document.getElementById ("creditcard").value;
    
    // Pasar los nros a un array inverso
    //let numberCardReverse = (numberCard.split("")).reverse();
    
    // Aplicar la operación a las posiciones pares
    //for(let i=0; i< numberCardReverse.length; i++){
        //if( i % 2 !== 0);
        //if( multiply >= 10 );
    
    // Multiplicar los nros por 2
    //}
    }
    let boton = document.getElementById ("verify");
    numberCard.addeventlistener("click", validar, false);
    document.getElementById("reply").innertext = "Es Válida";
    
    import validator from './validator.js';
    
    console.log(validator);
