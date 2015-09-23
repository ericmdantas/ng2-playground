/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'ev1-cmp',
  events: ['hovered']
})
@View({
  template: `
    <h3>ev1-cmp</h3>
    <button type="button" (mouseenter)="mouseEnterHandler();">hover me</button>
  `
})
export class EvCmp1 {
  hovered: EventEmitter = new EventEmitter();

  mouseEnterHandler():void {
    this.hovered.next({hey: 'i got hovered!'});
  }

  hoverHappened() {
    console.log('hover');
  }
}

@Component({
  selector: 'ev2-cmp',
  events: ['clicked']
})
@View({
  template: `
    <h3>ev2-cmp</h3>
    <button type="button" (click)="clickHandler();">click me</button>
  `
})
export class EvCmp2 {
  clicked: EventEmitter = new EventEmitter();

  clickHandler():void {
    this.clicked.next({hey: 'i got clicked!'});
  }

  clickHappened() {
    console.log('click');
  }
}
