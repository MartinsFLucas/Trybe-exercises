const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Teste da função uppercase', () => {
  it('Verifica se a função uppercase converte corretamente todos os caracteres de uma string para maiúsculas', (done) => {
    expect(1).toBe(1);
    const string = 'javascript assincrono e callbacks';
    const expectedString = 'JAVASCRIPT ASSINCRONO E CALLBACKS';

    const callback = (result) => {
      try{
        expect(result).toBe(expectedString)
        done();
      } catch(error) {
        done(error);
      }
      
    }
    uppercase(string, callback); 
  });
});