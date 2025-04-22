class livro {
    constructor(titulo, autor, paginas){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
    exibirLivro() {
        console.log(`titulo: ${this.titulo}`)
        console.log(`autor: ${this.autor}`)
        console.log(`paginas: ${this.paginas}`)
    }
}
const book = new livro("the book of bill", "Alex Hirsch", 209)
book.exibirLivro()

// ex2
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        this.saldo -= valor
    }

    verSaldo() {
        console.log(`Saldo: R$${this.saldo}`)
    }
}

const conta = new ContaBancaria("Pedro", 170)
conta.depositar(90)
conta.sacar(100)
conta.verSaldo()

// ex3

class Pet {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    falar() {
        let som;
        switch(this.especie.toLowerCase()) {
            case "cachorro":
                som = "Au au!";
                break;
            case "gato":
                som = "Miau!";
                break;
            case "passaro":
                som = "Piu piu!";
                break;
        }
        console.log(`${this.nome} diz: ${som}`);
    }
}

const pet1 = new Pet("Canjica", "Cachorro", 5);
pet1.falar();
const pet2 = new Pet("Zico", "Gato", 3);
pet2.falar();

// 4 - Classe Filme
class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }

    assistir() {
        console.log(`Você está assistindo "${this.titulo}", que dura ${this.duracao} minutos.`);
    }
}

const filme1 = new Filme("Viva a Vida é uma festa", "Animação", 145);
filme1.assistir();

// 5 - Classe Musica
class Musica {
    constructor(titulo, artista, tempo) {
        this.titulo = titulo;
        this.artista = artista;
        this.tempo = tempo;
    }

    tocar() {
        console.log(`Tocando '${this.titulo}' de ${this.artista}.`);
    }
}

const musica1 = new Musica("Out of time", "The Weeknd", "3:54");
musica1.tocar();


