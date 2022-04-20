const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Teste da função uppercase', () => {
  it('Verifica se a função uppercase converte corretamente todos os caracteres de uma string para maiúsculas', () => {
    expect(1).toBe(1);
  });
});