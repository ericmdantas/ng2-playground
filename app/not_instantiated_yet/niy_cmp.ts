/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Directive, ElementRef, EventEmitter, LifecycleEvent} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'niy',
  viewBindings: [forwardRef(() => NiyService)],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>niy</h2>
    <button type="button" (click)="callService()">service button</button>
    <button type="button" niy-directive>dir button</button>
  `,
  directives: [forwardRef(() => NiyDirective)]
})

export class NiyCmp {
    constructor(@Inject(forwardRef(() => NiyService)) private _niyService: NiyService) {

    }

    onInit() {
      console.log('niy-cmp init');
    }

    callService():void {
      this._niyService.doSomething();
    }
}

class NiyService {
  _ee: EventEmitter = new EventEmitter();

  doSomething():Rx.Observable<any> {
    setTimeout(() => this._ee.next({a: 1}));

    return this._ee.toRx();
  }
}

@Directive({
  selector: '[niy-directive]',
  host: {
    '(click)': 'clickHandler()'
  }
})

class NiyDirective {
  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  onInit() {
      console.log('niy-directive init');
  }

  clickHandler():void {
    console.log('click in niy-directive');
  }
}
