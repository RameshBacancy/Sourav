import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltermapComponent } from './filtermap.component';




const routes: Routes = [
  {
    path: '',
    component: FiltermapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class fiterMapRoutingModule { }
