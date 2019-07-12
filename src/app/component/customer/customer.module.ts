import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerlistComponent } from '../customerlist/customerlist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, CustomerlistComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule, ReactiveFormsModule
  ]
})
export class CustomerModule { }
