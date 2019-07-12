import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import { Observable } from 'rxjs';
import { StudentVM } from './student-vm';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  dataSaved = false;
  massage: string;
  FromStudent: any;
  StudentId: string = "0";
  allStudent: Observable<StudentVM[]>;
  constructor(private formbulider: FormBuilder, private StudentService: StudentService) { }
  GetStudent() {

    this.allStudent = this.StudentService.getStudent();
  }
  Reset() {
    this.FromStudent.reset();
  }


  AddStudent(StudentVM: StudentVM) {
    debugger;
    StudentVM.Id = this.StudentId;
    this.StudentService.CreateStudent(StudentVM).subscribe(
      () => {
        this.dataSaved = true;
        this.massage = 'Record saved Successfully';
        this.GetStudent();
        this.Reset();
        this.StudentId = "0";
      });
  }
  DeleteStudent(StudentId: string) {
    if (confirm("Are You Sure To Delete this Informations")) {
      this.StudentService.DeleteStudent(StudentId).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = "Deleted Successfully";
          this.GetStudent();
        }
      );
    }
  }
  StudentEdit(StudentId: string) {
    debugger;
    this.StudentService.getStudentById(StudentId).subscribe(Response => {
      this.massage = null;
      this.dataSaved = false;
      debugger;
      this.StudentId = Response.Id;
      this.FromStudent.controls['StudentName'].setValue(Response.StudentName);
      this.FromStudent.controls['FName'].setValue(Response.FName);
      this.FromStudent.controls['MName'].setValue(Response.MName);
      this.FromStudent.controls['ContactNo'].setValue(Response.ContactNo);
    });
  }
  ngOnInit(): void {
    this.FromStudent = this.formbulider.group({
      Id: ['', [Validators.required]],
      StudentName: ['', [Validators.required]],
      FName: ['', [Validators.required]],
      MName: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
    });
    this.GetStudent();
  }

}
