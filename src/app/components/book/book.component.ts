import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { BookModel } from "../../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent {
  @Input() book!: BookModel;
  @Output() onChooseBook = new EventEmitter<BookModel>();

  constructor() {
  }

  onBuy(value: BookModel) {
    this.onChooseBook.emit(value);
  }
}
