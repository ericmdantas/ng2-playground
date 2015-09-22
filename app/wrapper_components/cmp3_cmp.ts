/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'cmp3',
  events: ['customEvent']
})
@View({
  templateUrl: 'app/wrapper_components/cmp3.html',
  styleUrls: ['app/wrapper_components/cmp3.css']
})
export class Cmp3 {
  customEvent: EventEmitter = new EventEmitter();

  forwardCustomEvent() {
    this.customEvent.next('custom event from cmp3!');
  }

  exec(ev) {
    alert(ev);
  }
}
