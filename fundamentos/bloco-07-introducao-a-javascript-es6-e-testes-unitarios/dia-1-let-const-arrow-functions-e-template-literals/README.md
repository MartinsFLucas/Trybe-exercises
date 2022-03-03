# DIA 01

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre let, const, arrow functions, template literals e operador ternário no ES6.

Os requisitos dos exercícios contidos no arquivo scripts.js são:

1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
    - Modifique a estrutura da função para que ela seja uma arrow function .
    - Modifique as concatenações para template literals .
    - Copie o código abaixo.
    ```
    function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
    ```

2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
    - Utilize template literals para que a chamada `console.log(<seu código>oddsAndEvens<seu código>)`; retorne `"Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!"`.
    - Bônus (opcional): tente fazer o mesmo exercício utilizando o método `array.sort()`.
    - Copie o código abaixo.
    ```
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    // Seu código aqui.

    console.log(oddsAndEvens); // será necessário alterar essa linha 😉
    ```

3. Crie uma função que receba um número e retorne seu fatorial.
    - Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva.
