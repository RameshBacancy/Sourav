import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  collapsed: boolean;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    //this.collapsedEvent.emit(this.collapsed);
  }


  constructor() { }

  ngOnInit() {
  }

}
