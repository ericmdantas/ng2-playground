/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Http} from 'http/http';

class SomeService {
  constructor(@Inject(Http) private _http: Http) {

  }

  rs():Rx.Observable<any> {
    return this._http.get('/api').toRx().map((info) => {
      info.abc = 'abc';
      return info;
    });
  }
}

@Component({
  selector: 'mah-http',
  bindings: [SomeService]
})
@View({
  template: `
    <h2>mah-http</h2>
    <button type="button" (click)="clickMeHandler()">click-me!</button>
  `
})

export class HttpCmp {
  constructor(@Inject(SomeService) private _ss: SomeService) {

  }

  clickMeHandler() {
    this._ss
        .rs()
        .subscribe(info => {
          console.log(info);
        })

  }
}
