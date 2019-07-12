import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public spinnerOpenSubj = new BehaviorSubject<boolean>(false);

  private spinnerCount = 0;

  constructor() { }

  /**
   * Gets spinner observable
   */
  public getSpinnerObs(): Observable<boolean> {
    return this.spinnerOpenSubj.asObservable();
  }

  /**
   * Opens spinner
   */
  public openSpinner() {
    this.spinnerCount += 1;
    if (this.spinnerCount === 1) {
      this.spinnerOpenSubj.next(true);
    }
  }

  /**
   * Close spinner
   */
  public closeSpinner() {
    this.spinnerCount -= 1;
    if (this.spinnerCount === 0) {
      this.spinnerOpenSubj.next(false);
    }
  }
}
