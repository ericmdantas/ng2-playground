/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';

@Component({
  selector: 'pipes-cmp'
})
@View({
  template: `

  `
})
export class PipesCmp implements OnInit {
  onInit() {
    console.log('pipes-cmp init');
  }
}
