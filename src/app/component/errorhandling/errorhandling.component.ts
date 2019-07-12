import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styleUrls: ['./errorhandling.component.scss']
})
export class ErrorhandlingComponent implements OnInit {

  cookieValue: any = '';
  company: any = null;
  cookieExists: any;

  constructor(private cookieService: CookieService) { }
  ngOnInit() {

    // setTimeout(() => {
    //   this.company = {
    //     name: "",
    //     surname: "baghel",
    //   }
    // }, (500));


    this.cookieService.set('sourav', 'Hello World');
    this.cookieService.set('sourav2', 'Hello World2');
    //this.cookieValue = this.cookieService.delete('sourav')
    alert(this.cookieValue)
    this.cookieExists = this.cookieService.check('sourav2');

  }

}
