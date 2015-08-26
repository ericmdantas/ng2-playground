/// <reference path="../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';
import {HeaderCmp} from 'app/header/header_cmp.js';
import {FooterCmp} from 'app/footer/footer_cmp.js';
import {MainCmp} from 'app/main/main_cmp.js';
import {MainBus, IBus} from 'app/bus/bus.js';
import {SomethingThatUsesWebWorkerCmp} from 'app/something_that_uses_web_worker/something_that_uses_web_worker_cmp.js';
import {SimpleEventsCmp} from 'app/simple_events/simple_event_cmp.js';
import {X9Directive} from 'app/simple_events/simple_event_cmp.js';

@Component({
  selector: 'app',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <hheader></hheader>
    <mmain>
      <something-that-uses-web-worker></something-that-uses-web-worker>
      <simple-events></simple-events>
    </mmain>
    <ffooter></ffooter>
  `,
  directives: [HeaderCmp, MainCmp, FooterCmp, SimpleEventsCmp, SomethingThatUsesWebWorkerCmp, SimpleEventsCmp]
})

export class AppCmp {
  _mainBus: IBus = MainBus.getInstance();

  onInit() {
      console.log('app init');

      this._mainBus
          .listen()
          .toRx()
          .subscribe(i => console.log(i));
  }
}

Promise.all([
              bootstrap(HeaderCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(MainCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(FooterCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(SomethingThatUsesWebWorkerCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(SimpleEventsCmp, bind(MainBus).toFactory(() => MainBus.getInstance()))  ])
       .then(() => console.log('app boot ok'))
       .catch((error) => console.log(`app boot error: ${error}`));
