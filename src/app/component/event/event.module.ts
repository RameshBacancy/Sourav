import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { homeRoutingModule } from './event-routing.module';
import { ChildComponent } from './child/child.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SidebarComponent } from './sidebar/sidebar.component';
// For MDB Angular Pro


@NgModule({
  declarations: [EventComponent, ChildComponent, ToggleComponent, SidebarComponent],
  imports: [
    CommonModule, homeRoutingModule, AngularFontAwesomeModule
  ],
})
export class EventModule { }
