/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {IBus, WorkerBus} from 'app/bus/bus.js';

@Component({
  selector: 'something-that-uses-web-worker',
  lifecycle: [LifecycleEvent.onInit, LifecycleEvent.onAllChangesDone]
})
@View({
  template: `
    <div id="something-that-uses-web-worker">
      <h3>something that uses a web worker</h3>
      <input type="text" #info />
      <button type="button"
              (click)="callWorker(info.value)">call worker</button>

      <p>
        result:

        <span [text-content]="workerInfo.id"></span>...
        <span [text-content]="workerInfo.info"></span>
      </p>
    </div>
  `,
  styles: [`
        #something-that-uses-web-worker {
          max-width: 200px;
          border: 1px solid blue;
          padding: 10px;
        }
  `]
})

export class SomethingThatUsesWebWorkerCmp {
  _workerBus: IBus = WorkerBus.getInstance();
  workerInfo: {info: any, id: number};

  onInit() {
    this
      ._workerBus
      .listen()
      .subscribe(inf => {
        this.workerInfo = inf;
      });
  }

  callWorker(info:string):void {
    this._workerBus.dispatch(info);
  }
}
