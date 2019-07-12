import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorhandlingComponent } from './errorhandling.component';


const routes: Routes = [
  {
    path: '',
    component: ErrorhandlingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class errorHandlingRoutingModule { }
