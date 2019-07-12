import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resource } from './userinterface';
import { Router } from '@angular/router';
import { SpinnerService } from './spinner.service';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private businessResourceSubj = new BehaviorSubject<Resource[]>(null);

  constructor(
    private router: Router,
    private spinnerService: SpinnerService,
  ) {
    // Get resource data in business portal
    this.getBusinessData();
  }

  /**
 * Get Business Recource Observable
 */
  public getBusinessResourceObs(): Observable<Resource[]> {
    return this.businessResourceSubj.asObservable();
  }


  /**
  * Gets all Business Data */
  public getBusinessData() {
    Promise.all([
      this.getBusinessResources().catch(() => null),
    ]);
  }


  /**
   * Gets Business Resources
   */
  private getBusinessResources() {
    this.spinnerService.openSpinner();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.businessResourceSubj.next(<Resource[]>this.getMockResources());
        this.spinnerService.closeSpinner();
        resolve();
      }, 700);
    });
  }

  private getMockResources(): Resource[] {
    return [
      {
        resourceId: 1,
        resourceName: 'Henry Shelton',
        resourceType: 'Person',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 2,
        resourceName: 'Sam Harper',
        resourceType: 'Person',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 3,
        resourceName: 'Wheel Balancing Machine',
        resourceType: 'Asset',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 4,
        resourceName: 'Workbay 1',
        resourceType: 'Workspace',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 5,
        resourceName: 'Henry Shelton',
        resourceType: 'Person',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 6,
        resourceName: 'Sam Harper',
        resourceType: 'Person',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 7,
        resourceName: 'Wheel Balancing Machine',
        resourceType: 'Asset',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },
      {
        resourceId: 8,
        resourceName: 'Workbay 1',
        resourceType: 'Workspace',
        resourceImage: 'assets/images/user-img.jpg',
        hireResource: true,
        resourceRating: 1,
        resourceAddress: '36 Margaret Street, Sydney',
        resourceHourBilled: 28,
        resourceTotalHours: 40,
        resourceUpcomingJobs: 5,
        resourceUpcomingJobsThisWeek: 5,
        resourceCompletedJobs: 1,
        resourceTotalJobs: 2
      },

    ];
  }


}


