/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, ElementRef, LifecycleEvent, ViewEncapsulation} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
  selector: 'container',
  properties: ['innerTit: tit'],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div class="container" (mouseenter)="hoverIn()" (mouseleave)="hoverOut()">
      <span class="tit" [text-content]="innerTit"></span>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.EMULATED,
  styles: [`
      .container {
        position: relative;
        padding: 20px 10px 10px;
        max-width: 400px;
        min-width: 250px;
        float: left;
        margin-left: 20px;
        transition: all .2s;
        cursor: pointer;
      }

      .tit {
        background-color: #fff;
        padding: 5px;
        font-size: 15px;
        position: absolute;
        top: -15px;
        left: -2px;
      }

      .hover-in {
        background-color: #fafbfc;
      }

      .hover-out {
        background-color: #fff;
      }
  `]
})

export class ContainerCmp {
    static BORDER_COLORS: string[] = ["red", "blue", "brown", "black", "tomato", "salmon", "orange", "green", "steelblue", "pink"];
    private _container: HTMLElement;
    innerTit: string;

    constructor(@Inject(ElementRef) private _el: ElementRef) {

    }

    onInit():void {
        console.log('container init');
        this._container = this._el.nativeElement.getElementsByClassName('container')[0];
        this._paintContainer();
    }

    public hoverIn() {
      this._container.style.background = '#fafbfc';
      this._container.style.boxShadow = '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)';
      this._container.style.marginTop = '-15px';
    }

    public hoverOut() {
      this._container.style.background = '#fff';
      this._container.style.boxShadow = 'none';
      this._container.style.marginTop = '0';
    }

    private _paintContainer():void {
      this._container.style.border = `1px solid ${ContainerCmp.BORDER_COLORS[Math.floor(Math.random() * ContainerCmp.BORDER_COLORS.length)]}`;
    }
}
