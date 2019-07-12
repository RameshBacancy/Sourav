import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [CompanyComponent, EmployeeComponent],
  imports: [
    CommonModule, CompanyRoutingModule, FormsModule
  ],
  exports: [CompanyComponent]
})
export class CompanyModule { }
