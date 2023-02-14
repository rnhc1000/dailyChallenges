function Pessoa() {
    this.idade = 0;

    /**
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



/**
 * se n fizer o bind não se vincula 
 * o this ao objeto Pessoa, mas sim
 * ao obejto criado pela função vazia
 * declara function()
 */

setInterval(function() {
    this.idade++;
    console.log(this.idade);
    }.bind(this), 1000)

}
new Pessoa;