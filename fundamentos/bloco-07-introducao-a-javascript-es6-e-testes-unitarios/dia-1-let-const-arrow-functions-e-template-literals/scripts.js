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

