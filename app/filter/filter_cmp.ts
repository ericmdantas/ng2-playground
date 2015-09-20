/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';

@Component({
  selector: 'filter-cmp'
})
@View({
  template: `

  `
})
export class FilterCmp implements OnInit {
  onInit() {
    console.log('filter-cmp init');
  }
}
