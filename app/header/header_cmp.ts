/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'hheader',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <header>
      <h2>header</h2>
    </header>
  `
})

export class HeaderCmp {
  onInit() {
    console.log('header init');
  }
}
