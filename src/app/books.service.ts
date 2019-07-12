import { Injectable } from '@angular/core';
import { BOOK } from './book';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';


const BOOKS: BOOK[] = [
  { "id": 1, "name": "sourav", "author": "back", "state": "MP" },
  { "id": 2, "name": "RAj", "author": "N", "state": "MP" },
  { "id": 3, "name": "Raja", "author": "N", "state": "MP" },
]

let bookobservable = Observable.of(BOOKS);

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getbook(): Observable<BOOK[]> {
    return bookobservable
  }

}
