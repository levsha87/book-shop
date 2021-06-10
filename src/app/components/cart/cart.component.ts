import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from "../../models/book.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() chooseBooks!: BookModel[];
  chooseBook!: BookModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  look(val: BookModel) {
    this.chooseBook = val;
  }
}
