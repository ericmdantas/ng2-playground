/// <reference path="../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {ContainerCmp} from 'app/container/container_cmp.js';
import {WkCmp} from 'app/wk/wk_cmp.js';
import {MainHostCmp} from 'app/host/host_cmp.js';
import {MainQueryCmp} from 'app/query/query_cmp.js';
import {NiyCmp} from 'app/not_instantiated_yet/niy_cmp.js';
import {Cmp1Cmp} from 'app/di/di_hierarchy_cmp.js';
import {XhrCmp} from 'app/xhr/xhr_cmp.js';

@Component({
  selector: 'app',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
  <main>
    <container [tit]="'wk'">
      <wk></wk>
    </container>

    <container [tit]="'host'">
      <main-host></main-host>
    </container>

    <container [tit]="'query'">
      <main-query></main-query>
    </container>

    <container [tit]="'niy'">
      <niy-cmp></niy-cmp>
    </container>

    <container [tit]="'di-hierarchy'">
      <cmp1></cmp1>
    </container>

    <container [tit]="'xhr'">
      <xhr-cmp></xhr-cmp>
    </container>
  </main> 
  `,
  directives: [WkCmp, ContainerCmp, MainHostCmp,
               MainQueryCmp, MainQueryCmp, NiyCmp,
               Cmp1Cmp, XhrCmp]
})

export class AppCmp {
  onInit() {
    console.log('app init');
  }
}

Promise.all([bootstrap(ContainerCmp), bootstrap(WkCmp), bootstrap(MainHostCmp),
             bootstrap(MainQueryCmp), bootstrap(NiyCmp), bootstrap(Cmp1Cmp),
             bootstrap(XhrCmp) ])
       .then(() => console.log('app boot'))
       .catch((error) => console.log(`error on app boot: ${error}`));
