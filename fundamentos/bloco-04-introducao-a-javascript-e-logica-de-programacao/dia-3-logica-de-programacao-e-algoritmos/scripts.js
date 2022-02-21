//---------------Exercício 01----------------
/* let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial = fatorial * index;
}

console.log(fatorial); */

//---------------Exercício 02----------------

/* let word = 'tryber';
let reversedWord = '';

console.log(reversedWord);

for (let index = 0; index < word.length; index += 1) {
    reversedWord += (word[word.length - index - 1]);
}

console.log(reversedWord); */

//---------------Exercício 03----------------

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let largestWord = '';
let smallestWord = '';

for (let index = 0; index < array.length; index += 1) {
    if ((array[index]).length > largestWord.length) {
        largestWord = array[index];
    }
}

console.log('A maior palavra é: ', largestWord);

for (let index = 0; index < array.length; index += 1) {
    if ((array[index]).length < smallestWord.length || index === 0) {
        smallestWord = array[index];
    }
}

console.log('A menor palavra é: ', smallestWord); */

//---------------Exercício 04----------------

/* let largestPrimeNumber;

for (let number = 0; number <= 50; number += 1) {
    if (number >= 2) {
        let divisorCount = 0
        for (let divisor = 1; divisor <= number; divisor += 1) {
            if (number % divisor === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === 2) {
            largestPrimeNumber = number;
        }
    }
}

console.log(largestPrimeNumber); */

//---------------Exercício 05----------------

/* let n = 3;
line = '';

for (let index = 0; index < n; index += 1) {
    line += '*'
}

for (let index = 0; index < n; index += 1) {
    console.log(line);
} */

//---------------Exercício 05----------------

let n = 8;
line = '';

for (let index = 0; index < n; index += 1) {
    line += '*'
    console.log(line);
}