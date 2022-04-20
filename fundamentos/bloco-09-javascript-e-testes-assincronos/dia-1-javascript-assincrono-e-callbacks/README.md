# DIA 01

O objetivo desse dia foi colocar em prática o que aprendi sobre operações assíncronas, callbacks, como utilizar o Jest para testar minhas callbacks e também como reaproveitar configurações para diversos testes utilizando beforeEach e afterEach.

Os requisitos dos exercícios contidos no arquivo answers.js são: 

1. Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

  ```
  const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };

  const venus = {
    name: "Venus",
    distanceFromSun: {
      value: 108200000,
      measurementUnit: "kilometers",
    },
  };

  const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
      value: 778500000,
      measurementUnit: "kilometers",
    },
  };

  console.log(planetDistanceFromSun(mars)); // A
  console.log(planetDistanceFromSun(venus)); // B
  console.log(planetDistanceFromSun(jupiter)); // C
  ```

2. Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
```
Os requisitos dos exercícios contidos na pasta answers.js são: 

3. A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.
```
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos
```

4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.
```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
```