import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoutingModule } from './home-routing.module';

import { CompanyModule } from '../company/company.module';
import { MatTreeModule } from '@angular/material/tree';
import { HomeComponent } from './home.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, homeRoutingModule, FormsModule, ReactiveFormsModule, CompanyModule, MatTreeModule, MatCheckboxModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule,
    FormsModule,
  ],
})
export class HomeModule { }
