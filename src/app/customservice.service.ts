import { Injectable } from '@angular/core';
import { Book } from './product';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of'


const BOOKS: Book[] = [{ 'id': 1, 'name': 'sourav' }, { 'id': 2, 'name': 's1' }]
let bookobservable = Observable.of(BOOKS);


@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {

  constructor() { }
  getbook(): Observable<Book[]> {
    return bookobservable;
  }

}
