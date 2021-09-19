let contador = 1;

// While
while (contador <= 10){
    console.log("while", contador);
    contador++;
};

// Do - while
do {
    console.log("do-while", contador);
    contador++;
} while(contador <= 10)

// For
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

for(let i=0; i < dias.length; i++){
    console.log(dias[i]);
}

const jon = {
    nombre: "Jon",
    apellido: "Dallas",
    edad: 25,
}

// For In = imprime las claves (ES mas para OBJECTOS)
for (const key in jon) {
    console.log(key);
    console.log(`Key: ${key}; valor: ${jon[key]}`);
};

// For Of = recorre todos los elementos iterables de JS. (ARREGLOS - CADENAS)
for (const elemento of dias) {
    console.log(elemento);
};

let cadena = "Hola Mundo";

for (const elemento of cadena) {
    console.log(elemento);  
};