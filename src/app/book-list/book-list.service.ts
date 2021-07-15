import { Injectable } from '@angular/core';
import { Book, FictionGenres } from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  books: Array<Book> = [
    {
      name: 'The Da Vinci Code',
      author: 'Dan Brown',
      description: 'The secret code is hidden in the works of Leonardo da Vinci ...\n' +
        '\n' +
        'Only he will help find Christian shrines that give unthinkable power and power ...\n' +
        '\n' +
        'The key to the greatest mystery, over which humanity has fought for centuries, can finally be found ...\n' +
        '\n' +
        'Absolute bestseller of the XXI century!',
      price: 20,
      category: FictionGenres.DetectiveMystery,
      createDate: 2000,
      isAvailable: true
    },
    {
      name: 'Ivanhoe',
      author: 'Walter Scott',
      description: 'One of the most popular novels by Walter Scott "Ivanhoe" (1819) tells about fascinating and heroic events from the life of medieval England. The writer refers to an important historical moment when King Richard the Lionheart returns to England after the Crusades and captivity. The country is torn apart by conflicts between the Saxons and the Normans, and the main character, the Saxon knight Ivanhoe, ardently devoted to the Norman king Richard, is offered as an example of how two warring peoples can get along in one territory. But Scott\'s historicism in this novel is rather external, aimed at recreating the atmosphere and color of the era.',
      price: 10,
      category: FictionGenres.Adventure,
      createDate: 1819,
      isAvailable: true
    },
    {
      name: 'Nineteen Eighty-Four',
      author: 'George Orwell',
      description: '“Everything in the city looked colorless - except for the posters pasted all over the place. From every noticeable angle the face of the black mustache looked. From the house opposite, too. BIG BROTHER IS LOOKING AT YOU, - said the signature, and dark eyes looked into Winston\'s eyes "...\n' +
        'Orwell\'s 1984 is an expression of sentiment and warning. The mood that it expresses is very close to despair for the future of man, and the warning is that if the course of history does not change, then people around the world will lose their most human qualities, turn into soulless automata, and will not even suspect about it. ... © German philosopher Erich Fromm',
      price: 100,
      category: FictionGenres.Dystopian,
      createDate: 1949,
      isAvailable: false
    },
  ];

  getBooks(){
    return this.books;
  }
}
