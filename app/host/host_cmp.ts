/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Host, OnInit} from 'angular2/angular2';
import {forwardRef} from 'angular2/di';

@Component({
  selector: 'main-host'
})
@View({
  template: `
    <h2>sub-host</h2>
    <sub-host></sub-host>
  `,
  directives: [forwardRef(() => SubHostCmp)]
})

export class MainHostCmp implements OnInit {
  hostName: string = 'main-host-name-something'

  constructor() {

  }

  onInit() {
    console.log('main-host init');
  }
}

@Component({
  selector: 'sub-host'
})
@View({
  template: `
    <h3>sub-host</h3>
  `
})

class SubHostCmp {
  constructor(@Host() private _mh: MainHostCmp) {

  }

  onInit() {
    console.log('sub-host init');
    console.log(this._mh);
  }
}
