// ---------------------------------------------------------------------- JOIN
// Permite unir los elemento de un arreglo a una cadena.
// Retorna un nuevo cadena
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const newDias = dias.join(" "); // Lunes Martes Miercoles Jueves Viernes
const newDias2 = dias.join("-"); // Lunes-Martes-Miercoles-Jueves-Viernes


// ---------------------------------------------------------------------- REVERSE
// Invierte el orden de los elementos de un array.
// Modifica al Arreglo.
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
meses.reverse(); // [ 'Mayo', 'Abril', 'Marzo', 'Febrero', 'Enero' ]


// ---------------------------------------------------------------------- SPLIT
// Divide una cadena de acuerdo al patron y crea un nuevo arreglo.
// Retorna un nuevo arreglo
const letras = "Kendra Dallas, es la nueva encargada";
const arreglo = letras.split(" "); // [ 'Kendra', 'Dallas,', 'es', 'la', 'nueva', 'encargada' ]
const arreglo2 = letras.split(","); // [ 'Kendra Dallas', ' es la nueva encargada' ]


// ---------------------------------------------------------------------- SORT
// Permite ordenar los elementos de un arreglo
// Modifica al arreglo
const frutas = ["Piña", "Manzana", "Sandia", "Platano", "Mango"];
frutas.sort(); // [ 'Mango', 'Manzana', 'Piña', 'Platano', 'Sandia' ]

const numeros = [21, 8, 17, 3, 10, 32, 2, 1, 14];
numeros.sort((a,b) => a - b); // [1,  2,  3,  8, 10, 14, 17, 21, 32]
numeros.sort((b,a) => a - b); // [32, 21, 17, 14, 10, 8,  3,  2,  1]

const nombres = [
    { name: "Dallas", edad: 21},
    { name: "Brownie", edad: 17},
    { name: "Nikone", edad: 25},
    { name: "Brehn", edad: 13},
    { name: "Jane", edad: 27},
]

// Ordenar por edad en forma ascendente
nombres.sort((a, b) => a.edad - b.edad);

// Ordenar por nombre en forma ascendente
nombres.sort((a,b) => {
    if(a.name > b.name){
        return 1
    }
    if(a.name < b.name){
        return -1
    }
    return 0
});


// ---------------------------------------------------------------------- REDUCE
// Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// Retorna un nuevo valor
// Recibe cuatro argumentos => Acumulador (a), Valor Actual (b), indice actual, array
const number = [1, 2, 3, 4, 5, 6, 10];
const newNumber = number.reduce((a, b) => a + b); // 31
const newNumber2 = number.reduce((a,b) => a + b, 10) // 41

const integrado = [[0,1], [2,3], [4,5]];
const newIntegrado = integrado.reduce((a,b) => a.concat(b)); // [ 0, 1, 2, 3, 4, 5 ]

// devuelve un objecto de nombres y su cantidad
const names = ['Jorge', 'Maria', 'Jose', 'Bod', 'Pat', 'Maria', 'Jose', 'Jose'];
const cantidadNombres = names.reduce((contadorNombre, nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
}, {});

// { Jorge: 1, Maria: 2, Jose: 3, Bod: 1, Pat: 1 }