import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    _saldo = 0;

    /**
     * @param {number | Cliente} novoValor
     */
    set cliente(novoValor) {
        this._cliente = novoValor;
    }

    sacar(valor){
        if(this.saldo < valor) return;
         
        this.saldo -= valor;
        return valor;
    } 

    depositar(valor){
        if(valor < 0) return;       
        this.saldo += valor;       
    }

     transferir(atransferir, conta){
        const valorSacado = this.sacar(atransferir);
        conta.depositar(valorSacado);
    }
}