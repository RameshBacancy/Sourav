import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltermapComponent } from './filtermap.component';
import { fiterMapRoutingModule } from './filtermap-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/filter.pipe';

@NgModule({
  declarations: [FiltermapComponent, FilterPipe],
  imports: [
    CommonModule, fiterMapRoutingModule, FormsModule
  ],
})
export class FilterMapModule { }
