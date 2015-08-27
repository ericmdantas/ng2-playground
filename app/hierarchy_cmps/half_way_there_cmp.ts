/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, Host} from 'angular2/angular2';
import {OldestCmp} from 'app/hierarchy_cmps/oldest_cmp.js';

@Component({
  selector: 'half-way-there',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div id="half-way-there">
      <h4>half way there</h4>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
      #half-way-there {
        border: 1px solid brown;
        padding: 10px;
        width: 150px;
        height: 250px;
      }
    `]
})

export class HalfWayThereCmp {
    name:string = 'half way there, bro';

    constructor(@Host() o: OldestCmp) {
      console.log(o.name);

      o.clickHandler();
    }

    onInit() {
      console.log('half-way-there init');
    }
}
