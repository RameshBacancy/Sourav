import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() PData: number;
  @Output() childEvent = new EventEmitter();
  @Output() childEventbox = new EventEmitter();
  @Output() childEventBlock = new EventEmitter();

  status: boolean = false;

  onChange(value) {
    this.childEvent.emit(value);
  }

  clickEventbox() {
    this.status = !this.status;
    this.childEventbox.emit(this.status);
  }


  constructor() { }
  ngOnInit() {

  }



}
