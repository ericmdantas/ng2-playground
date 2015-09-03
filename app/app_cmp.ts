/// <reference path="../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {WkCmp} from 'app/wk/wk_cmp.js';

@Component({
  selector: 'app',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>app</h2>
    <wk></wk>
  `,
  directives: [WkCmp]
})

export class AppCmp {
  onInit() {
    console.log('app init');
  }
}

Promise.all([bootstrap(WkCmp)])
       .then(() => console.log('app boot'))
       .catch((error) => console.log(`error on app boot: ${error}`));
