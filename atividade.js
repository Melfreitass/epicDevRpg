class Personagem {
    #HP;

     constructor(nome, HP, poderDeAtaque) {
        if (typeof HP !== 'number' || HP <=0) {
            throw new Error('HP não pode ser negativo')
        }

        this.nome = nome;
        this.#HP = HP;
        this.poderDeAtaque = poderDeAtaque;
    }

    receberDano() {

    }

    exibirStatus() {
        
    }
}