/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'mmain',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div id="m">
      <ng-content></ng-content>
    </div>
  `,
   styles: [`
      #m {
        padding: 10px;
        border: 1px solid lightgray;
      }
   `]
})

export class MainCmp {
    onInit() {
      console.log('main init');
    }
}
