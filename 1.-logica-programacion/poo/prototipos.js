/* Programacion Orientado a Objetos */
/*
    - Clases - Modelo a Seguir.
    - Objetos - Es una instancia de una clase.
        - Atributos - Es una caracteristica o propiedad del objeto (Son variables dentro de un objeto).
        - Metodos - Son acciones que un objeto puede realizar. (Son funciones dentro de un objeto).
*/

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log('Hago Sonidos');
    }
};

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log('Hago Sonidos');
    }
};

console.log(animal);
console.log(animal2);

// Funcion Constructora
// function Animal(nombre, genero){
//     // Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     // Metodo
//     this.sonar = function(){
//         console.log("Hago sonidos");
//     }

//     this.saludar = function(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     }

// };

// Funcion Constructora donde asignamos los metodos al prototipo, no a la funcion como tal
function Animal(nombre, genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
};

// Metodo agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

// Herencia Prototipica
function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de metodos del Prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Los perros ladran");
};

Perro.prototype.ladrar = function(){
    console.log("Guau Guau");
};

//const snoopy = new Animal("Snoopy", "Macho");
const snoopy = new Perro("Snoopy", "Macho", "Grande");
const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.saludar();
snoopy.sonar();
snoopy.ladrar();

lolaBunny.saludar();
lolaBunny.sonar();