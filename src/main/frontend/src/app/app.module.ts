import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebshopComponent } from './webshop/webshop.component';
import { ProductsComponent } from './webshop/products/products.component';
import { ShoppingcartComponent } from './webshop/shoppingcart/shoppingcart.component';
import { OrdersComponent } from './webshop/orders/orders.component';
import { WebshopService } from "./webshop/service/WebshopService";

@NgModule({
  declarations: [
    AppComponent,
    WebshopComponent,
    ProductsComponent,
    ShoppingcartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WebshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
