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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(sum);