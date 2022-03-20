// Pregunta 1
// -----------------------------------------
// Obtener la letra mas largo, ejm
// I woke up early today => early
// I went straight to the beach => straight

function pregunta1(str){
    let arr = str.split(" ");

    // 1.
    let maxLetter = arr[0];
    for (let i=0; i < arr.length -1; i++) {
        if (arr[i].length >= maxLetter.length) {
            maxLetter = arr[i];
        };
    }
    // return maxLetter;

    // 2.
    let longestWord = "";
    for (let word of arr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        };
    };
    return longestWord
};

// console.log(pregunta1("I woke up early today"));
// console.log(pregunta1("I went straight to the beach"));


// Pregunta 2
// -----------------------------------------
// Geometric, arithmetic or no pattern
// no negative numbers

function mathSequences(arr) {
    let arith = new Set(); // [] set => elimina duplicados
    let geo = new Set(); // []

    for (let i = 1; i < arr.length; i++) {
        let number1 = arr[i] - arr[i-1];
        // arith.push(number1)
        arith.add(number1)
        
        let number2 = arr[i] / arr[i - 1];
        geo.add(number2);
    }

    if (arith.size === 1) return 'Arithmetic';
    if (geo.size === 1) return 'Geometric';

    return -1
};

// console.log(mathSequences([2, 4, 6, 8]));
// console.log(mathSequences([3, 9, 27]));
// console.log(mathSequences([2, 5, 14, 89]));


// Pregunta 3
// -----------------------------------------
// Longest Words

function longestWords(str) {
    let words = str.split(' ');
    let size = 0;
    let max = [''];

    for(let i=0; i < words.length; i++) {
        if (words[i].length >= size) {
            size = words[i].length;

            if (max[max.length - 1].length < words[i].length) {
                max = [];
                max.push(words[i])
            }
            else {
                max = [...max, words[i]]
            }
        }
    }

    return [...max];
}

// console.log(longestWords('I woke up early today'));
// console.log(longestWords('I went straight to the beach'));


// Pregunta 4
// -----------------------------------------
// Capitalize first letter

function capitalizeWords(str) {
    let arr = str.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ');

    // Segunda forma
    let words = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // return words.join(" ");

    return arr;
};

// console.log(capitalizeWords('I got up early today'));
// console.log(capitalizeWords('I walked straight to the beach'));


// Pregunta 5
// -----------------------------------------
// return true only if all values are unique, otherwise false
// using Array, Object, string method lastIndexOf()
// no Set Data Structure

function unique(str) {
    // usando arreglo
    let values = [];
    for (let letter of str) {
        if (values.indexOf(letter) !== -1) {
            return false;
        }
        values.push(letter);
    };
    // return true;

    // usando objecto
    let obj = {};
    for (let letter of str) {
        if (obj[letter]) {
            return false;
        }
        obj[letter] = "exists"
    }
    // return true;

    // usando lastIndexOf
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;
};

// console.log(unique('abcde')); // true
// console.log(unique('abacdefb')); // false


// Pregunta 6
// -----------------------------------------
// Pause to work on your solution and share
// Verificar que la suma de numeros sea igual al numero mas grande del arreglo
function ArraySum(arr) {
    let mayorNum = Math.max(...arr);
    let indexMayor = arr.indexOf(mayorNum);
    arr.splice(indexMayor, 1);

    let suma = arr.reduce((a, b) => a + b );
    // return suma === mayorNum;

    // Otra forma de hacer
    let tempArr = arr.sort((a,b) => a -b);
    let largest = tempArr.pop(); // elimina el utl element.
    let number = 0;
    tempArr.forEach(item => (number += item));
    return largest === number;
};

// console.log(ArraySum([1, 2, 4, 6, 13]));
// return true 1 + 2 + 4 + 6 = 13
// console.log(ArraySum([1, 2, 4, 34, 22]));
// return false 1 + 2 + 4 + 22 = 29 29!=34

// Pregunta 7
// -----------------------------------------
// Unique values using Set() data structure
// Pause to work on your solution and share
function unique2(str) {
    let tempStr = new Set();

    for (let letter of str) {
        if (tempStr.has(letter)) {
            return false;
        }
        tempStr.add(letter);
    }
    return true;

    // Otra forma de hacer
    return new Set(str).size === str.length;
};

// console.log(unique2("abcd"));
// return true
// console.log(unique2("abcdade"));
// return false ad = duplicate