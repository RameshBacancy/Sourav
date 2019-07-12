import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutletComponent } from './router-outlet.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';






const routes: Routes = [


  {
    path: '',
    component: RouterOutletComponent,


    children: [
      // {
      //   path: '',
      //   redirectTo: 'products',
      //   pathMatch: 'full'

      // },

      {
        path: '/productdetall',
        component: ProductdetailComponent,
        outlet: 'booklist'
      },
      // {
      //   path: "",
      //   component: SidebarComponent,
      //   outlet: ""
      // },
      {
        path: '',
        component: ProductsComponent,
      },


      // {
      //   path: 'product',
      //   component: ProductsComponent
      // },



    ]


  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class routerOutletRoutingModule { }
