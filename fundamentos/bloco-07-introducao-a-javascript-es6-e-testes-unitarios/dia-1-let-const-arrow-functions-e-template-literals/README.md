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