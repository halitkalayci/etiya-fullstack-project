import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  requestCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() {}

  startLoading() {
    this.requestCountSubject.next(this.requestCountSubject.value + 1);
  }

  // A,B,C => 3
  // A => 5 sn => stopLoading(); // 2
  // B => 10 sn => 5 // 1
  // C => 15 sn => 10 // 0
  stopLoading() {
    let newCount = this.requestCountSubject.value - 1;
    if (newCount < 0) newCount = 0;
    this.requestCountSubject.next(newCount);
  }
}
