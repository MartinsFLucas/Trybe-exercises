const { getPokemonDetails } = require("../scripts/getPokemonDetails");



describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const errorMessage = 'Não temos esse pokémon para você :(';
    const callback = (err, result) => {
      expect(err.message).toBe(errorMessage);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Jorge', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResult = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    const callback = (err, result) => {
      expect(result).toBe(expectedResult);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});

/* describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = 'Não temos esse pokémon para você :(';

    function callback(error, result) {
      expect(error.message).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
}); */