import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  form = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
    location: new FormControl('', Validators.required),
  })

  constructor() { }
}
