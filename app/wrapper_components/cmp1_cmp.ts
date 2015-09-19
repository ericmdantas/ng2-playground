/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'cmp1'
})
@View({
  templateUrl: 'app/wrapper_components/cmp1.html',
  styleUrls: ['app/wrapper_components/cmp1.css']
})
export class Cmp1 {
  exec() {
    alert('cmp1')
  }
}
