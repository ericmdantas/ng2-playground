/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {MainBus, IBus} from 'app/bus/bus.js';

@Component({
  selector: 'ffooter',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <footer>
      <h2>footer</h2>
    </footer>
  `
})

export class FooterCmp {
    _mainBus: IBus = MainBus.getInstance();

    onInit() {
      console.log('footer init');

      this._mainBus.dispatch({message: 'footer ready'});
    }
}
