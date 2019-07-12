import { Component, OnInit } from '@angular/core';

import { NgForm, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { StudentVM } from 'src/app/component/crud/student-vm';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;


  constructor() { }



  addition() {
    this.result = this.num1 + this.num2;
  }

  minus() {
    this.result = this.num1 - this.num2;
  }

  multi() {
    this.result = this.num1 * this.num2;
  }


  division() {
    this.result = this.num1 / this.num2;
  }


  ngOnInit() {

  }

}
