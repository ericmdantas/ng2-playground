/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, ElementRef, Directive, forwardRef, bind, OnInit, Inject, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'forward-ref-cmp',
  viewBindings: [bind(forwardRef(() => LateToThePartyClass)).toFactory(() => new LateToThePartyClass(`late again! ${Date.now()}`))]
})
@View({
  template: `
    <p [text-content]="late.name"></p>
    <button type="button" hover-thief (hovered)="wtf($event)" (clicked)="wtf($event)">hover/click me</button>
  `,
  directives: [forwardRef(() => HoverThiefDirective)]
})
export class ForwardRefCmp implements OnInit {
  constructor(@Inject(forwardRef(() => LateToThePartyClass)) public late: LateToThePartyClass) {

  }

  onInit() {
    console.log('forward-ref-cmp init');
  }

  wtf(ev) {
    console.log(ev);
  }
}

class LateToThePartyClass {
  name: string;

  constructor(name) {
    this.name = name;

    console.log(`hello, ${this.name}!`);
  }
}

@Directive({
  selector: '[hover-thief]',
  events: ['hovered', 'clicked'],
  host: {
    '(mouseenter)': 'hoverHandler()',
    '(click)': 'clickHandler()'
  }
})
class HoverThiefDirective {
  hovered: EventEmitter = new EventEmitter();
  clicked: EventEmitter = new EventEmitter();

  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  hoverHandler() {
    this.hovered.next({got: 'hovered'});
  }

  clickHandler() {
    this.clicked.next({got: 'clicked'});
  }
}
