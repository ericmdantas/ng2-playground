/// <reference path="../../typings/tsd.d.ts" />

import {Directive, ElementRef, Inject} from 'angular2/angular2';

@Directive({
  selector: '[activate]',
  host: {
    '(click)': 'activateHandler()'
  }
})

export class ActivateDirective {
  element: ElementRef;
  _classList: string[];

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.element = el;
  }

  activateHandler() {
    this._classList = this.element.nativeElement.classList;

    if (!this._classList.indexOf("activated")) {
      this.element.nativeElement.className += " activated";
    }
  }
}
