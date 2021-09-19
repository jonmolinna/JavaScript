// if - else
let edad = 17;

if(edad > 18){
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}


if(edad >= 1 && edad <= 18){
    console.log('Eres menor de edad');
}
else if (edad >= 19 && edad <= 110){
    console.log('Eres mayor de edad');
}
else {
    console.log('No existe edad');
}

// Condicion ternario
let eresMayor = edad >= 18? "¡Eres Mayor!" : "¡Eres Menor!"
console.log(eresMayor);

// Caso Switch
let dia = 1

switch(dia){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    default:
        console.log('Dia no existe');
        break
};