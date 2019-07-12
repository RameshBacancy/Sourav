import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BOOK } from 'src/app/book';
import { BooksService } from 'src/app/books.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  books: Observable<BOOK[]>
  constructor(private bookservice: BooksService) { }
  ngOnInit() {
    this.books = this.bookservice.getbook();
  }

}
