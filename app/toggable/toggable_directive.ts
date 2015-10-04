/// <reference path="../../typings/tsd.d.ts"/>

import {Directive, ElementRef, Inject} from 'angular2/angular2';

@Directive({
  selector: '[toggable]',
  host: {
    '(click)': 'clickHandler()'
  }
})
export class ToggableDirective {
    constructor(@Inject(ElementRef) private _el: ElementRef) {

    }

    clickHandler() {
      console.log('clicked');
    }
}
