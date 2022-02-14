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

/* const angle1 = 20;
const angle2 = 100;
const angle3 = 80;

let somaAngulos = angle1 + angle2 + angle3;
let triangulo = somaAngulos === 180;

if ((typeof (angle1) != 'number'|| angle1 < 0) || (typeof (angle2) != 'number' || angle2 < 0) || (typeof (angle3) != 'number' || angle3 < 0)) { // Verifica se os ângulos não são números ou são menores do que zero
    console.log("ângulo inválido");
} else {
    console.log(triangulo);
} */

//----------------Exercise 06------------------------
/* 
let piece = "Queen";
let lc_piece = piece.toLowerCase();

switch (lc_piece) {
    case "pawn":
        console.log("pawn -> foward (1 square only, unless it's it first move");
        break;

    case "bishop":
        console.log("bishop -> diagonals");
        break;

    case "knight":
        console.log("knight -> 'L-shape'");
        break;

    case "rook":
        console.log("rook -> horizontally or vertically");
        break;

    case "queen":
        console.log("queen -> horizontally, vertically or diagonally");
        break;

    case "king":
        console.log("king -> any direction (1 square only)");
        break;
    
    default:
        console.log("That's not a chess piece");
} */

//----------------Exercise 07------------------------

let score = 102;
let convertedScore;

if (score >= 90 && score <= 100) {
    convertedScore = 'A';
} else if (score >= 80 && score < 90) {
    convertedScore = 'B';
} else if (score >= 70 && score < 80) {
    convertedScore = 'C';
} else if (score >= 60 && score < 70) {
    convertedScore = 'D';
} else if (score >= 50 && score < 60) {
    convertedScore = 'E';
} else if (score < 50 && score > 0) {
    convertedScore = 'F';
} else {
    convertedScore = 'Invalid Score';
}

console.log(convertedScore);

