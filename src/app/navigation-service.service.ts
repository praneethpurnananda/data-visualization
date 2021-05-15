import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor() { }

 private newClassSource = new Subject<boolean>()

 navbarClass$ = this.newClassSource.asObservable();

 pushNewClass(data) {
    this.newClassSource.next(data);
 }

}
