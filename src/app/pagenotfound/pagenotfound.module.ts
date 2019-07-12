import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageNotFoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound.component';


@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [CommonModule, pageNotFoundRoutingModule],
})
export class NotFoundModule { }
