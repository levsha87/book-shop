import { Component } from '@angular/core';
import { BookModel, books } from "./models/book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookShop';
  books: BookModel[] = books;
  chooseBooks: BookModel[] = [];

  addChooseBook(chooseBook: BookModel) {
    this.chooseBooks.push(chooseBook);
  }
}
