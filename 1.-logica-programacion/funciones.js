/*
    Una funcion es un bloque de codigo, autocontenido, que se puede definir una vez y ejecutar en cualquier
    momento. Opcionalmente, una funcion puede aceptar parametros y devolver un valor.

    Las funciones en JavaScript son objetos, un tipo especial de objetos.

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden
    pasarse como argumentos y usarse como un valor de retorno.
*/

// Declaracion de una Funcion
function declarada(){
    console.log('La suma es: ');
};

function sumar(a,b){
    return a + b
};

// Invocacion de Funcion
declarada();
console.log(sumar(12, 38));

// Funciones declaradas VS Funciones expresadas

// Esto es una funcion declarada, es decir, puede invocarse en cualquier parte de nuestro codigo,
// Incluso antes de que la funcion sea declarada.
funcionDeclara();

function funcionDeclara(){
    console.log("Hola Mundo");
};

funcionDeclara();

// Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable.
// Si invocamos esta funcion antes de su definicion JS nos dira 'Cannot access 'functionExpresada' bejore initialization.
const funcionExpresada = function(){
    console.log('Hola a todo');
};

funcionExpresada();