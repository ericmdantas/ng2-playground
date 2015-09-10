/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, ViewQuery, QueryList} from 'angular2/angular2';
import {forwardRef} from 'angular2/di';

@Component({
  selector: 'main-query',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>main-query</h2>
    <sub-query></sub-query>
  `,
  directives: [forwardRef(() => SubQueryCmp)]
})

export class MainQueryCmp {
    constructor(@ViewQuery(SubQueryCmp) private _subQuery: QueryList<SubQueryCmp>) {

    }

    onInit() {
      console.log('main-query init');
      console.log(this._subQuery);
    }
}

@Component({
  selector: 'sub-query'
})
@View({
  template: `
    <h2>sub-query</h2>
  `
})

class SubQueryCmp {
  onInit() {
    console.log('sub-query init');
  }
}
