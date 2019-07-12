import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
// import { DemoMaterialModule } from '../moduless';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule, contactRoutingModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxE23-ThTDtF3AcU0hNMJ1a4R_Dr41Sg4'
    }), ReactiveFormsModule, MatTreeModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatFormFieldModule
  ],
  exports: [ContactComponent]

})
export class ContactModule { }
