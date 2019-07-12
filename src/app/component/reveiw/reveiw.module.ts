import { NgModule } from '@angular/core';
import { ReveiwComponent } from './reveiw.component';
import { reviewRoutingModule } from './reveiw-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildblockComponent } from './childblock/childblock.component';
import { ChildbxComponent } from './childbx/childbx.component';
import { OldchildComponent } from './oldchild/oldchild.component';



@NgModule({
  declarations: [ReveiwComponent, ChildblockComponent, ChildbxComponent, OldchildComponent],
  imports: [
    reviewRoutingModule, FormsModule, CommonModule

  ]
})
export class ReviewModule { }
