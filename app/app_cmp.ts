/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {WorldCmp} from 'app/world/world.js';
import {HeaderCmp} from 'app/header/header_cmp.js';
import {FooterCmp} from 'app/footer/footer_cmp.js';

@Component({
  selector: 'app'
})
@View({
  template: `
    <hheader></hheader>
    <main>
      <world></world>
    </main>
    <ffooter></ffooter>
  `,
  directives: [WorldCmp, HeaderCmp, FooterCmp]
})

export class AppCmp {

}

Promise.all([bootstrap(WorldCmp), bootstrap(HeaderCmp), bootstrap(FooterCmp)])
       .then(() => console.log('app bootstraped'))
       .catch((error) => console.log(`error on app bootstrap: ${error}`))
