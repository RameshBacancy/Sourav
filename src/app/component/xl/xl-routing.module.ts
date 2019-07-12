import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XlComponent } from './xl.component';




const routes: Routes = [
  {
    path: '',
    component: XlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class XlRoutingModule { }
