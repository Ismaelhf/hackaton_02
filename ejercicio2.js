// Ejercicio #2: Escriba una función recursiva de JavaScript que determine
// si un número es par o impar

function parImpar(num){
    let resp;
    if (num%2 == 0) {
        resp='par';
    }else{
        resp ='impar';
    }
    return console.log(`el numero ${num} es ${resp}`);
}

parImpar(6);

// function recursivaParImpar(num){
//     let num2=0;
//     let resp;
//     if (num2*2==num ) {
//         return resp='par';
        
//     }else if((num2*2)+1==num){
//         return resp ='impar';        
//     }else{
//       return recursivaParImpar(num2+1);
//     }


// }

// console.log(recursivaParImpar(8));
