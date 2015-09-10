/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {HeavyWkBus} from 'app/heavy_wk/heavy_wk_bus.js';

@Component({
  selector: 'heavy-wk-cmp',
  lifecycle: [LifecycleEvent.onInit],
  bindings: [HeavyWkBus]
})
@View({
  template: `
    <h2>heavy-wk-cmp</h2>
    <button type="button" (click)="doHeavyWorkHandler()">do heavy work</button>
    <p [text-content]="result"></p>
  `
})

export class HeavyWkCmp {
  public static NUM: number = 1000;
  public result: string = 'click the button';

  constructor(@Inject(HeavyWkBus) private _heavyWkBus: HeavyWkBus) {

  }

  onInit() {
    this._heavyWkBus
        .listen()
        .subscribe((info) => {
          this.result = info;
        });
  }

  doHeavyWorkHandler() {
    this.result = 'loading...';
    this._heavyWkBus.dispatch(HeavyWkCmp.NUM);
  }
}
