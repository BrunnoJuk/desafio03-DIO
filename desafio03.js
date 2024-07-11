class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'atacou de forma desconhecida';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso:
  const mago = new Hero('Gandalf', 100, 'mago');
  const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
  const monge = new Hero('Kong', 30, 'monge');
  const ninja = new Hero('Naruto', 16, 'ninja');
  
  mago.atacar();      // O mago atacou usando magia
  guerreiro.atacar(); // O guerreiro atacou usando espada
  monge.atacar();     // O monge atacou usando artes marciais
  ninja.atacar();     // O ninja atacou usando shuriken
  