/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';

export class HeavyWkBus {
  private _ee: EventEmitter = new EventEmitter();
  private _wk: Worker = new Worker('app/heavy_wk/heavy_wk_worker.js');

  listen():Rx.Observable<any> {
    this._wk.onmessage = (event) => {
      this._ee.next(event.data);
    }

    return this._ee.toRx();
  }

  dispatch(info: any):void {
    this._wk.postMessage(info);
  }
}
