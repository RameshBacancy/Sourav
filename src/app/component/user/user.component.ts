import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Resource, } from 'src/app/userinterface';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';


export interface ress {
  name: string;
  lname: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [DataService]
})
export class UserComponent implements OnInit {



  //
  userObj = {
    theCheckboxId: false,
    theCheckboxName: false,
    theCheckboxAge: false,
    theCheckboxSalary: false,
  }
  showIdEvent(e) {
    this.userObj.theCheckboxId = e.target.checked;
  }
  showNameEvent(e) {
    this.userObj.theCheckboxName = e.target.checked;
  }
  showAgeEvent(e) {
    this.userObj.theCheckboxAge = e.target.checked;
  }
  showSalaryEvent(e) {
    this.userObj.theCheckboxSalary = e.target.checked;
  }

  // all check box select
  checkAll(e) {
    this.users.forEach(x => x.checkAllblock = e.target.checked)
  }

  isAllChecked() {
    return this.users.every(_ => _.checkAllblock);
  }


  private users = [];
  constructor(private datas: DataService, private route: ActivatedRoute) {


  }


  click() {
    this.datas.getUsers().subscribe(data => {
      this.users = data;
    })
  }



  // .subscribe(datas => {
  //   this.users = datas;
  // })

  // public testData = [

  // ];
  // public arr4 = [];
  // private testData = [10, 15, 20, 25, 30];
  // nums = [
  //   { name: "sourav", lname: "ba" },
  //   { name: "sourav2", lname: "ba" }
  // ]
  // num2 = [
  //   { name: 'raja', lname: "ban" },
  //   { name: "raja", lname: "ban" }
  // ]

  public results = [];



  test4 = [
    { id: 4, name: 'test4' },
    { id: 4, name: 'testing4' }
  ];
  test = [
    { id: 1, name: 'test1' },
    { id: 1, name: 'testing1' },
  ];
  test2 = [
    { id: 2, name: 'test2' },
    { id: 1, name: 'testing1' },
  ];
  test5 = [
    { id: 2, name: 'test5' },
    { id: 1, name: 'testing5' },
  ];



  test3 = [[...this.test], [...this.test2], [...this.test5]];





  ngOnInit() {




    // console.log(this.nums.concat(this.nums2));
    //this.results = [...this.nums, ...this.num2];
    //console.log('test4 ::: ', test4);


    this.click();
    // this.results.push([[...this.test], [...this.test4]])


    this.test3[0] = this.test3[0].concat(this.test4);
    this.test3[1] = this.test3[1].concat(this.test4);
    this.test3[2] = this.test3[2].concat(this.test4);

    // this.test5 = [this.test3.push(this.test4)]
    console.log(this.test3);

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }

  config: any;


  pageChanged(event) {
    this.config.currentPage = event;
  }


  public searchText: string;







  public products: Product[] = [
    new Product(1, "Product 001", "Home"),
    new Product(2, "Product 002", "Server"),
    new Product(3, "Product 003", "Prduct"),
    new Product(4, "Product 004", "Product1"),
    new Product(5, "Product 005", "Prodcut 2"),
    new Product(6, "Product 006", "price"),
    new Product(7, "Product 007", "serer"),
    new Product(8, "Product 008", "dfdsfdsds")
  ];










}
