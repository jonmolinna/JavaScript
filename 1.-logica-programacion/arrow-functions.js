const saludar = () => {
    console.log('Hola');
};
saludar();

const sumar = (a, b) => a + b;
console.log(sumar(12, 19));

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((el, index) => console.log(`${el} esta en la posicion ${index}`));

// This contexto global
function persona(){
    console.log(this);
}
persona();

// This contexto local
const persona2 = {
    nombre: "Kendra",
    cargo: function(){
        console.log(this);
    }
}
console.log(persona2);

// This contexto local
const persona3 = {
    nombre: "Kendra",
    cargo(){
        console.log(this);
    }
}
console.log(persona3);

// This contexto global
const persona4 = {
    nombre: "Kendra",
    cargo: () => {
        console.log(this);
    }
}

console.log(persona4);