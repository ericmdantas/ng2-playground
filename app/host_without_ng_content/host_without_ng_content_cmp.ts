/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, Host, forwardRef} from 'angular2/angular2';

@Component({
  selector: 'hwonc-parent',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>hwonc-parent</h2>
    <hwonc-child></hwonc-child>
  `,
  directives: [forwardRef(() => HostWithoutNgContentChildCmp)]
})

export class HostWithoutNgContentParentCmp {
    onInit() {
      console.log('hwonc-parent init');
    }
}

@Component({
  selector: 'hwonc-child',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>hwonc-child</h2>
  `
})

export class HostWithoutNgContentChildCmp {
    constructor(@Host() private _hp: HostWithoutNgContentParentCmp) {

    }

    onInit() {
      console.log('hwonc-child init');
      console.log(this._hp)
    }
}
