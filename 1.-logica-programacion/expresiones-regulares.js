/*
Expresiones Regulares son una secuencia de caracteres que forma un patron de busqueda, principalmente
utilizada para la busqueda de patrones de cadenas de caracteres.
*/
/*
Link => https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/
/*
    Las Banderas de Expresiones Regulares
    -------------------------------------------------
    g   => global o que busque todo
    i   => ignora Mayusculas y Minusculas
    \d  => Representa un dígito del 0 al 9.
    []  => Representa rangos o listas.
    {}  => Representa repiticion. Verifica si se repiten cuantas veces
*/

let cadena = "Lorem 37 ipsum dolor sit amet consectetur, adipisicing elit. Atque ullam."

let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/ig;

console.log(expReg.test(cadena)); // devuelve bolean
console.log(expReg.exec(cadena)); // devuelve un arreglo

let expReg3 = /\d/ig;
console.log(expReg3.exec(cadena));

let expReg4 = /[0-9]/ig;
console.log(expReg4.exec(cadena));

let expReg5 = /lorem{1,4}/ig;
console.log(expReg5.test(cadena));