import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateService } from './activate.service';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, NgbModule,
    AppRoutingModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [ActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
