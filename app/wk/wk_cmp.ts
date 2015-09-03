/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, EventEmitter, bootstrap} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'wk',
  lifecycle: [LifecycleEvent.onInit],
  viewBindings: [forwardRef(() => WkBus)]
})
@View({
  template: `
    <div>
      <button type="button" (click)="callWorker()">call worker</button>
    </div>
  `
})

export class WkCmp {
  constructor(@Inject(forwardRef(() => WkBus)) private _wkBus: WkBus) {

  }

  onInit() {
    this._wkBus
        .listen()
        .subscribe(info => {
          console.log(info);
        });
  }

  callWorker() {
    this._wkBus.dispatch('a');
  }
}

class WkBus {
  private _worker: Worker = new Worker('app/wk/wk.js');
  private _ee: EventEmitter = new EventEmitter();

  listen():Rx.Observable<any> {
      this._worker.onmessage = (event) => {
        this._ee.next(event.data);
      }

      return this._ee.toRx();
  }

  dispatch(info:any):void {
      this._worker.postMessage(info);
  }
}

bootstrap(WkCmp);
