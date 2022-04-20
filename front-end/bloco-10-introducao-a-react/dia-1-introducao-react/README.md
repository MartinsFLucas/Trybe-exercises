# DIA 01

O objetivo dos exercícios desse dia foi aplicar os primeiros conceitos sobre React e entender melhor o que diferencia React de JavaScript, além de ver um pouco sobre classes.

Os requisitos dos exercícios contidos no projeto-01 são:

1. Crie um novo projeto utilizando npx create-react-app project-01 e acesse a pasta project-01

2. Crie uma lista de tarefas simples seguindo os passos abaixo:
    - insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :
    ```
    const Task = (value) => {
    return (
        <li>{value}</li>
    );
    }
    ```
    - agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start.

    - por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.

Os requisitos dos exercícios contidos no projeto-02 são:

1. Crie um novo projeto utilizando npx create-react-app.

   - Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;

   - No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;

   - No arquivo App.js , importe o componente Header criado anteriormente;
    Renderize o componente Header no App.js ;
    
   - Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;

   - Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;
    Ainda no arquivo Content.jsx , adicione o seguinte array: