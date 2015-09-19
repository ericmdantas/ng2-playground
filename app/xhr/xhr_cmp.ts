/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';

@Component({
  selector: 'xhr-cmp'
})
@View({
  templateUrl: 'app/xhr/xhr.html',
  styleUrls: ['app/xhr/xhr.html']
})
export class XhrCmp implements OnInit {
  r: JSON;

  onInit() {
    console.log('xhr-cmp init');
  }
}
