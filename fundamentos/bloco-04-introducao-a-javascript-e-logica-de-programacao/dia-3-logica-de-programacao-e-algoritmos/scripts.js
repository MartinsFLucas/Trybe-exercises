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

let array = ['java', 'javascript', 'python', 'html', 'css'];
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

console.log('A menor palavra é: ', smallestWord);



