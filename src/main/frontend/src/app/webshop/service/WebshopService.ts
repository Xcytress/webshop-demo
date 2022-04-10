import {ShoppingCartItem} from "../models/shopping-cart-item.model";
import {Subject} from "rxjs/internal/Subject";
import {ShoppingCart} from "../models/shopping-cart.model";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class WebshopService {
    private productsUrl = "/api/products";
    private shoppingCartUrl = "/api/cart";

    private shoppingCartItem: ShoppingCartItem;
    private shoppingCart: ShoppingCart = new ShoppingCart();

    private shoppingCartItemSubject = new Subject();
    private shoppingCartSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ShoppingCartItemChanged = this.shoppingCartItemSubject.asObservable();
    ShoppingCartChanged = this.shoppingCartSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    saveOrder(order: ShoppingCart) {
        return this.http.post(this.shoppingCartUrl, order);
    }

    set SelectedShoppingCartItem(value: ShoppingCartItem) {
        this.shoppingCartItem = value;
        this.shoppingCartItemSubject.next(value);
    }

    get SelectedShoppingCartItem() {
        return this.shoppingCartItem;
    }

    set ShoppingCart(value: ShoppingCart) {
        this.shoppingCart = value;
        this.shoppingCartSubject.next(value);
    }

    get ShoppingCart() {
        return this.shoppingCart;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next(value);
    }
}
