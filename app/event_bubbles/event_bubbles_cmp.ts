/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, EventEmitter} from 'angular2/angular2';
import {forwardRef} from 'angular2/di';

@Component({
  selector: 'p-cmp'
})
@View({
  template: `
    <h2>p-cmp</h2>
    <c-cmp (click)="parentClickHandler()"
           (something-random)="parentSomethingRandomHappened($event)"></c-cmp>
  `
})

export class PCmp implements OnInit {
  onInit() {
    console.log('p-cmp init');
  }

  parentClickHandler() {
    console.log('click happened on c-cmp');
  }

  parentSomethingRandomHappened(ev) {
    console.log(ev);
  }
}

@Component({
  selector: 'c-cmp',
  events: ['somethingRandom']
})
@View({
  template: `
    <h2>c-cmp</h2>
    <button type="button" (click)="childClickHandler()">click me</button>
  `
})

class CCmp implements OnInit {
  somethingRandom: EventEmitter = new EventEmitter();

  onInit() {
    console.log('c-cmp init');
  }

  childClickHandler() {
    console.log('click called on child');
    this.somethingRandom.next({clicked: 'child'});
  }
}
