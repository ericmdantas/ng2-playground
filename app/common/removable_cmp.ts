/// <reference path="../,,/typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
  selector: 'removable',
  events: ['removed'],
  properties: ['infoId'],
  lifecycle: [LifecycleEvent.onInit],
  viewBindings: [EventEmitter]
})
@View({
  template: `
    <span (click)="removedHandler(infoId)">x</span>
  `,
  styles: [
    `
      span {
        padding: 10px 15px;
        color: red;
        border: 1px solid red;
        background-color: transparent;
        transition: all .15s;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }

      span:active {
        color: #fff;
        background-color: red;
      }
    `
  ]
})

export class RemovableCmp {
  removed: EventEmitter;
  infoId: number|string = '';

  constructor(@Inject(EventEmitter) ee: EventEmitter) {
    this.removed = ee;
  }

  onInit() {
    console.log('removable init');
  }

  removedHandler(id:number|string):void {
    this.removed.next(id);
  }
}
