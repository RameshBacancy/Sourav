import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewchildComponent } from './viewchild.component';



const routes: Routes = [
  {
    path: '',
    component: ViewchildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class viewChildgRoutingModule { }
