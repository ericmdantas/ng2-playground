/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Xtorage} from 'app/utils/xtorage.js';

@Component({
  selector: 'clean-cache'
})
@View({
  template: `
    <button type="button"
            (click)="cleanCache()">clean_cache</button>
  `,
  styles: [
    `
      button {
        background-color: transparent;
        border: 1px solid red;
        padding: 5px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    `
  ]
})

export class CleanCacheCmp {
  _xtorage: Xtorage = new Xtorage();

  cleanCache() {
    this._xtorage.removeAll();
  }
}
