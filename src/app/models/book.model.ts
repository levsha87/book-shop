export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: FictionGenres | NonfictionGenres;
  createDate: number;
  isAvailable: boolean;
}

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

export const books: Array<BookModel> = [
  {
    name: 'Time',
    description: 'About journal',
    price: 20,
    category: NonfictionGenres.BusinessMoney,
    createDate: 2018,
    isAvailable: true
  },
  {
    name: 'Buildings',
    description: 'About architecture',
    price: 10,
    category: NonfictionGenres.BusinessMoney,
    createDate: 2014,
    isAvailable: true
  },
  {
    name: 'Queen',
    description: 'About English Queen',
    price: 100,
    category: NonfictionGenres.Motivational,
    createDate: 2012,
    isAvailable: false
  },
]
