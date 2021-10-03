/*
    - CortoCircuito OR - Cuando el valor de la izquierda en la expresion siempre pueda validar a true,
                        es el valor que se cargara por defecto

    - CortoCircuito AND - Cuando el valor de la izquierda en la expresion siempre pueda validar a false,
                        es el valor que se cargara por defecto.
*/

function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log('Hola', nombre);
};

saludar('Jon');
saludar();

console.log("Cadena" || "Valor de la derecha");     // "Cadena"
console.log(19 || "Valor de la derecha");           // 19
console.log(true || "Valor de la derecha");         // true
console.log([] || "Valor de la derecha");           // []
console.log({} || "Valor de la derecha");           // {}
console.log(-19 || "Valor de la derecha");          // -19
console.log(false || "Valor de la derecha");        // "Valor de la derecha"
console.log(null || "Valor de la derecha");         // "Valor de la derecha"
console.log(undefined || "Valor de la derecha");    // "Valor de la derecha"
console.log("" || "Valor de la derecha");           // "Valor de la derecha"
console.log(0 || "Valor de la derecha");            // "Valor de la derecha"

console.log("Cadena" && "Valor de la derecha");     // "Valor de la derecha"
console.log(19 && "Valor de la derecha");           // "Valor de la derecha"
console.log(true && "Valor de la derecha");         // "Valor de la derecha"
console.log([] && "Valor de la derecha");           // "Valor de la derecha"
console.log({} && "Valor de la derecha");           // "Valor de la derecha"
console.log(-19 && "Valor de la derecha");          // "Valor de la derecha"
console.log(false && "Valor de la derecha");        // false
console.log(null && "Valor de la derecha");         // null
console.log(undefined && "Valor de la derecha");    // undefined
console.log("" && "Valor de la derecha");           // ""
console.log(0 && "Valor de la derecha");            // 0