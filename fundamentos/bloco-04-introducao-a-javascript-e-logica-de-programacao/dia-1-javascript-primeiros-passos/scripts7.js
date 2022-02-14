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
const angle2 = 80;
const angle3 = 80;

let somaAngulos = angle1 + angle2 + angle3;
let triangulo = somaAngulos === 180;

if ((typeof (angle1) !== 'number'|| angle1 < 0) || (typeof (angle2) !== 'number' || angle2 < 0) || (typeof (angle3) !== 'number' || angle3 < 0)) { // Verifica se os ângulos não são números ou são menores do que zero
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

/* let score = 102;
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

console.log(convertedScore); */

//----------------Exercise 08------------------------

/* const num1 = 7;
const num2 = 13;
const num3 = 4;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
} */

//----------------Exercise 09------------------------

/* const num1 = 6;
const num2 = 12;
const num3 = 3;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
} */

//----------------Exercise 10------------------------

/* const valorCusto = 100;
const valorVenda = 150;

let valorCustoTotal = valorCusto * 1.2;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = lucro * 1000;

console.log(valorCustoTotal);
console.log(lucro);
console.log(lucroTotal); */

//----------------Exercise 11------------------------

const salarioBruto = 3000;
let desconto_inss, desconto_ir, salarioBase, salarioLiquido;

if (salarioBruto < 0) {
    console.log("Salário inválido")
} else {
    if (salarioBruto <= 1556.94) {
        desconto_inss = 0.08 * salarioBruto;
    } else if (salarioBruto <= 2594.92) {
        desconto_inss = 0.09 * salarioBruto;
    } else if (salarioBruto <= 5189.82) {
        desconto_inss = 0.11 * salarioBruto;
    } else {
        desconto_inss = salarioBruto - 570.88;
    }

    salarioBase = salarioBruto - desconto_inss;

    if (salarioBase <= 1903.98) {
        desconto_ir = 0;
    } else if (salarioBase <= 2826.65) {
        desconto_ir = (0.075 * salarioBase) - 142.80;
    } else if (salarioBase <= 3751.05) {
        desconto_ir = (0.15 * salarioBase) - 354.80;
    } else if (salarioBase <= 4664.68) {
        desconto_ir = (0.225 * salarioBase) - 636.13;
    } else {
        desconto_ir = (0.275 * salarioBase) - 869.36;
    }

    salarioLiquido = salarioBase - desconto_ir;

    console.log("O salário líquido é de R$", salarioLiquido);

}
