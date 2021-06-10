import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from "../../models/book.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() chooseBook!: BookModel;

  constructor() {
  }

  ngOnInit(): void {
  }
}
