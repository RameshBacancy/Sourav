import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRoutingModule } from './login-routing.module';
import { TableFilterPipe } from 'src/app/pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, TableFilterPipe
  ],
  imports: [
    CommonModule, loginRoutingModule, FormsModule, ReactiveFormsModule
  ],
})
export class LoginModule { }
