/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, ElementRef, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
  selector: 'container',
  properties: ['innerTit: tit'],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div class="container">
      <span class="tit" [text-content]="tit"></span>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
      .container {
        position: relative;
        padding: 10px;
        max-width: 400px;
      }

      .tit {
        background-color: #fff;
        padding: 5px;
        font-size: 15px;
        position: absolute;
        top: 0;
        left: 0;
      }
  `]
})

export class ContainerCmp {
    static BORDER_COLORS: string[] = ["red", "blue", "brown", "black", "yellow", "orange", "green", "steelblue", "pink"];
    innerTit: string;

    constructor(@Inject(ElementRef) private _el: ElementRef) {

    }

    onInit():void {
        console.log('container init');
        this._paintContainer();
    }

    private _paintContainer():void {
        this._el.nativeElement.style.borderColor = ContainerCmp[Math.floor(Math.random() * ContainerCmp.BORDER_COLORS.length)];
    }
}
