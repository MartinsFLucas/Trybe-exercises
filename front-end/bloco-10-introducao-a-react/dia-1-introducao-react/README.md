# DIA 01

O objetivo dos exercícios desse dia foi aplicar os primeiros conceitos sobre React e entender melhor o que diferencia React de JavaScript, além de ver um pouco sobre classes.

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