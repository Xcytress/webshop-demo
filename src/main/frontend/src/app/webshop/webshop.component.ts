import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingcartComponent} from "./shoppingcart/shoppingcart.component";
import {OrdersComponent} from "./orders/orders.component";

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.css']
})
export class WebshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapsed = true;
      orderFinished = false;

      @ViewChild('productsC')
      productsC: ProductsComponent;

      @ViewChild('shoppingcartC')
      shoppingcartC: ShoppingcartComponent;

      @ViewChild('ordersC')
      ordersC: OrdersComponent;

      toggleCollapsed(): void {
          this.collapsed = !this.collapsed;
      }

      finishOrder(orderFinished: boolean) {
          this.orderFinished = orderFinished;
      }

      reset() {
          this.orderFinished = false;
          this.productsC.reset();
          this.shoppingcartC.reset();
          this.ordersC.paid = false;
      }

}
