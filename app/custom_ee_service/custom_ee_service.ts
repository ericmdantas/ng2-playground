/// <reference path="../,,/typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';

export class CustomEEService {
  _ee: EventEmitter = new EventEmitter();

  do() {
    setInterval(() => this._ee.next(Date.now()), 1234);

    return this._ee.toRx();
  }
}
