//----------------Exercise 01------------------------
/* const a = 4;
const b = 2;

// Addition
console.log(a+b);

// Subtraction
console.log(a-b);

// Multiplication
console.log(a*b);

// Division
console.log(a/b);

// Modulus
console.log(a%b); */

//----------------Exercise 02------------------------

/* const num1 = 15;
const num2 = 12;

let max;

if (num1 > num2) {
    max = num1;
} else if (num2> num1) {
    max = num2;
} else {
    max = 'Os números são iguais';
}

console.log(max); */

//----------------Exercise 03------------------------

/* const n1 = 8;
const n2 = 8;
const n3 = 8;

let largest;

if (n1 > n2) {
    largest = n1;
} else {
    largest = n2;
}

if (largest < n3) {
    largest = n3;
} else if (n1 == n2 && n2 == n3) {
    largest = 'Os números são iguais';
}

console.log(largest); */

//----------------Exercise 04------------------------

/* const a = 2;

if (a > 0) {
    console.log("Positive");
} else if (a < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
} */

//----------------Exercise 05------------------------

const angle1 = 20;
const angle2 = 100;
const angle3 = 80;

let somaAngulos = angle1 + angle2 + angle3;
let triangulo = somaAngulos === 180;

if ((typeof (angle1) != 'number'|| angle1 < 0) || (typeof (angle2) != 'number' || angle2 < 0) || (typeof (angle3) != 'number' || angle3 < 0)) { // Verifica se os ângulos não são números ou são menores do que zero
    console.log("ângulo inválido");
} else {
    console.log(triangulo);
}

