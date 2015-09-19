/// <reference path="../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.html'],
})

export class AppCmp implements OnInit {
  onInit() {
    console.log('app init');
  }
}
