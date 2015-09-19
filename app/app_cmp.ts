/// <reference path="../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';
import {WrapperOfComponentsCmp} from 'app/wrapper_components/wrapper_cmp.js';
import {TitlesCmp} from 'app/titles/titles_cmp.js';
import {WkCmp} from 'app/wk/wk_cmp.js';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.html'],
  directives: [TitlesCmp, WrapperOfComponentsCmp, WkCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init');
  }
}
