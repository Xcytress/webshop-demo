import {Component, OnInit} from '@angular/core';
import {ShoppingCartItem} from "../models/shopping-cart-item.model";
import {WebshopService} from "../service/WebshopService";
import {Subscription} from "rxjs/internal/Subscription";
import {ShoppingCart} from "../models/shopping-cart.model";
import {Product} from "../models/product.model";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    shoppingCart: ShoppingCartItem[] = [];
    products: Product[] = [];
    selectedShoppingCartItem: ShoppingCartItem;
    private shoppingCartOrders: ShoppingCart;
    sub: Subscription;
    productSelected: boolean = false;

    constructor(private webshopService: WebshopService) {
    }

    ngOnInit() {
        this.shoppingCart = [];
        this.loadProducts();
        this.loadOrders();
    }

    addToCart(order: ShoppingCartItem) {
        this.webshopService.SelectedShoppingCartItem = order;
        this.selectedShoppingCartItem = this.webshopService.SelectedShoppingCartItem;
        this.productSelected = true;
    }

    removeFromCart(shoppingCartItem: ShoppingCartItem) {
        let index = this.getProductIndex(shoppingCartItem.product);
        if (index > -1) {
            this.shoppingCartOrders.items.splice(
                this.getProductIndex(shoppingCartItem.product), 1);
        }
        this.webshopService.ShoppingCart = this.shoppingCartOrders;
        this.shoppingCartOrders = this.webshopService.ShoppingCart;
        this.productSelected = false;
    }

    getProductIndex(product: Product): number {
        return this.webshopService.ShoppingCart.items.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
    }

    loadProducts() {
        this.webshopService.getAllProducts()
            .subscribe(
                (products: any) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.shoppingCart.push(new ShoppingCartItem(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

    loadOrders() {
        this.sub = this.webshopService.ShoppingCartChanged.subscribe(() => {
            this.shoppingCartOrders = this.webshopService.ShoppingCart;
        });
    }

    reset() {
        this.shoppingCart = [];
        this.loadProducts();
        this.webshopService.ShoppingCart.items = [];
        this.loadOrders();
        this.productSelected = false;
    }
}
