import { Component, OnInit, HostListener } from '@angular/core';

import * as XLSX from 'ts-xlsx';
import { windowCount, windowTime } from 'rxjs/operators';
export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-xl',
  templateUrl: './xl.component.html',
  styleUrls: ['./xl.component.css']
})
export class XlComponent implements OnInit {

  constructor() { }
  value = 0;
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  obj;
  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.obj = XLSX.utils.sheet_to_json(worksheet, { raw: true })
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  ngOnInit() {
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(e: KeyboardEvent) {

    if (e.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.increment();
      console.log(event);
    }
    if (e.keyCode === KEY_CODE.LEFT_ARROW) {
      this.decrement();
    }
  }






  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
