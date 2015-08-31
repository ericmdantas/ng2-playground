/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Directive,
        LifecycleEvent, Query, QueryList} from 'angular2/angular2';

@Directive({
  selector: '[something]'
})

class SomeChildDirective {
  someProp: string = 'something - child - directive';
}

@Component({
  selector: 'query-cmp',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div>
      <h2>query-cmp<h2>
      <div something></div>
      <button type="button" (click)="clickHandler()">click</button>
    </div>
  `,
  directives: [SomeChildDirective]
})

export class QueryCmp {
  constructor(@Query(SomeChildDirective) private _someChild: QueryList<SomeChildDirective>) {
  }

  clickHandler() {
    console.log(this._someChild);
  }

  onInit() {
    console.log('query-cmp init')
  }
}
