/* 
Dentro de un objeto a la variables se le van a llamar atributos/propiedades y 
a las funciones se le llama metodos.
*/

const a = {};
const b = new Object();

const jon = {
    nombre: "Jon",
    apellido: "Dallas",
    edad: 25,
    pasatiempos: ["Correr", "Hacer Ejercicios", "Ver Videos"],
    contactos: {
        email: "jmolina@gmail.com",
        movil: "923458902",
    },
    saludar: (name="desconocido") => console.log("Hola :)", name),
    miApellido: function(){
        console.log(`Mi Apellido es: ${this.apellido}`);
    },
};

// Para acceder al Objeto
console.log(jon["nombre"]);
console.log(jon.contactos);
console.log(jon.contactos.movil);
console.log(jon.pasatiempos[1]);
jon.saludar("Dallas");
jon.miApellido();

// Permite listar todos los llaves del objeto.
console.log(Object.keys(jon));

// Permite listar todos los valores del objeto.
console.log(Object.values(jon));

// Velificar el keys del objeto.
console.log(jon.hasOwnProperty("nombre"));