/******************** CHALLENGE 1 *************************** */
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
    return str.split('').reverse().join('');

    // Otra forma de realizar
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i]
    }
    return revString;

    // Otra forma de realizar
    let revString = '';
    for (let char of str) {
        revString = char + revString;
    }
    return revString;

    // Otra forma de realizar
    let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString;

    // Otra forma de realizar
    return str.split('').reduce((revString, char) => {
        return char + revString;
    }, '')


}

// call Function
const output = reverseString('hello');
console.log(output);


/******************** CHALLENGE 2 *************************** */
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar', 'oso') === 'true', isPalindrome ('hello') == false
function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;
}

// Call Function
const output = isPalindrome('oso');
console.log('isPalindrome: ', output);


/******************** CHALLENGE 3 *************************** */
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int); // En caso que sea un numero negativo
}

// Call Function
const output = reverseInt(-521);
console.log(output)


/******************** CHALLENGE 4 *************************** */
// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');

    // Otra Forma de Realizar
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');

    // Otra forma de Realizar (Expresiones Regulares)
    return str.replace(/\b[a-z]/gi, function (char) {
        return char.toUpperCase();
    })
}

// Call Function
const output = capitalizeLetters('i love javascript');
console.log(output)


/******************** CHALLENGE 5 *************************** */
// CHALLENGE 5: MAX CHARACTER
// Return the character tha is most common in a string
// ex. maxCharacter('javascripth) == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1
        }
    });

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// Call Function
const output = maxCharacter('javascript');
console.log(output)


/******************** CHALLENGE 6 *************************** */
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers fron 1 to 
// 100. For multiples of 3, instead of the number, print
// "Fizz", for multiples of 5 print "Buzz", for numbers
// which are multiples of both 3 and 5, print "FizzBuzz"
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
}

// Call Function
const output = fizzBuzz();
console.log(output)