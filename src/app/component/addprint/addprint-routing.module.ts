import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprintComponent } from './addprint.component';



const routes: Routes = [
  {
    path: '',
    component: AddprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class addPrintRoutingModule { }
