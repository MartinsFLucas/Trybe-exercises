//---------------Exercício 01----------------
/* let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial = fatorial * index;
}

console.log(fatorial); */

//---------------Exercício 02----------------

let word = 'tryber';
let reversedWord = '';

console.log(reversedWord);

for (let index = 0; index < word.length; index += 1) {
    reversedWord += (word[word.length - index - 1]);
}

console.log(reversedWord);