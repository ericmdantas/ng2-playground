/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, EventEmitter} from 'angular2/angular2';
import {Cmp1} from 'app/wrapper_components/cmp1_cmp.js';
import {Cmp2} from 'app/wrapper_components/cmp2_cmp.js';

@Component({
  selector: 'wrapper-of-components'
})
@View({
  template: `
    <cmp1 #cmp1 (click)="cmp2.exec();"></cmp1>
    <cmp2 #cmp2 (click)="cmp1.exec();"></cmp2>
  `,
  directives: [Cmp1, Cmp2]
})
export class WrapperOfComponentsCmp implements OnInit {
  onInit() {
    console.log('wrapper-of-components init');
  }
}
