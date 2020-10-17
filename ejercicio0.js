// Ejercicio #0: Escriba una función de JavaScript que acepte una cadena
// como parámetro y convierta la primera letra de cada palabra de la
// cadena en mayúsculas


function capitalize(word){
    let word1 = word.split(" ");
    let word2=[];
    let j=0;
    for (let i = 0; i < word1.length; i++) {  
        // for (let j = 0; j < word1[i].length; j++) {

            word2[i] = word1[i].charAt(0).toUpperCase() + word1[i].slice(1)
        // }      
    }
    console.log(word2.join(" "));
}

capitalize('hola ismael');