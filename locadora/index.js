import {Clients} from "./Clients.js";
import {Cars} from "./Cars.js"


const client1 = new Clients("Albert Gondim", "0000001", "81-3341-1288", "albert@email.com", "15-01-1977", "DL-00002",  "N");
const client2 = new Clients("Maria Madalena", "0000002", "81-3341-1284", "maria@email.com", "14-05-1999", "DL-00045",  "N");
const client3 = new Clients("Jose da Silva", "0000003", "81-3341-3388", "jose@email.com", "01-06-1978", "DL-00077",  "N");
const client4 = new Clients("Frederico Lima", "0000004", "81-3341-5588", "fed@email.com", "23-01-1973", "DL-0088",  "N");
const client5 = new Clients("Joao Lima", "0000005", "81-3451-1288", "joao@email.com", "4-01-1972", "DL-0444", "N");

const car1 = new Cars("ASD-1234","GM","CHEVETTE SL 1980", "Sedan" ,"Green", 80, "S" );
car1.rent(10);

console.log(car1);
