/// <reference path="../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: `
    <h2 id="app-title">app</h2>
  `
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init')
  }
}
