let nombre = "Kendra";
let edad = "24";

const persona = {
    nombre: nombre,
    edad: edad,
    cargo: () => {
        console.log('Encargada de Hn');
    }
};

console.log(persona);
persona.cargo();

const persona2 = {
    nombre,
    edad,
    cargo: "Gerente General"
};

console.log(persona2);