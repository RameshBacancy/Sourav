import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XlRoutingModule } from './xl-routing.module';
import { XlComponent } from './xl.component';
import { ValuePipe } from 'src/app/value.pipe';

@NgModule({
  declarations: [XlComponent, ValuePipe],
  imports: [
    CommonModule, XlRoutingModule, FormsModule
  ],
})
export class XlModule { }
