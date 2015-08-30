/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, Host} from 'angular2/angular2';

@Component({
  selector: 'host-of-stuff',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>host-of-stuff</h2>
    <ng-content></ng-content>
  `
})

export class HostOfStuffCmp {
  somethingSomething() {
    console.log('yeah')
  }

  onInit() {
    console.log('host_of_stuff init');
  }
}


@Component({
  selector: 'hos-kid',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
  <h2>hos-kid</h2>
  `,
  styles: [`
    h2 {
      padding-left: 15px;
    }
    `]
  })

export class HosKidCmp {
  constructor(@Host() private _hosDad:HostOfStuffCmp) {

  }

  onInit() {
    console.log('hos-kid init');
    console.log(this._hosDad);
  }
}
