import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addPrintRoutingModule } from './addprint-routing.module';
import { AddprintComponent } from './addprint.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerelementComponent } from './serverelement/serverelement.component';



@NgModule({
  declarations: [AddprintComponent, CockpitComponent, ServerelementComponent],
  imports: [
    CommonModule, addPrintRoutingModule, FormsModule
  ],

})
export class AddPrintModule { }
