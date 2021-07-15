import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from "../orders/orders.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersModule
  ],
  providers:    [],
  exports:      [ CommonModule, OrdersModule ],
})
export class SharedModule { }
