import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from "../../models/book.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnChanges {
  @Input() selectedBook!: Book;
  selectedBookCartItem?: Book;
  selectedBooks: Book[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.selectedBooks.some(item => item.name === this.selectedBook.name) &&
      this.selectedBook !== undefined) {
      this.selectedBook.numberChosenBooks = 1;
      this.selectedBooks = [...this.selectedBooks, this.selectedBook];
    }
  }

  showSelectedBook(selectedBook: Book) {
    console.log(selectedBook);
    const index = this.selectedBooks.findIndex(item => item === selectedBook);
    this.selectedBookCartItem = {...this.selectedBooks[index]};
  }

  addNumberChosenBook(selectedBook: Book) {
    if (selectedBook.numberChosenBooks ===  0 || selectedBook.numberChosenBooks) {
      selectedBook.numberChosenBooks= selectedBook.numberChosenBooks +  1;
    }
  }

  minusNumberChosenBook(selectedBook: Book) {
    if (selectedBook.numberChosenBooks && selectedBook.numberChosenBooks > 0) {
      selectedBook.numberChosenBooks = selectedBook.numberChosenBooks - 1;
    }
  }

  deleteSelectedBook(selectedBook: Book) {
    const index = this.selectedBooks.findIndex(item => item === selectedBook);
    this.selectedBooks.splice(index, 1);
    if (this.selectedBookCartItem?.name === selectedBook.name) {
      this.selectedBookCartItem = {...this.selectedBooks[index]};
    }
  }
}
