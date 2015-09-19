/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit} from 'angular2/angular2';
import {ToggleDirective} from 'app/toggle/toggle_directive.js';

@Component({
  selector: 'titles-cmp',
  properties: ['chosenTitle']
})
@View({
  template: `
    <div>
      <h2 [text-content]="chosenTitle" class="hand" toggle></h2>
      <div class="toggle-this">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      h2 {
        margin-top: 0;
        padding-bottom 10px;
        border-bottom: 1px solid steelblue;
      }

      div {
        overflow: hidden;
        padding-left: 30px;
        margin-bottom: 20px;
      }
    `
  ],
  directives: [ToggleDirective]
})
export class TitlesCmp implements OnInit {
  chosenTitle:string;

  onInit() {
    console.log('titles init');
  }
}
