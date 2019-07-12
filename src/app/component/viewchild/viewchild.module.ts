import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewchildComponent } from './viewchild.component';
import { viewChildgRoutingModule } from './viewchild-routing.module';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [ViewchildComponent, CounterComponent],
  imports: [
    CommonModule, viewChildgRoutingModule,
  ],
})
export class ViewChildModule { }
