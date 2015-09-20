/// <reference path="../../typings/tsd.d.ts" />

import {Directive, Inject, ElementRef, OnInit} from 'angular2/angular2';

@Directive({
  selector: '[toggle]',
  host: {
    '(click)': 'clickHandler()'
  }
})
export class ToggleDirective implements OnInit {
  toggleWho: string;
  toggableElement: HTMLElement;

  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  onInit() {
    this.toggableElement = this._el.nativeElement.parentNode.querySelectorAll('.toggle-this')[0];
    this.toggableElement.style.height = "0px";
  }

  clickHandler():void {
    let _height = this.toggableElement.style.height;
    this.toggableElement.style.height = (_height === "0px") ? 'auto' : "0px";
  }
}
