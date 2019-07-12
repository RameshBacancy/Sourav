import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateGuard } from './activate.guard';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ActivateGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full', },
  { path: 'home', loadChildren: './component/home/home.module#HomeModule' },
  { path: 'company', loadChildren: './component/company/company.module#CompanyModule' },
  { path: 'user', loadChildren: './component/user/user.module#UserModule' },
  { path: 'contact', loadChildren: './component/contact/contact.module#ContactModule' },
  { path: 'reveiw', loadChildren: './component/reveiw/reveiw.module#ReviewModule' },
  { path: 'event', loadChildren: './component/event/event.module#EventModule' },
  { path: 'customer', loadChildren: './component/customer/customer.module#CustomerModule' },
  { path: 'observable', loadChildren: './component/observable/observable.module#ObservableModule' },
  { path: 'errorhandling', loadChildren: './component/errorhandling/errorhandling.module#ErrorHandlingModule' },
  { path: 'viewchild', loadChildren: './component/viewchild/viewchild.module#ViewChildModule' },
  { path: 'filter', loadChildren: './component/filtermap/filtermap.module#FilterMapModule' },
  { path: 'crud', loadChildren: './component/crud/crud.module#CrudModule' },
  { path: 'routeroutlet', loadChildren: './component/router-outlet/router-outlet.module#RouterOutletModule' },
  { path: 'xl', loadChildren: './component/xl/xl.module#XlModule' },
  { path: 'calculator', loadChildren: './component/calculator/calculator.module#CalModule' },
  { path: 'login', loadChildren: './component/login/login.module#LoginModule' },
  { path: 'addprint', loadChildren: './component/addprint/addprint.module#AddPrintModule' },
  { path: 'not-found', loadChildren: './pagenotfound/pagenotfound.module#NotFoundModule' },

  { path: '**', redirectTo: 'not-found' },


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
