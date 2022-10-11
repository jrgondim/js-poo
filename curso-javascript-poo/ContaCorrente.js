import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    cliente;



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