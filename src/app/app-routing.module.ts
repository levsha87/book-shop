import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from "./components/book/book.component";
import { CartComponent } from "./components/cart/cart.component";

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'book', component: BookComponent },
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
