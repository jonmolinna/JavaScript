// Parámetros REST
function sumar (a, b, ...c){
    let resultado = a + b;

    c.forEach(element => (
        resultado += element
    ));
    return resultado
}

console.log(sumar(1, 2, 3, 4, 5));

// Operador Spread
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);