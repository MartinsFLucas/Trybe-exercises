//-------------------- Exercício 1 --------------------

/* function testingScope(escopo) {
if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
} else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
}
}

testingScope(true); */

//-------------------- Exercício 2 --------------------
// Sem array.sort()

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function ordenarArray(array) {
    let aux;
    for (let index1 = 0; index1 < array.length - 1; index1 += 1) {
        for (let index2 = 0; index2 < array.length - 1; index2 += 1) {
            if (array[index2] > array[index2 + 1]) {
                aux = array[index2];
                array[index2] = array[index2 + 1];
                array[index2 + 1] = aux;
            }
        }
    }
}
ordenarArray(oddsAndEvens);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); */

// Com array.sort()

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function ordenarArray(array) {
    return array.sort((a, b) =>  a - b);
}

console.log(`Os números ${ordenarArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); */

//-------------------- Exercício 3 --------------------

//função não-recursiva

/* function fatorial(numero) {
    let fat = 1;
    for (numero; numero > 1; numero -= 1) {
        fat *= numero;
    }
    return fat;
}

console.log(fatorial(5)); */

//função recursiva;

/* const fatorial = numero => numero != 1 ? numero * fatorial(numero - 1) : 1

console.log(fatorial(10)); */

//-------------------- Exercício 4 --------------------

/* const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const maiorPalavra = texto => {
    let textoSeparado = texto.split(' ');
    let maior = textoSeparado[0];
    for (let index = 1; index < textoSeparado.length; index += 1) {
        if (textoSeparado[index].length > maior.length) maior = textoSeparado[index];
    }
    return maior;
}

console.log(maiorPalavra(frase)); */

//-------------------- Exercício 6 --------------------

const phrase = 'Tryber x aqui!';
const skills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'Git e GitHub']

const replaceX = str => phrase.replace('x', str);

const concatenate = str => {
    let sortedArray = skills.sort();
    
    result = `${str} 
    
    Minhas cinco principais habilidades são:`;
    
    skills.forEach((skill) =>
    result = `${result}

    - ${skill}`);
    
    return result;
}

console.log(concatenate(replaceX('teste')));
