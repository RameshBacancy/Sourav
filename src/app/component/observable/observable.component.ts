import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { BusinessService } from 'src/app/business.service';
import { Resource } from 'src/app/userinterface';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  providers: [BusinessService]
})
export class ObservableComponent implements OnInit {

  public businessResourceOptions: Resource[];
  private allBusinessResourceOptions: Resource[];
  private _subscriptions: any[] = [];

  resources: any;

  constructor(private businessService: BusinessService) { }


  ngOnInit() {
    this._subscriptions.push(this.businessService.getBusinessResourceObs().subscribe(
      resources => {
        if (resources) {
          this.allBusinessResourceOptions = resources;
          console.log(this.allBusinessResourceOptions)
        } else {
          this.businessResourceOptions = this.allBusinessResourceOptions;
        }
        return;
      },
    ));

  }

}
