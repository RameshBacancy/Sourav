import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { ChildComponent } from '../child/child.component';



@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() sideBarbox: ChildComponent


  // @HostListener('click')

  // click() {
  //   this.sideBarbox.toggle();
  // }



  @Output() Toogle_block: EventEmitter<null> = new EventEmitter();

  @HostListener('click')

  click() {
    this.Toogle_block.emit();
  }


}
