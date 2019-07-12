import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { calRoutingModule } from './calculator-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CalculatorComponent,],
  imports: [
    CommonModule, calRoutingModule, FormsModule,],
})
export class CalModule { }
