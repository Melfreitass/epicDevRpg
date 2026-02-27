class NaveEspacial {
  #estaVoando;

  constructor(nome) {
    this.nome = nome;
    this.#estaVoando = false;
  }

  voar() {
    this.#estaVoando = true;
    return `${this.nome} está voando pelo espaço 🚀`;
  }

  pousar() {
    this.#estaVoando = false;
  }

  receberInfo() {
    return this.#estaVoando ? 'Sim' : 'Não';
  }
}

// uso da classe
const minhaNave = new NaveEspacial('Millennium Falcon');

console.log(minhaNave.voar());
console.log(
  `Está voando? ${minhaNave.receberInfo() === 'Sim' ? 'Decolagem autorizada' : 'Em solo'}`
);

minhaNave.pousar();
console.log(`Está voando? ${minhaNave.receberInfo()}`);

// ❌ ERRO: Atributo privado não acessível fora da classe
// console.log(minhaNave.#estaVoando);