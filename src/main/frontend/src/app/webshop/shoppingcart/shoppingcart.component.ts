import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ShoppingCart} from "../models/shopping-cart.model";
import {ShoppingCartItem} from "../models/shopping-cart-item.model";
import {WebshopService} from "../service/WebshopService";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
    selector: 'app-shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {
    orderFinished: boolean;
    shoppingCart: ShoppingCart;
    total: number;
    sub: Subscription;

    @Output() onOrderFinished: EventEmitter<boolean>;

    constructor(private webshopService: WebshopService) {
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new EventEmitter<boolean>();
    }

    ngOnInit() {
        this.shoppingCart = new ShoppingCart();
        this.loadCart();
        this.loadTotal();
    }

    private calculateTotal(products: ShoppingCartItem[]): number {
        let sum = 0;
        products.forEach(value => {
            sum += (value.product.price * value.amount);
        });
        return sum;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    finishOrder() {
        this.orderFinished = true;
        this.webshopService.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    }

    loadTotal() {
        this.sub = this.webshopService.ShoppingCartChanged.subscribe(() => {
            this.total = this.calculateTotal(this.shoppingCart.items);
        });
    }

    loadCart() {
        this.sub = this.webshopService.ShoppingCartItemChanged.subscribe(() => {
            let shoppingCartItem = this.webshopService.SelectedShoppingCartItem;
            if (shoppingCartItem) {
                this.shoppingCart.items.push(new ShoppingCartItem(
                    shoppingCartItem.product, shoppingCartItem.amount));
            }
            this.webshopService.ShoppingCart = this.shoppingCart;
            this.shoppingCart = this.webshopService.ShoppingCart;
            this.total = this.calculateTotal(this.shoppingCart.items);
        });
    }

    reset() {
        this.orderFinished = false;
        this.shoppingCart = new ShoppingCart();
        this.shoppingCart.items = []
        this.loadTotal();
        this.total = 0;
    }
}
