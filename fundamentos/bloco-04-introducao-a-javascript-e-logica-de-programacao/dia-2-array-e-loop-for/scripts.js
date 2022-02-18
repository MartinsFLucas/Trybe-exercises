// -----------------Exercício 1-----------------

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
 */

// -----------------Exercício 2-----------------

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio); */

// -----------------Exercício 3-----------------

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu); */

// -----------------Exercício 4-----------------

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
} */

// -----------------Exercício 5-----------------

/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let element of names) {
  console.log(element);
} */

// -----------------Exercício 6-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

// -----------------Exercício 7-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(sum); */

// -----------------Exercício 8-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let numbersMean;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

numbersMean = sum / numbers.length;

console.log(numbersMean); */

// -----------------Exercício 9-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let numbersMean;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

numbersMean = sum / numbers.length;

if (numbersMean > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
} */

// -----------------Exercício 10-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largest = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > largest) {
    largest = numbers[index];
  }
}

console.log(largest); */

// -----------------Exercício 11-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2) {
    countOdd += 1;
  }
}

console.log(countOdd); */

// -----------------Exercício 12-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallest = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallest) {
    smallest = numbers[index];
  }
}

console.log(smallest);
 */

// -----------------Exercício 13-----------------

/* let myArray = [];

for (let index = 0; index < 25; index += 1) {
  myArray.push(index + 1);
}

console.log(myArray); */

// -----------------Exercício 14-----------------

/* let myArray = [];

for (let index = 0; index < 25; index += 1) {
  myArray.push(index + 1);
}

for (let index = 0; index < myArray.length; index += 1) {
  console.log(myArray[index] / 2);
}
 */

// -----------------Exercício 15-----------------

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length - 1; index += 1) {
  for (let index2 = 0; index2 < (numbers.length - index - 1); index2 += 1) {
    if (numbers[index2 + 1] < numbers[index2]) {
      let aux = numbers[index2 + 1];
      numbers[index2 + 1] = numbers[index2]
      numbers[index2] = aux;
    }
  }
}

console.log(numbers); */

// -----------------Exercício 16-----------------

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length - 1; index += 1) {
  for (let index2 = 0; index2 < (numbers.length - index - 1); index2 += 1) {
    if (numbers[index2 + 1] > numbers[index2]) {
      let aux = numbers[index2 + 1];
      numbers[index2 + 1] = numbers[index2]
      numbers[index2] = aux;
    }
  }
}

console.log(numbers);