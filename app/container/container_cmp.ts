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
      <span class="tit" [text-content]="innerTit"></span>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
      .container {
        position: relative;
        padding: 20px 10px 10px;
        max-width: 400px;
        min-width: 250px;
        float: left;
        margin-left: 20px;
      }

      .tit {
        background-color: #fff;
        padding: 5px;
        font-size: 15px;
        position: absolute;
        top: -15px;
        left: -2px;
      }
  `]
})

export class ContainerCmp {
    static BORDER_COLORS: string[] = ["red", "blue", "brown", "black", "tomato", "salmon", "orange", "green", "steelblue", "pink"];
    innerTit: string;

    constructor(@Inject(ElementRef) private _el: ElementRef) {

    }

    onInit():void {
        console.log('container init');
        this._paintContainer();
    }

    private _paintContainer():void {
        document.getElementsByClassName('container')[0].style.border = `1px solid ${ContainerCmp.BORDER_COLORS[Math.floor(Math.random() * ContainerCmp.BORDER_COLORS.length)]}`;
    }
}
