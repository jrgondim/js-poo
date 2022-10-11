import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Emanuel Gondim", 77777777777);
const cliente2 = new Cliente("Marly", 88888888888);
const cliente3 = new Cliente("Mariana Senna", 333333333);
const cliente4 = new Cliente("José Mendes", 4444444444);
const cliente5 = new Cliente("Carmosita Presley", 445555555555);
const cliente6 = new Cliente("Deodora Fran", 886643388888);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);
conta1.tranferir(200, conta2);

const conta2 = new ContaCorrente(102, cliente2);
conta2.depositar(10000);

const conta3 = new ContaCorrente(102, cliente3);
conta3.depositar(134);

const conta4 = new ContaCorrente(102, cliente4);
conta4.depositar(324);

const conta5 = new ContaCorrente(102, cliente5);
conta5.depositar(700);

const conta6 = new ContaCorrente(102, cliente6);
conta6.depositar(100);

console.log(conta1);
console.log(conta2);
console.log(conta3);
console.log(conta4);
console.log(conta5);
console.log(conta6);