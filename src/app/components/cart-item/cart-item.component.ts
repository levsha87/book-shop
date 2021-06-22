import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from "../../models/book.model";


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit{
@Input() selectedBook?: Book;
  constructor() {
  }

  ngOnInit(): void {
  }
}
