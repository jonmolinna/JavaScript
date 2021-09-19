// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
// Los Arreglo

const a = [];
const b = [1, true, "Hola", ["A", "B", "C"]];
const c = Array.of("X", "Y", "Z", 9, 1, 23);

// Metodos de los Arreglos
const colores = ["Rojo", "Verde", "Azul"];

// Añadir un Arreglo al final
colores.push("Negro");

// Elimina un arreglo al final
colores.pop();

// Recorrer un Arreglo
colores.forEach((e, index) => (
    console.log(index, e)
));