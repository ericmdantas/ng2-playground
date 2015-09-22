/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';
import {Observable} from 'angular2/angular2';

@Component({
  selector: 'default-pipes-cmp'
})
@View({
  template: `
    <h2>{{'uppercase' | uppercase}}</h2>
    <h2 [text-content]="'LOWERCASE' | lowercase"></h2>
    <h2 [text-content]="999 | number:'.2'"></h2>
    <h2 [text-content]="{a: 1} | json"></h2>
    <h2 [text-content]="123 | currency"></h2>
    <h2 [text-content]="d | date:'shortTime'"></h2>
    <h2 [text-content]="p | async"></h2>
    <h2 [text-content]="r | async"></h2>
  `
})
export class DefaultPipesCmp implements OnInit {
  d: Date = new Date();
  p: string | Promise<string> = 'x';
  r: string | Rx.Observable<any> = 'x';

  onInit() {
    console.log('pipes-cmp init');

    this.p = new Promise((res) => {
      res('promise value :D')
    });

    this.r = new Observable<string>((o) => {
      o.next('rxjs value :D');
    });
  }
}
