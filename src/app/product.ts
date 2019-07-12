export class Product {
  id: number;
  name: string;
  menu: string;
  constructor(id: number, name: string, menu: string) {
    this.id = id;
    this.name = name;
    this.menu = menu;
  }
}



export class Book {
  id: number;
  name: string;
}