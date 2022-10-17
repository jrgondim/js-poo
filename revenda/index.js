import { Carros } from "./Carros.js";

//cria os carros
let carro1 = new Carros('PFX-3246', 'Renault', 'Sandero Privilége', 2012 , 80000, 'Cinza', 25000);
let carro2 = new Carros('PFR-3223', 'Chevrolet', 'Trailblazer', 2020 , 2000 , 'Azul', 125000);
let carro3 = new Carros('PFX-3412', 'Fiat', 'Argus', 2021 , 88767, 'Cinza', 65000);
let carro4 = new Carros('PFX-4343', 'VW', 'Up Tsi', 2021 , 878678, 'Branco', 75000);
let carro5 = new Carros('PFX-9046', 'Nissan', 'Sentra SL', 2022 ,787 , 'Cinza', 105000);
let carro6 = new Carros('PFX-3746', 'Renault', 'Kwid E-Tech', 2022 , 54554, 'Cinza', 147000);

//mostra carros
console.log("Listando todos os carros: ")
console.log("----------------------------------------------------");
console.log(carro1._modelo + " " + carro1._fabricante + " R$" + carro1._valorvenda);
console.log(carro2._modelo + " " + carro2._fabricante + " R$" + carro2._valorvenda);
console.log(carro3._modelo + " " + carro3._fabricante + " R$" + carro3._valorvenda);
console.log(carro4._modelo + " " + carro4._fabricante + " R$" + carro4._valorvenda);
console.log(carro5._modelo + " " + carro5._fabricante + " R$" + carro5._valorvenda);
console.log(carro6._modelo + " " + carro6._fabricante + " R$" + carro6._valorvenda);
console.log("----------------------------------------------------");


// funcao de altera o preco novo valor é passado
// como parametro na funcao 'novopreco(xxx)

// carro1.novopreco(35000);



// usando set
// carro1.ano = '2012-2012';
// carro1.km = 1380;


console.log("Listando carro 1: ")
console.log("----------------------------------------------------");
console.log(carro1);