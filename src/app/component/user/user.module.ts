import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { userRoutingModule } from './user-routing.module';
import { TableFilterPipe } from 'src/app/pipe.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { GrdFilterPipe } from 'src/app/grd-filter.pipe';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [UserComponent, TableFilterPipe, GrdFilterPipe, ViewComponent],
  imports: [
    CommonModule, userRoutingModule, FormsModule, NgxPaginationModule
  ]
})
export class UserModule { }
