/// <reference path="../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';
import {FormCmp} from 'app/form_cmp/form_cmp.js';
import {ContainerCmp} from 'app/container_cmp/container_cmp.js';
import {HttpCmp} from 'app/http_cmp/http_cmp.js';
import {WkCmp} from 'app/wk_cmp/wk_cmp.js';

@Component({
  selector: 'app'
})
@View({
  template: `
    <h2 id="app-title">app</h2>

    <container-cmp [t]="'form-cmp'">
      <form-cmp></form-cmp>
    </container-cmp>

    <container-cmp [t]="'http-cmp'">
      <http-cmp></http-cmp>
    </container-cmp>

    <container-cmp [t]="'wk-cmp'">
      <wk-cmp></wk-cmp>
    </container-cmp>
  `,
  directives: [ContainerCmp, FormCmp, HttpCmp, WkCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init')
  }
}
