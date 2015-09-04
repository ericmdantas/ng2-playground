/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, EventEmitter} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'wk-xhr-cmp',
  lifecycle: [LifecycleEvent.onInit],
  bindings: [forwardRef(() => WkXhrService)]
})
@View({
  template: `
    <h2>wk-xhr</h2>
    <button type="button"
            (click)="fetchStuff()">wk-xhr-button</button>
  `
})

export class WkXhrCmp {
    constructor(@Inject(WkXhrService) private _wk: WkXhrService) {

    }

    onInit() {
      console.log('wk-xhr-cmp init');

      this._wk
          .listen()
          .subscribe(info => {
            console.log(info);
          });
    }

    fetchStuff() {
      this._wk.dispatch("something");
    }
}

class WkXhrService {
  public wk: Worker = new Worker('app/wk_xhr/wk_xhr_worker.js');
  private _ee: EventEmitter = new EventEmitter();

  listen():Rx.Observable<any> {
    this.wk.onmessage = (event) => {
      debugger;
      this._ee.next(event.data);
    };

    return this._ee.toRx();
  }

  dispatch(info:any):void {
    this.wk.postMessage(info);
  }
}
