import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Angular 7 Pipes';
  costOfMyCoffeeCup: number;

  dummyData: any[] = [
    { name: 'G' },
    { name: 'B' },
    { name: 'Z' },
    { name: 'A' },
    { name: 'H' }
  ];
  registerForm: FormGroup;
  summited = false;
  constructor(private builder: FormBuilder) {
    this.costOfMyCoffeeCup = 6;
  }


  ngOnInit() {
    this.registerForm = this.builder.group({
      firstName: ['', [Validators.required, Validators.minLength(15)]],
      lastName: ['', Validators.required,],
    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.summited = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
