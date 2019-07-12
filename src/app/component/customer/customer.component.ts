import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  submited: boolean;
  formControll = this.customerService.form.controls;

  submit() {
    this.submited = true;
    if (this.customerService.form.valid) {
      this.submited = false;
    }
  }



  ngOnInit() {
  }

}
