import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {

  @ViewChild(CounterComponent) counterComponent: CounterComponent;

  increase() {
    this.counterComponent.increasebyone();
  }
  decrease() {
    this.counterComponent.decreasebyone();
  }


  constructor() { }

  ngOnInit() {
  }

}
