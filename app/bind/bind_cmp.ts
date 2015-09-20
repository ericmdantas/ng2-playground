/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bind, Inject, OnInit} from 'angular2/angular2';

class C1 {
  info: string = `hello, I'm c1`;
}

class C2 {
  info: string = `hello, I'm c2`;
}

class F1 {
  constructor(public info: string) {

  }
}

class F2 {
  constructor(public info: string) {

  }
}

@Component({
  selector: 'bind-cmp',
  bindings: [bind(C1).toClass(C2), bind(F2).toFactory(() => new F1("hello, im f1"))]
})
@View({
  template: `
    <p>injected clazz1, but got: <span  [text-content]="clazz1.info"></span></p>
    <p>injected f2, but got: <span [text-content]="f2.info"></span></p>
  `
})
export class BindCmp implements OnInit {

  constructor(@Inject(C1) public clazz1: C1, @Inject(F2) public f2: F2) {

  }

  onInit() {
    console.log('bind-cmp init');
  }
}
