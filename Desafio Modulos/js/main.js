import Order from "./models/order";
import * as ordService from "./services/order-service.js"

const dado = document.getElementById("dadosInput").innerHTML.split("\n");

const order = new Order(dado[0], Number(dado[1]), Number(dado[2]));

const valorTotal = ordService.total(order);

console.log(`Pedido Código ${dado[0]}`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);