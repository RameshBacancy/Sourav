import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // @HostBinding('class.is-open')
  // isOpen = false;

  // toggle() {
  //   this.isOpen = !this.isOpen;

  // }

  @HostBinding('class.is-open') @Input()
  isOpen = false;

}