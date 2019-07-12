import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { BOOK } from 'src/app/book';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  books: Observable<BOOK[]>
  constructor(private bookservice: BooksService, private router: Router) { }
  ngOnInit() {
    this.books = this.bookservice.getbook()
  }

  // close() {
  //   this.router.navigate(['/routeroutlet', { outlets: { booklist: null } }]);
  // }

}

