/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Input, OnInit} from 'angular2/angular2';

@Component({
  selector: 'container-cmp'
})
@View({
  template: `
    <div>
      <h2>c</h2>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
      h2 {
        padding-bottom: 10px;
        border-bottom: 1px solid steelblue;
        cursor: pointer;
        transition: all .3s;
        -webkit-user-select: none;
      }

      h2:active {
        color: #fff;
        background-color: steelblue;
      }
    `]
})
export class ContainerCmp implements OnInit {
  @Input() t: string;

  onInit() {
    console.log('container-cmp init');
  }
}
