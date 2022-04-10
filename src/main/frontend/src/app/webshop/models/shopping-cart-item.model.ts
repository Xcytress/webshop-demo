import {Product} from "./product.model";

export class ShoppingCartItem {
    product: Product;
    amount: number;

    constructor(product: Product, amount: number) {
        this.product = product;
        this.amount = amount;
    }
}
