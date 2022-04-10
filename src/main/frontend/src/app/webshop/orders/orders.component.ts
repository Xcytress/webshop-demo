import {Component, OnInit} from '@angular/core';
import {ShoppingCart} from "../models/shopping-cart.model";
import {Subscription} from "rxjs/internal/Subscription";
import {WebshopService} from "../service/WebshopService";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    shoppingCart: ShoppingCart;
    total: number;
    paid: boolean;
    sub: Subscription;

    constructor(private webshopService: WebshopService) {
        this.shoppingCart = this.webshopService.ShoppingCart;
    }

    ngOnInit() {
        this.paid = false;
        this.sub = this.webshopService.ShoppingCartChanged.subscribe(() => {
            this.shoppingCart = this.webshopService.ShoppingCart;
        });
        this.loadTotal();
    }

    pay() {
        this.paid = true;
        this.webshopService.saveOrder(this.shoppingCart).subscribe();
    }

    loadTotal() {
        this.sub = this.webshopService.TotalChanged.subscribe(() => {
            this.total = this.webshopService.Total;
        });
    }
}
