import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource, } from './userinterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl = "http://dummy.restapiexample.com/api/v1/employees";
  singleUser = "http://dummy.restapiexample.com/api/v1/employee";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.dataUrl)
  }


  // getUsers(): Observable<test> {
  //   return this.http.get<test>(this.singleUser + "/" + id);
  // }


  // getUsers() {
  //   return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  // }
}
