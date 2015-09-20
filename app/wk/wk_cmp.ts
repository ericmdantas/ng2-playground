/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, Inject, EventEmitter} from 'angular2/angular2';

class WkBus {
  private _wk: Worker = new Worker('app/wk/wk.js');
  private _ee: EventEmitter = new EventEmitter();

  listen():Rx.Observable<any> {
    this._wk.addEventListener('message', ({data}) => {
      this._ee.next(data);
    });

    return this._ee.toRx();
  }

  dispatch(info:any):void {
    this._wk.postMessage(info);
  }
}

@Component({
  selector: 'wk-cmp',
  bindings: [WkBus]
})
@View({
  templateUrl: 'app/wk/wk.html',
  styleUrls: ['app/wk/wk.css']
})
export class WkCmp implements OnInit {
  r: string = 'nothing loaded';

  constructor(@Inject(WkBus) private _wkBus: WkBus) {

  }

  onInit() {
    console.log('wk-cmp init');

    this._wkBus
        .listen()
        .subscribe(({message}) => {
          this.r = message;
        });
  }

  doHeavyTaskHandler(n:number):void {
    this.r = 'loading';

    this._wkBus.dispatch(n);
  }
}
