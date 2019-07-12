import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { crudRoutingModule } from './crud-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule, crudRoutingModule, ReactiveFormsModule, FormsModule
  ],

})
export class CrudModule { }
