const numeros = [1, 2, 3];

// Sin Destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2]

console.log(uno, dos, tres);

// Con Destructuracion
const [one, two, three] = numeros;

console.log(one, two, three);

const persona = {
    nombre: "Jon",
    apellido: "Dallas",
    edad: 25
};

let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);