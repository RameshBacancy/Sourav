import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {

  constructor() { }
  isDashboard(): boolean {
    return false;
  }
}
