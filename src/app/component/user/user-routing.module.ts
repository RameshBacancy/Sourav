import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },

  { path: "user/app-view/:id", component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class userRoutingModule { }
