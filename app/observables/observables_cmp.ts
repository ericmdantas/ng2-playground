/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter, OnInit} from 'angular2/angular2';

@Component({
  selector: 'observable-node-cmp',
  events: ['timeNow']
})
@View({
  template: '<h3>observable-node-cmp</h3>',
  styleUrls: ['app/observables/observables.css']
})
class ObservableNodeCmp implements OnInit {
    timeNow: EventEmitter = new EventEmitter();

    onInit() {
      setInterval(() => {
        this.timeNow.next({time: Date.now()});
      }, 3333);
    }
}

@Component({
  selector: 'observable-wrapper-cmp'
})
@View({
  templateUrl: 'app/observables/observables.html',
  styleUrls: ['app/observables/observables.html'],
  directives: [ObservableNodeCmp]
})
export class ObservableWrapperCmp {
  t: number;

  onObservableNodeEvent(ev: {time: number}) {
    this.t = ev.time;
  }
}
