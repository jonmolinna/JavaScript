/******************** CHALLENGE 1 *************************** */
/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.
 * miFuncion("Hola Mundo") devolverá 10.
 */
 function Pregunta1(str=""){
    if(!str){
        console.warn("Ingrese un texto");
    } else {
        console.info(`Son Caracteres: ${str.length}`);
    }
}

//Pregunta1('Hola Mundo');


/******************** CHALLENGE 2 *************************** */
/**
 * 2) Programa una función que te devuelva el texto recortado según el número 
 * de caracteres indicados, pe.
 * miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
function Pregunta2(cadena="", longitud=undefined){
    if(!cadena){
        console.warn("Ingrese una cadena")
    } 
    else if(longitud===undefined){
        console.info("Ingresa una Longitud")
    } 
    else {
         console.info(cadena.slice(0, longitud))
    }
}

//Pregunta2("Hola Mundo",4)


/******************** CHALLENGE 3 *************************** */
/**
 * 3) Programa una función que dada una String te devuelva un Array de textos separados
 *  por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
function Pregunta3(cadena="", sepador=undefined){
    if(!cadena){
        console.warn("Ingrese una cadena")
    }
    else if(sepador===undefined){
        console.info("Ingresa un separador")
    }
    else {
        console.info(cadena.split(sepador))
    }
}

//Pregunta3("Hola a todos", " ")


/******************** CHALLENGE 4 *************************** */
/**
 * 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 *  devolverá Hola Mundo Hola Mundo Hola Mundo.
 */
const Pregunta4 = (texto="", veces=undefined) => {
    if(!texto) return console.warn("Ingrese un Texto");

    if(veces === undefined) return console.warn('Ingresa un Numero de Veces');

    if(veces === 0) return console.error("El numero de veces no puede ser cero");

    if(Math.sign(veces) === -1) return console.error('Ingrese un Numero Positivo');

    for(let i=1; i<= veces; i++){
        console.log(`${texto} - ${i}`)
    }
}

//Pregunta4('Hola Mundo', 5)


/******************** CHALLENGE 5 *************************** */
/**
 * 5) Programa una función que invierta las palabras de una cadena de texto,
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */
function Pregunta5(palabra=""){
    if(!palabra){
        console.warn("Ingresa una Cadena");
    }
    else {
        console.info(palabra.split("").reverse().join(""));
    }
}

//Pregunta5("Hola Mundo")


/******************** CHALLENGE 6 *************************** */
/**
 * 6) Programa una función para contar el número de veces que se repite una palabra
 * en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
function Pregunta6(cadena="", texto=""){
    if(!cadena) return console.warn("Ingresa un texto largo");
    if(!texto) return console.warn("Ingresa una palabra a evaluar");

    let i=0;
    let contador=0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra se repite ${contador}`);
}

//Pregunta6("hola mundo adios mundo", "mundo");


/******************** CHALLENGE 7 *************************** */
/**
 * 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 * (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */
function Pregunta7(palabra){
    if(!palabra) return console.warn("Ingresa una Palabra");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return palabra === alReves;
}

//const output =Pregunta7("Salas")
//console.log(output)


/******************** CHALLENGE 8 *************************** */
/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
 * miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */
function Pregunta8(texto="", patron=""){
    if(!texto){
        console.warn("Ingresa un Texto");
    } else if (!patron){
        console.warn("Ingresa un patron");
    } else {
        console.log(texto.replace(new RegExp(patron, "ig"), ""))
    }
}

//Pregunta8("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");


/******************** CHALLENGE 9 *************************** */
/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */
function Pregunta9(max, min){
    const aleatorio = Math.round(Math.random() * (max - min) + min);
    console.log(aleatorio);

    // Resuelto por el instructor
    const numero = Math.round((Math.random() * 100) + 500)
    //console.log(numero)
}

//Pregunta9(501, 600)

/******************** CHALLENGE 10 *************************** */
/**
 * 10) Programa una función que reciba un número y evalúe si es capicúa o no
 * (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */
function Pregunta10(numero=0){
    if(!numero) return console.warn("Ingrese un Numero");
    if(typeof numero !== "number") return console.warn("Ingrese un Numero");

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return(numero === alReves) ?
    console.info(`Si es capicua: ${numero} = ${alReves}`) :
    console.log(`No es capicua: ${numero} = ${alReves}`)
}

//Pregunta10(2000)


/******************** CHALLENGE 11 *************************** */
/**
 * 11) Programa una función que calcule el factorial de un número
 * (El factorial de un entero positivo n, se define como el producto de todos los números
 * enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */
function Pregunta11(numero=undefined){
    if(numero===undefined) return console.warn("Ingrese un Numero");
    if(typeof numero !== "number") return console.error("Lo ingresado no es Numero");
    if(numero === 0) return console.error("El numero no puede ser Cero");
    if(Math.sign(numero) === -1) return console.warn("El numero no puede ser Negativo");

    /*
    let arreglo = [];
    for(let i=1; i<=numero; i++){
        arreglo.push(i)
    }
    const factorial = arreglo.reduce((a,b) => a*b)
    console.log(factorial)
    */

    let factorial = 1;
    for(let i=numero; i>1; i--){
        factorial *= i;
    }
    return console.info(factorial)
}

//Pregunta11(5)


/******************** CHALLENGE 12 *************************** */
/**
 * 12) Programa una función que determine si un número es primo
 * (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
 */
function Pregunta12(numero = undefined){
    if(numero===undefined) return console.warn("Ingrese un Numero");
    if(typeof numero !== "number") return console.error("Lo ingresado no es Numero");
    if(numero === 0) return console.error("El numero no puede ser Cero");
    if(numero === 1) return console.error("El numero no puede ser Uno");
    if(Math.sign(numero) === -1) return console.warn("El numero no puede ser Negativo");

    let divisible = false;
    for(let i=2; i<numero; i++){
        if((numero % i)===0){
            divisible = true;
            break;
        }
    }

    if(divisible === true){
        console.log('No es primo');
    } else {
        console.log('Es primo');
    }
}

//Pregunta12(17);


 /******************** CHALLENGE 13 *************************** */
/**
 * 13) Programa una función que determine si un número es par o impar, pe.
 * miFuncion(29) devolverá Impar
*/
function Pregunta13(numero = undefined){
    if(numero===undefined) return console.warn("Ingrese un Numero");
    if(typeof numero !== "number") return console.error("Lo ingresado no es Numero");

    if(numero % 2 === 0){
        console.log('Es un numero Par')
    } else {
        console.log('Es un numero Impar')
    }
}

//Pregunta13(-12)


 /******************** CHALLENGE 14 *************************** */
/**
 * 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
 * miFuncion(0,"C") devolverá 32°F
*/
function Pregunta14(grados=undefined, unidad=undefined){
    if(grados===undefined) return console.warn("Ingrese un grado");
    if(typeof grados !== "number") return console.error("Lo ingresado no es Numero");

    if(unidad===undefined) return console.warn("Ingrese el tipo de grado");
    if(typeof unidad !== "string") return console.error("Lo ingresado no es una cadena de texto");
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Solo ingrese C o F en Mayusculas");

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`)
    } else if(unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados-32) * (5/9))}°C`)
    }

}

//Pregunta14(32, "F")


 /******************** CHALLENGE 15 *************************** */
/**
 * 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.
 * miFuncion(100,2) devolverá 4 base 10.
*/
function Pregunta15(numero=undefined, base=undefined){
    if(numero===undefined) return console.warn("Ingrese un Numero");
    if(typeof numero !== "number") return console.error("Lo ingresado no es Numero");

    if(base===undefined) return console.warn("Ingrese un Numero");
    if(typeof base !== "number") return console.error("Lo ingresado no es Numero");

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if(base === 10){
        return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`);
    } else {
        return console.error('El tipo base a convertir NO es valido');
    }
}

//Pregunta15(4, 10);


/******************** CHALLENGE 16 *************************** */
/**
 * 16) Programa una función que devuelva el monto final después de aplicar 
 * un descuento a una cantidad dada, pe.
 * miFuncion(1000, 20) devolverá 800.
*/
function Pregunta16(monto=undefined, descuento=0){
    if(monto===undefined) return console.warn("Ingrese un Monto");
    if(typeof monto !== "number") return console.error("Lo ingresado no es Numero");
    if(monto === 0) return console.error("El Monto no puede ser cero");
    if(Math.sign(monto) === -1) return console.error("El Monto no puede ser Negativo");

    if(typeof descuento !== "number") return console.error("Lo ingresado no es Numero");
    if(Math.sign(descuento) === -1) return console.error("El Descuento no puede ser Negativo");

    let precioTotal = 0;
    precioTotal = monto - ((monto * descuento)/100)
    return console.log(`S/.${monto} - ${descuento}% == S/.${precioTotal}`)
}

//Pregunta16(50, 2);


/******************** CHALLENGE 17 *************************** */
/**
 * 17) Programa una función que dada una fecha válida determine cuantos años
 * han pasado hasta el día de hoy, pe.
 * miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
function Pregunta17(fecha = undefined){
    if(fecha===undefined) return console.warn("Ingrese una Fecha");
    if(!(fecha instanceof Date)) return console.error("El valor ingresado no es una fecha valida");

    // getTime() => devuelve a milisegundos
    // Math.abs => valor absoluto

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365
    let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    if(Math.sign(aniosHumanos) === -1){
        console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    } else if(Math.sign(aniosHumanos) === 1){
        console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
    } else {
        console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
    }
    
}

//Pregunta17(new Date(1996,10,19));


/******************** CHALLENGE 18 *************************** */
/**
 * 18) Programa una función que dada una cadena de texto cuente 
 * el número de vocales y consonantes, pe.
 * miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
function Pregunta18(cadena=""){
    if(!cadena) return console.warn("Ingrese una Cadena");
    if(typeof cadena !== "string") return console.error("Ingrese una Cadena");

    let vocales = 0;
    let consonantes = 0;
    cadena = cadena.toLowerCase();

    for(let letra of cadena){
        if(/[aeiouáéíóúü]/.test(letra)) vocales++;

        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })

}

//Pregunta18('Hola Mundo');


/******************** CHALLENGE 19 *************************** */
/**
 * 19) Programa una función que valide que un texto sea un nombre válido, pe.
 * miFuncion("Jonathan MirCha") devolverá verdadero.
*/
function Pregunta19(nombre=""){
    if(!nombre) return console.warn("Ingrese un Nombre");
    if(typeof nombre !== "string") return console.error("Ingrese un Nombre");

    let expReg = /^[A-Za-zÑñáéíóúÜü\s]+$/g.test(nombre);

    return (expReg) ? console.info("Nombre Valido") : console.info("No es un Nombre Valido")
}

//Pregunta19("Jonathan Mircha");


/******************** CHALLENGE 20 *************************** */
/**
 * 20) Programa una función que valide que un texto sea un email válido, pe.
 * miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
function Pregunta20(email=""){
    if(!email) return console.warn("Ingrese un Email");
    if(typeof email !== "string") return console.error("Ingrese un Email");

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) ? console.info("Email Valido") : console.info("No es un Email Valido")
}

//Pregunta20("jonmircha@gmail.com");


/******************** CHALLENGE 21 *************************** */
/**
 * 21) Programa una función que dado un array numérico devuelve otro array
 * con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
function Pregunta21(arr = undefined){
    if(arr === undefined) return console.warn("Ingrese un Array de Numeros");
    if(!(arr instanceof Array)) return console.error("El valor ingresado no es un Arreglo");
    if(arr.length === 0) return console.warn("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado, no es numero`)
    }

    const nuevoArray = arr.map(numero => numero*numero)
    return console.log(nuevoArray)
}

//Pregunta21([1, 4, 5]);


/******************** CHALLENGE 22 *************************** */
/**
 * 22) Programa una función que dado un array devuelva el número 
 * mas alto y el más bajo de dicho array, pe.
 * miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
function Pregunta22(arr){
    if(arr === undefined) return console.warn("Ingrese un Array de Numeros");
    if(!(arr instanceof Array)) return console.error("El valor ingresado no es un Arreglo");
    if(arr.length === 0) return console.warn("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado, no es numero`)
    }

    let mayor = Math.max(...arr);
    let menor = Math.min(...arr);
    console.log(mayor, menor)
}

//Pregunta22([1, 4, 5, 99, -60])


/******************** CHALLENGE 23 *************************** */
/**
 * 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
 * en el primero almacena los números pares y en el segundo los impares, pe.
 * miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
function Pregunta23(arr){
    if(arr === undefined) return console.warn("Ingrese un Array de Numeros");
    if(!(arr instanceof Array)) return console.error("El valor ingresado no es un Arreglo");
    if(arr.length === 0) return console.warn("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado, no es numero`)
    }

    return console.info({
        pares: arr.filter(num => num%2 === 0),
        impares: arr.filter(num => num%2 === 1)
    })
}

//Pregunta23([1,2,3,4,5,6,7,8,9,0])


/******************** CHALLENGE 24 *************************** */
/**
 * 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 * el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe.
 * miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
function Pregunta24(arr){
    if(arr === undefined) return console.warn("Ingrese un Array de Numeros");
    if(!(arr instanceof Array)) return console.error("El valor ingresado no es un Arreglo");
    if(arr.length === 0) return console.warn("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado, no es numero`)
    }

    let asc = arr.map(number => number).sort((a,b) => a-b)
    let desc = arr.map(number => number).sort((a,b) => b-a)

    console.log({asc, desc})
}

//Pregunta24([7, 5,7,8,6]);


/******************** CHALLENGE 25 *************************** */
/**
 * 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.
 * miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
function Pregunta25(arr){
    if(arr === undefined) return console.warn("Ingrese un Array de Numeros");
    if(!(arr instanceof Array)) return console.error("El valor ingresado no es un Arreglo");
    if(arr.length === 0) return console.warn("El arreglo esta vacio");
    if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos");

    // Forma 1
    //let sinDuplicados = arr.filter((value, index, self) => self.indexOf(value) === index)
    
    // Forma 2
    let sinDupli = [...new Set(arr)]
    console.log(sinDupli)

}

//Pregunta25(["x", 10, "x", 2, "10", 10, true, true])


/******************** CHALLENGE 26 *************************** */
/**
 * 26) Programa una función que dado un arreglo de números obtenga el promedio, pe.
 * promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
function Pregunta26(arr){
    let suma = arr.reduce((a,b) => a+b);
    let promedio = suma/(arr.length)
    console.log(promedio)
}

//Pregunta26([9,8,7,6,5,4,3,2,1,0]);