import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableComponent } from './observable.component';
import { observableRoutingModule } from './observable-routing.module';


@NgModule({
  declarations: [ObservableComponent],
  imports: [
    CommonModule, observableRoutingModule,
  ],


})
export class ObservableModule { }
