/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, Host} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {SomeModel} from 'app/di/di_stuff.js';
import {DiCmp} from 'app/di/di_cmp.js';

@Component({
  selector: 'di-child',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h3>di child</h3>
  `,
  styles: [`
      h3 {
        padding-left: 15px;
      }
  `]
})

export class DiChildCmp {
  constructor(@Inject(SomeModel) private _sm:SomeModel) {
  }

  onInit() {
    console.log('di-child init');
    console.log(this._sm);
  }
}
