import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() ServerBlueCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  serverName = '';
  serverContent = '';
  server: string = ''

  constructor() { }

  ngOnInit() {
  }

}
