import { Component, OnInit, Output } from '@angular/core';
import { count } from 'rxjs/operators';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  message = 'counter0';
  count: number = 0;


  increasebyone() {
    if (this.count < 5) {
      this.count = this.count + 1;
      this.message = "counter" + this.count;
    }
  }


  decreasebyone() {
    if (this.count > 0) {
      this.count = this.count - 1;
      this.message = "counter" + this.count

    }
  }


  constructor() { }

  ngOnInit() {
  }

}
