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

  onInit() {
    this._workerBus
        .listen()
        .toRx()
        .subscribe(i => console.log(i));
  }

  onAllChangesDone() {
    this._workerBus.dispatch('a');
  }
}
