import { ChangeDetectionStrategy, Component,  Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Book } from "../../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookComponent {
  @Input() book!: Book;
  @Output() selectedBook = new EventEmitter<Book>();

  constructor() {
  }
  addSelectedBook(value: Book) {
    console.log(value);
    this.selectedBook.emit(value);
  }
}
