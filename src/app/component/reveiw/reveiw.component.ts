import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reveiw',
  templateUrl: './reveiw.component.html',
  styleUrls: ['./reveiw.component.scss']
})
export class ReveiwComponent implements OnInit {

  serverElements = []
  serverName = "";
  serverContent = "";


  AddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent,
    });
  }


  AddServerblue() {
    this.serverElements.push({
      type: 'blueserver',
      name: this.serverName,
      content: this.serverContent,
    });
  }
  loadedfeature = "shopping-list2"

  onnavigated(feature: string) {
    this.loadedfeature = feature;
  }


  constructor() { }


  ngOnInit() {
  }



}
