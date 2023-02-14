function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa;
/**
 * 
 * neste caso, this n varia 
 * através do uso da função arrow
 *
 * 
 * const self = this;
 *
 * Armazenado this na constante
 * self e assim preserva-se o valor
 * e n precisa efetuar o bind, evitando
 * que o this varie
 * setInterval(function() {
 * self.idade++;
 *  console.log(self.idade);
 * }, 1000) sem o uso do bind ao usar self
 */

 