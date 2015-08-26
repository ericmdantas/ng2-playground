/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'ffooter',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <footer>
      <h2>footer</h2>
    </footer>
  `
})

export class FooterCmp {
    onInit() {
      console.log('footer init');
    }
}
