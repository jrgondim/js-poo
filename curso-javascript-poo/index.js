import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Emanuel", 1234567890);

const cliente2 = new Cliente("Marly", 987654321);

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 2002;
contaCliente1.cliente = cliente1;
contaCliente1.conta = 12122-7
contaCliente1.saldo = 0;

const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 2002;
contaCliente2.cliente = cliente2;
contaCliente2.conta = 344234-9;
contaCliente2.saldo = 0;

contaCliente1.depositar(4000);
contaCliente2.depositar(10000);

contaCliente1.sacar(4000);
contaCliente2.transferir(100, contaCliente1);


console.log(contaCliente1);
console.log("-----------------------------------");
console.log(contaCliente2);