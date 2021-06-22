export interface Book {
  name: string;
  author: string;
  description: string;
  price: number;
  category: FictionGenres | NonfictionGenres;
  createDate: number;
  isAvailable: boolean;
  numberChosenBooks?: number;
}

/*export class  Book {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: FictionGenres | NonfictionGenres,
    public createDate: number,public isAvailable: boolean) {
  }
}*/

/*export class  Book {
  name: string;
  description: string;
  price: number;
  category: FictionGenres | NonfictionGenres;
  createDate: number;
  isAvailable: boolean;

  constructor( params?: Partial<Book> ) {
    Object.assign( this, params );
  }
}*/

export enum NonfictionGenres {
  MemoirAutobiography = 'Memoir & Autobiography',
  Biography = 'Biography',
  Cooking = 'Cooking',
  ArtPhotography = 'Art & Photography',
  Motivational = 'Motivational',
  HealthFitness = 'Health & Fitness',
  CraftsHobbiesHome = 'Crafts, Hobbies & Home',
  BusinessMoney = 'Business & Money',
  LawCriminology = 'Law & Criminology',
  EducationTeaching = 'Education & Teaching'
}

export enum FictionGenres {
  Fantasy = 'Fantasy',
  ScienceFiction = 'Science Fiction',
  Dystopian = 'Dystopian',
  Adventure = 'Adventure',
  Romance = 'Romance',
  DetectiveMystery = 'Detective & Mystery',
  Horror = 'Horror',
  Thriller = 'Thriller',
  HistoricalFiction = 'Historical Fiction',
  YoungAdult = 'Young Adult',
  ChildrenFiction = 'Children’s Fiction'
}

