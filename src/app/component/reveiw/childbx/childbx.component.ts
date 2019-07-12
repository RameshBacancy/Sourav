import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-childbx',
  templateUrl: './childbx.component.html',
  styleUrls: ['./childbx.component.css']
})
export class ChildbxComponent implements OnInit {
  @Output() featureSelect = new EventEmitter<string>();



  onselect(feature: string) {
    this.featureSelect.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
