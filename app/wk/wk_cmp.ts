/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, EventEmitter, bootstrap} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'wk',
  viewBindings: [forwardRef(() => WkBus)]
})
@View({
  template: `
    <div>
      <input type="text" #info />
      <button type="button" (click)="callWorker(info.value)">call worker</button>
      <p>The Message is: <span [text-content]="wInfo.msg"></span></p>
      <p>Sent at: <span [text-content]="wInfo.id"></span></p>
    </div>
  `
})

export class WkCmp implements OnInit {
  wInfo: {info?:string, id?: number} = {};

  constructor(@Inject(forwardRef(() => WkBus)) private _wkBus: WkBus) {

  }

  onInit() {
    this._wkBus
        .listen()
        .subscribe(info => {
          this.wInfo = info;
        });
  }

  callWorker(info:any) {
    this._wkBus.dispatch(info);
  }
}

class WkBus {
  private _worker: Worker = new Worker('app/wk/wk.js');
  private _ee: EventEmitter = new EventEmitter();

  listen():Rx.Observable<any> {
      this._worker.onmessage = ({data}) => {
        this._ee.next(data);
      }

      return this._ee.toRx();
  }

  dispatch(info:any):void {
      this._worker.postMessage(info);
  }
}
