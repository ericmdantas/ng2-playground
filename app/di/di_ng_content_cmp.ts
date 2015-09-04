/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2'
import {Inject, forwardRef} from 'angular2/di';

class BaseModel {
  name: string = 'base-model';
  id: number = Date.now();

  nameIs() {
    console.log(`name is: ${this.name}`);
  }
}

class ChildModel extends BaseModel {
  constructor() {
    super();
  }
}

@Component({
  selector: 'cmp1-content',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>cmp1</h2>
    <ng-content></ng-content>
  `
})

export class Cmp1ContentCmp {
  constructor(@Inject(ChildModel) private _cm: ChildModel) {

  }

  onInit() {
    console.log('cmp1 ng-content init');
    console.log(this._cm);
  }
}

@Component({
  selector: 'cmp2-content',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>cmp2</h2>
    <ng-content></ng-content>
  `
})

class Cmp2ContentCmp {
  constructor(@Inject(ChildModel) private _cm: ChildModel) {

  }

  onInit() {
    console.log('cmp2 ng-content init');
    console.log(this._cm);
  }
}

@Component({
  selector: 'cmp3-content'
})
@View({
  template: `
    <h2>cmp3</h2>
  `
})

class Cmp3ContentCmp {
  constructor(@Inject(ChildModel) private _cm: ChildModel) {

  }

  onInit() {
    console.log('cmp3 ng-content init');
    console.log(this._cm);
  }
}
