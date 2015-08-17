/// <reference path=",,/../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
  selector: 'add-stuff',
  events: ['added'],
  properties: ['info'],
  viewBindings: [EventEmitter]
})
@View({
  template: `
    <div class="add-stuff" (click)="addStuffHandler(info)">
      <span>+</span>
    </div>
  `,
  styles: [
    `
      .add-stuff {
        position: absolute;
        top: 0;
        right: 0;
        background-color: green;
        color: #fff;
        font-weight: bold;
        padding: 5px 10px;
      }
    `
  ]
})

export class AddStuffCmp {
  added: EventEmitter;
  info: any;

  constructor(@Inject(EventEmitter) ee: EventEmitter) {
    this.added = ee;
  }

  addStuffHandler(info: any):void {
    this.added.next(info);
  }
}
