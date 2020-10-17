// Ejercicio #3: Escriba una función de JavaScript que acepte una cadena
// como parámetro y encuentre la palabra más corta dentro de la cadena

function shortWord(word){
    let cadenaSplit = word.split(" ");
    let shortWord = cadenaSplit[0].length;
    var word = cadenaSplit[0];
        for (let i = 1; i < cadenaSplit.length; i++) {
            if ( cadenaSplit[i].length < shortWord) {
                shortWord = cadenaSplit[i].length;
                word = cadenaSplit[i];
            }
            
        }

    return console.log(`la palabra mas corta es ${word} con ${shortWord} caracteres`);
}

shortWord("hola mundo javascript");