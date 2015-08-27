/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, Host} from 'angular2/angular2';
import {HalfWayThereCmp} from 'app/hierarchy_cmps/half_way_there_cmp.js';

@Component({
  selector: 'youngest',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div id="youngest">
      <h4>youngest</h4>
    </div>
  `,
  styles: [`
      #youngest {
        border: 1px solid pink;
        padding: 10px;
        width: 100px;
        height: 100px;
      }
    `]
})

export class YoungestCmp {
  constructor(@Host() hwt:HalfWayThereCmp) {
    console.log(hwt.name)
  }

  onInit() {
    console.log('youngest init');
  }
}
