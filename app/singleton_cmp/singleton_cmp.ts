/// <reference path="../../typings/tsd.d.ts" />

import {Component, provide, OnInit} from 'angular2/angular2';

class SingletonModel {
  name: string = 'something';
  created: number = Date.now();
}

@Component({
  selector: 's1-cmp',
  template: `
    <h5>s1</h5>
  `
})
class S1Cmp implements OnInit {
  constructor(private _sm: SingletonModel) {

  }

  onInit() {
    console.log(this._sm);
  }
}

@Component({
  selector: 's2-cmp',
  template: `
    <h5>s2</h5>
  `
})
class S2Cmp implements OnInit {
  constructor(private _sm: SingletonModel) {

  }

  onInit() {
    console.log(this._sm);
  }
}

@Component({
  selector: 'singleton-cmp',
  providers: [SingletonModel],
  template: `
    <h3>singleton</h3>
    <s1-cmp></s1-cmp>
    <s2-cmp></s2-cmp>
  `,
  directives: [S1Cmp, S2Cmp]
})
export class SingletonCmp implements OnInit {
  constructor(private _sm: SingletonModel) {
  }

  onInit() {
    console.log(this._sm);
  }
}
