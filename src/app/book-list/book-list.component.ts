import { Component } from '@angular/core';
import { BookListService } from "./book-list.service";
import { Book } from "../models/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  selectedBook!: Book;
  title = 'Book Shop';
  books: Book [];

  constructor(private bookListService: BookListService) {
    this.books = this.bookListService.getBooks();
  }

  addSelectedBook(selectedBook: Book) {
    this.selectedBook = {...selectedBook};
    console.log(this.selectedBook);
  }
}
