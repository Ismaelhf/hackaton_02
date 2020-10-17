// Ejercicio #4: Escriba una función de JavaScript para contar el número
// de vocales en una cadena dada

function countVowels(cadena){
    let count =0;
    for (let i = 0; i < cadena.length; i++) {        
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {
            count++;
        }
    }
    console.log(count);
    
}

countVowels('hola mundo javascript');