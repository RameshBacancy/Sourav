import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentVM } from './component/crud/student-vm';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  DataUrl = "http://localhost:3000/employeess/"


  getStudent(): Observable<StudentVM[]> {
    return this.http.get<StudentVM[]>(this.DataUrl);
  }
  CreateStudent(OutletVM: StudentVM): Observable<StudentVM[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<StudentVM[]>(this.DataUrl, OutletVM, httpOptions)
  }
  DeleteStudent(StudentId: string): Observable<number> {
    return this.http.delete<number>(this.DataUrl + StudentId);
  }
  getStudentById(StudentId: string): Observable<StudentVM> {
    return this.http.get<StudentVM>(this.DataUrl + StudentId);
  }

}
