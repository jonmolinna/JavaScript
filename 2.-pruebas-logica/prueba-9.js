// Pregunta 1
// escribir una función que tome 6 parámetros
// Suma a con B
// el resultado de la suma, restar el valor de c,
// El resultado de la resta, multiplicar por d y dividir por e
// Y por ultimo hacer el resultado elevado a la potencia de F
function operations(a, b, c, d, e, f) {
  let result = Math.pow(((a + b - c) * d) / e, f);
  return result;
}

const result1 = operations(6, 5, 4, 3, 2, 1);
// const result1 = operations(6, 2, 1, 4, 2, 3);
// const result1 = operations(2, 3, 6, 4, 2, 3);
// console.log(result1);

// Pregunta 2
// dada una funcion, si flag es end, retorna los tres ultimos letras
// si es start, retorna los tres primeros letras, y por defecto flag debe ser start
function returnThreeLetters(str, flag = "start") {
  if (flag === "start") {
    return str.slice(0, 3);
  } else if (flag === "end") {
    return str.slice(-3);
  }
}

// const result2 = returnThreeLetters("abcdefg", "start");
// const result2 = returnThreeLetters("abcdefg", "end");
// const result2 = returnThreeLetters("ab", "end");
const result2 = returnThreeLetters("abcdefg");
// console.log(result2);

// Pregunta 3
// cree una funcion que retorne fullname, lastName, firstName
function fullName(str, flag = "") {
  const arr = str.split(" ");
  if (flag === "firstname") {
    return arr[0];
  } else if (flag === "lastname") {
    if (arr.length > 1) {
      return arr.slice(1).join(" ");
    }
    return str;
  } else {
    return str;
  }
}

// const pregunta3 = fullName("John Willians Smith", "firstname");
// const pregunta3 = fullName("John Willians Smith", "lastname");
// const pregunta3 = fullName("John Willians Smith");
const pregunta3 = fullName("John", "lastname");
// console.log(pregunta3);

// pregunta 4
// cree una funcion que retorne true si el numero es par y false si es impar
function isNumberPar(number) {
  return number % 2 === 0;
}

// const pregunta4 = isNumberPar(8);
// const pregunta4 = isNumberPar(-10);
// const pregunta4 = isNumberPar(7);
const pregunta4 = isNumberPar(-41);
// console.log(pregunta4);

// pregunta 5
function sliceItems(arr, b) {
  return arr.filter((item) => item !== b);
}

// console.log(sliceItems([1, 2, 3], 2));
// console.log(sliceItems([1, 2, "3"], "3"));
// console.log(sliceItems(["1", false, 2, "3"], false));
// console.log(sliceItems([5, 1, 2, 5, 3, 5], 5));

// pregunta 6
function orderItemsArr(arr, order = "asc") {
  let items = order === "asc" ? arr.sort() : arr.sort((a, b) => a - b);

  return items;
}

console.log(orderItemsArr([2, 3, 1], "asc"));
console.log(orderItemsArr([6, 2, 8, 1, 5], "desc"));
console.log(orderItemsArr(["uva", "maca", "naranja"], "desc"));
console.log(orderItemsArr(["t", "a", "s", "z", "m"]));
