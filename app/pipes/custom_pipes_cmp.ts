/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';

@Component({
  selector: 'custom-pipes-cmp'
})
@View({
  template: `
    <h2 [text-content]="alo | capitalizeMiddle"></h2>
  `
})
export class CustomPipeCmp implements OnInit {
  onInit() {
    console.log('custom-pipes-cmp init');
  }
}
