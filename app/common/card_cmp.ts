/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'card',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div class="card col-6">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card {
        padding: 10px;
        border: 1px solid #ddd;
        transition: all .3s;
        position: relative;
      }

      .card:hover {
        border: 1px solid #aaa;
      }
    `
  ]
})

export class CardCmp {
  onInit() {
    console.log('card init');
  }
}
