// Ejercicio #5: Escriba una función de JavaScript para imprimir un número
// entero con comas como miles de separadores
// o Datos de prueba:
// console.log (miles_separador (1000));
// "1,000"
// o console.log (miles_separador (10000.23));
// "10,000.23"
// o console.log (miles_separador (100000));
// "100,000"

function miles_separador(num){
    let num1 = num.toString();
    let numArray = num1.split(".");
    let entero= numArray[0];
    let decimal = numArray[1];
    // let mill='';
    // let count=0;

    console.log(entero.slice(0,-3)+','+entero.slice(-3)+'.'+decimal);
}

miles_separador(1254.4);