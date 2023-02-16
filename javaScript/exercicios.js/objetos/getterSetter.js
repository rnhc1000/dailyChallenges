const sequencia = {
    /**
     * definindo um objeto e tambem os 
     * getters e os setters 
     */
    _valor: 1, 
    /**
     * convenção  que é pretendida ser acessada 
     * apenas internamente pis não há 
     * variável privada em JS. Portanto colocar o _ 
     * na frente do nome da variavel sinaliza
     * a outros desenvolvedores que o acesso a esta
     * variavel é privado
     * 
     */
    get valor() { return this._valor++ },
    // JS n suporta sobrecarga de métodos
    set valor(valor) { this._valor = valor }

}

console.log(sequencia.valor, sequencia.valor)// 1 2

sequencia.valor= 1000;

console.log(sequencia.valor, sequencia.valor)// 1000 1001

console.log(sequencia.valor, sequencia.valor);// 1002 1003
/**
 * a cada rodada o valor anterior é preservado
 */

