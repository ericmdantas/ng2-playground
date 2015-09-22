/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, FORM_DIRECTIVES, OnInit, Pipe} from 'angular2/angular2';

@Pipe({
  name: 'helloPipe'
})
class HelloPipe {
  transform(value: string, args: any[]):string {
    let _face = ((value) && ((value.length % 2) === 0)) ? ':D' : ':(';

    return `hello, ${value}! ${_face}`;
  }
}

@Component({
  selector: 'custom-pipes-cmp'
})
@View({
  template: `
    <input type="text" [(ng-model)]="v" />
    <h2 [text-content]="v | helloPipe"></h2>
  `,
  directives: [FORM_DIRECTIVES],
  pipes: [HelloPipe]
})
export class CustomPipeCmp implements OnInit {
  v: string = '';

  updateInfo(v) {
    console.log(v);
  }

  onInit() {
    console.log('custom-pipes-cmp init');
  }
}
