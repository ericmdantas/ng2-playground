/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'ny',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>ny</h2>
  `
})

export class NyCmp {
    _ny: Ny;

    constructor(@Inject(forwardRef(() => Ny)) ny: Ny) {
      this._ny = ny;
    }

    onInit() {
      console.log('ny init');
    }
}

class Ny {
  name: string = 'ny';
}
