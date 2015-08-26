/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {IBus, MainBus} from 'app/bus/bus.js';

@Component({
  selector: 'hheader',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <header>
      <h2>header</h2>
    </header>
  `
})

export class HeaderCmp {
  _mainBus: IBus = MainBus.getInstance();

  onInit() {
    console.log('header init');

    this._mainBus.dispatch({message: 'header ready'});
  }
}
