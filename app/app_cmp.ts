/// <reference path="../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';
import {WrapperOfComponentsCmp} from 'app/wrapper_components/wrapper_cmp.js';
import {TitlesCmp} from 'app/titles/titles_cmp.js';
import {WkCmp} from 'app/wk/wk_cmp.js';
import {XhrCmp} from 'app/xhr/xhr_cmp.js';
import {BindCmp} from 'app/bind/bind_cmp.js';
import {FormCmp} from 'app/form/form_cmp.js';
import {DefaultPipesCmp} from 'app/pipes/default_pipes_cmp.js';
import {CustomPipeCmp} from 'app/pipes/custom_pipes_cmp.js';
import {ObservableWrapperCmp} from 'app/observables/observables_cmp.js';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.html'],
  directives: [TitlesCmp, WrapperOfComponentsCmp, WkCmp, XhrCmp, BindCmp, FormCmp, DefaultPipesCmp, CustomPipeCmp, ObservableWrapperCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init');
  }
}
