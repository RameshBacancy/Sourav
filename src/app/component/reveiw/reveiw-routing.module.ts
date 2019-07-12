import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReveiwComponent } from './reveiw.component';

const routes: Routes = [
  {
    path: '',
    component: ReveiwComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class reviewRoutingModule { }
