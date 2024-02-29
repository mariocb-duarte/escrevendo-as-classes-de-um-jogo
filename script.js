class Hero {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }
}

let mago = new Hero("Sorcerer", "19", "mago", "magia");
console.log(`O ${mago.tipo} atacou usando ${mago.ataque}`);

let guerreiro = new Hero("Knight", "22", "guerreiro", "espada");
console.log(`O ${guerreiro.tipo} atacou usando ${guerreiro.ataque}`);

let monge = new Hero("Druid", "27", "monge", "artes maciais");
console.log(`O ${monge.tipo} atacou usando ${monge.ataque}`);

let ninja = new Hero("Paladin", "23", "ninja", "shuriken");
console.log(`O ${ninja.tipo} atacou usando ${ninja.ataque}`);