/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'cmp2'
})
@View({
  templateUrl: 'app/wrapper_components/cmp2.html',
  styleUrls: ['app/wrapper_components/cmp2.css']
})
export class Cmp2 {
  exec() {
    alert('cmp2')
  }
}
