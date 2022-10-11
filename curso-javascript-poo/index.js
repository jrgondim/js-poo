import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Emanuel Gondim", 77777777777);
const cliente2 = new Cliente("Marly", 88888888888);


const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);
conta2.depositar(10000);


conta1.tranferir(200, conta2);

console.log(conta1);
console.log(conta2);


