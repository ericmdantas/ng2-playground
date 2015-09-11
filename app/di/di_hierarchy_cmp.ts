/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2'
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
  selector: 'cmp1',
  bindings: [ChildModel]
})
@View({
  template: `
    <h2>cmp1</h2>
    <cmp2></cmp2>
  `,
  directives: [forwardRef(() => Cmp2Cmp)]
})

export class Cmp1Cmp implements OnInit {
  constructor(@Inject(ChildModel) private _cm: ChildModel) {

  }

  onInit() {
    console.log('cmp1 hierarchy init');
    console.log(this._cm);
  }
}

@Component({
  selector: 'cmp2',
  bindings: [ChildModel]
})
@View({
  template: `
    <h2>cmp2</h2>
    <cmp3></cmp3>
  `,
  directives: [forwardRef(() => Cmp3Cmp)]
})

class Cmp2Cmp implements OnInit {
  constructor(@Inject(ChildModel) private _cm: ChildModel) {

  }

  onInit() {
    console.log('cmp2 hierarchy init');
    console.log(this._cm);
  }
}

@Component({
  selector: 'cmp3',
  bindings: [ChildModel]
})
@View({
  template: `
    <h2>cmp3</h2>
  `
})

class Cmp3Cmp {
  constructor(@Inject(ChildModel) private _cm: ChildModel) {

  }

  onInit() {
    console.log('cmp3 hierarchy init');
    console.log(this._cm);
  }
}
