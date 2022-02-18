# DIA 02

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre duas estruturas de dados muito importantes do 'JavaScript', que são 'Array' e 'for'.

Os requisitos dos exercícios contidos no arquivo scripts.js são:

    1 - Obter o valor "Serviços" do array menu:
        ```
        let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
        let menuServices = ;
        console.log(menuServices);
        ```

    2 - Procure o índice do valor "Portfólio" do array menu :
        ```
        let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
        let indexOfPortfolio = ;

        console.log(indexOfPortfolio);
        ```

    3 - Adicione o valor "Contato" no final do array menu : 
        ```
        let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

        console.log(menu);
        ```

    4 - Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
        ```
        let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
        ```

    5 - Utilize o for/of para imprimir os elementos da lista names com o console.log() :
        ```
        let names = ['João', 'Maria', 'Antônio', 'Margarida'];
        ```

    _PARA OS EXERCÍCOS DO 6 AO 12 E DO 15 AO 17 IREMOS UTILIZAR O SEGUINTE ARRAY:_
        ```
        let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
        ```

    6 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

    7 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

    8 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
        A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

    9 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
    
    10 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

    11 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

    12 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

    13 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

    14 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

    15 - Ordene o array numbers em ordem crescente e imprima seus valores;
    
    16 - Ordene o array numbers em ordem decrescente e imprima seus valores;
    
    17 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
