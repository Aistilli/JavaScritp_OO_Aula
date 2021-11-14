/* 
Ser autenticavel significa ter a método autenticar

ducky type
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  //Verifica se uma chave existe dentro de um objeto e se um objeto é uma instância de outro.
  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
