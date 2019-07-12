import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorhandlingComponent } from './errorhandling.component';
import { errorHandlingRoutingModule } from './errorhandling-routing.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [ErrorhandlingComponent],
  imports: [
    CommonModule, errorHandlingRoutingModule,
  ],
  providers: [CookieService],
})
export class ErrorHandlingModule { }
