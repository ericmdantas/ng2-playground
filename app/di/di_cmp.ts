/// <reference path=",./../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {DiChildCmp} from 'app/di/di_child_cmp.js';
import {Inject} from 'angular2/angular2';
import {SomeModel} from 'app/di/di_stuff.js';

@Component({
  selector: 'di',
  lifecycle: [LifecycleEvent.onInit],
  bindings: [SomeModel]
})
@View({
  template: `
    <h2>di</h2>
    <di-child></di-child>
  `,
  directives: [DiChildCmp]
})

export class DiCmp {
  constructor(@Inject(SomeModel) private _sm: SomeModel) {

  }

  onInit() {
    console.log('di init');
    console.log(this._sm);
    this._sm.someProp = 2;
    console.log(this._sm);
  }
}
