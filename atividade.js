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

    receberDano(valor) {
        if (valor <= 0) return;

        this.#HP -= valor;

        if(this.#HP <= 0) {
            this.#HP = 0
        }
    }

    exibirStatus() {
        if (this.#HP > 0) {
            return console.log(`${this.nome} esta vivo! Ele se encontra com ${this.#HP} pontos de vida.`)
        } 

        if (this.#HP <= 0) {
            return console.log(`${this.nome} foi derrotado!!`)
        }
    }
}

class Guerreiro extends Personagem {
    constructor(nome, HP, poderDeAtaque, forcaFisica) {
        super(nome, HP, poderDeAtaque);
        this.forcaFisica = forcaFisica
    }

    atacar(alvo) {
        const valorAtaque = this.poderDeAtaque + this.forcaFisica;
        console.log(`🏹 ${this.nome} usou sua espada e realizou um golpe poderoso!! O valor de ataque foi de: ${valorAtaque}`);

        alvo.receberDano(valorAtaque)
    }
}

class Mago extends Personagem {
    constructor(nome, HP, poderDeAtaque, poderMagico) {
        super(nome, HP, poderDeAtaque);
        this.poderMagico = poderMagico;
    }

        atacar(alvo){
            const valorAtaque = this.poderDeAtaque + this.poderMagico * 2;
            console.log(`🧙‍♂️ ${this.nome} lançou uma magia muito forte! O valor de ataque foi de: ${valorAtaque}`)

            alvo.receberDano(valorAtaque)
        }
    }


const guerreiro = new Guerreiro('Guerreiro Arthur', 50, 20, 25)
const mago = new Mago('Mago Gandalf', 50, 15, 35)

console.log(`---INFORMAÇÕES PERSONAGENS---\n`);
console.log('🏹Personagem 1:')
console.log(guerreiro)
guerreiro.exibirStatus()
console.log()
console.log('🧙‍♂️Personagem 2:')
console.log(mago)
mago.exibirStatus()
console.log()

console.log(`---- ⚔ BATALHA ÉPICA ⚔ ----\n`)
guerreiro.atacar(mago)
mago.exibirStatus()
console.log()
mago.atacar(guerreiro)
guerreiro.exibirStatus()
console.log()

console.log(`---INFORMAÇÕES FINAIS---\n`);
console.log('🏹Personagem 1:')
guerreiro.exibirStatus()
console.log('🧙‍♂️Personagem 2:')
mago.exibirStatus()