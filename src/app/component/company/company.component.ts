import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements AfterViewInit {
  @ViewChild('pcomponent') inputEl: ElementRef;
  receiveMessage: string;
  public CData: number;
  collapedSideBar: boolean;

  ngAfterViewInit() {
    setTimeout(() => this.inputEl.nativeElement.focus(), 1000);
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

} 
