import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Apples {
  applesNumber: number;
  countTime: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApplesService {
  constructor() {}
  private subject = new Subject<Apples>();

  sendData(applesNumber: number, countTime: number) {
    this.subject.next({ applesNumber, countTime });
  }

  getData(): Observable<Apples> {
    return this.subject.asObservable();
  }
}
