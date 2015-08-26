/// <reference path="../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {HeaderCmp} from 'app/header/header_cmp.js';
import {FooterCmp} from 'app/footer/footer_cmp.js';
import {MainCmp} from 'app/main/main_cmp.js';

@Component({
  selector: 'app',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <hheader></hheader>
    <mmain>
      <h1>app</h1>
    </mmain>
    <ffooter></ffooter>
  `,
  directives: [HeaderCmp, MainCmp, FooterCmp]
})

export class AppCmp {
  onInit() {
      console.log('app init');
  }
}

Promise.all([bootstrap(HeaderCmp), bootstrap(MainCmp), bootstrap(FooterCmp)])
       .then(() => console.log('app boot ok'))
       .catch((error) => console.log(`app boot error: ${error}`));
