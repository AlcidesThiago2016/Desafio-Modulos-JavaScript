import * as shiService from "./shipping-service.js"

export function total(order){

    const frete = shiService.shipment(order);
    const desconto = (order.basic * order.discount) / 100.0;
    return order.basic - discount + frete;
}