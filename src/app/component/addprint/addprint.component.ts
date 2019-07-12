import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addprint',
  templateUrl: './addprint.component.html',
  styleUrls: ['./addprint.component.css']
})
export class AddprintComponent implements OnInit {

  ServerElement = [];
  serverName = "";
  serverContent = "";



  constructor() { }

  ngOnInit() {
  }

}
