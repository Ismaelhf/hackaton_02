// ● Ejercicio #1: Escriba una función de JavaScript que acepte una cadena
// como parámetro y encuentre la palabra más larga dentro de la cadena

function longWord(cadena){
    let cadenaSplit = cadena.split(" ");
    let maxword=0;
    let word;
        for (let i = 0; i < cadenaSplit.length; i++) {
            if (cadenaSplit[i].length > maxword) {
                maxword = cadenaSplit[i].length;
                word = cadenaSplit[i];
            }
            
        }
        
    return console.log(`la palabra mas larga es ${word} con ${maxword} caracteres`);
}

longWord("hola mundo javascript");