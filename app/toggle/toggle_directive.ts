/// <reference path="../../typings/tsd.d.ts" />

import {Directive, Inject, ElementRef} from 'angular2/angular2';

@Directive({
  selector: '[toggle]',
  host: {
    '(click)': 'clickHandler()'
  }
})
export class ToggleDirective {
  toggleWho: string;

  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  clickHandler():void {
    let _height = this._el.nativeElement.parentNode.querySelectorAll('.toggle-this')[0].style.height;

    this._el.nativeElement.parentNode.querySelectorAll('.toggle-this')[0].style.height = (_height === "0px") ? 'auto' : "0px";
  }
}
