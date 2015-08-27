/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'oldest',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div id="oldest">
      <h4>oldest</h4>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
      #oldest {
        border: 1px solid orange;
        margin-top: 10px;
        padding: 10px;
        width: 200px;
        height: 400px;
      }
    `]
})

export class OldestCmp {
    name: string = 'oldest cmp, bro';

    clickHandler() {
      console.log('click called');
    }

    onInit() {
      console.log('oldest init');
    }
}
