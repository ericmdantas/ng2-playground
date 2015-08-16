/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Xtorage} from 'app/utils/xtorage.js';

@Component({
  selector: 'clear-cache'
})
@View({
  template: `
    <button type="button"
            (click)="cleanCache()">clear_cache</button>
  `,
  styles: [
    `
      button {
        background-color: red;
        border: 1px solid red;
        padding: 5px;
        position: absolute;
        top: 10px;
        right: 10px;
        float: right;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
    `
  ]
})

export class ClearCacheCmp {
  _xtorage: Xtorage = new Xtorage();

  cleanCache() {
    this._xtorage.removeAll();
  }
}
