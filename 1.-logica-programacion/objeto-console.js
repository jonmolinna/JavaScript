//Objeto console

console.log(console);

console.error("Esto es un Error");
console.warn("Esto es un Aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "Jon";
let apellido = "Dallas";
let edad = 35;

console.log("Hola mi nombre es %s %s y tengo %d años.", nombre, apellido, edad);

console.clear();

console.log(window);
console.dir(window); // Muestra todo sus metodos y atributos.
console.clear();

// Grupos en la Consola
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programacion Web");
console.groupEnd();

console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programacion Web");
console.groupEnd();
console.clear();

// Consola en Tablas
console.log(console);
console.table(Object.entries(console));
console.clear();

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const persona = {
    nombre: "Kendra",
    apellido: "Contreras",
    cargo: "Gerente General",
    edad: 32
};

console.table(persona);
console.clear();

// Contando la Ejecucion
for (let i=0; i <= 100; i++){
    console.count("Codigo for");
    console.log(i);
}
console.clear();

// Pruba Unitaria por consola
let x = 4;
let y = 2;
let pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, {x, y, pruebaXY});