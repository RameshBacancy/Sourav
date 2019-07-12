import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtermap',
  templateUrl: './filtermap.component.html',
  styleUrls: ['./filtermap.component.scss']
})
export class FiltermapComponent implements OnInit {

  constructor() { }
  title = 'app';
  isvalid: boolean = true;
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]


  sourav(valid: boolean) {
    this.isvalid = valid;
  }


  officers: any[] = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];




  ngOnInit() {
  }

}
