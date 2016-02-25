import {
  Component
} from 'angular2/core';

import {OutputCmp} from './output/output_cmp.js';
import {InputCmp} from './input/input_cmp.js';

@Component({
  selector: 'app',
  template: `
    <h1>app - {{fromOut}}</h1>
    <output-cmp (out)="handleOut($event)"></output-cmp>
    <input-cmp [inp]="fromOut"></input-cmp>
  `,
  directives: [OutputCmp, InputCmp]
})
export class App {
  fromOut: number;

  handleOut(ev: number) {
    this.fromOut = ev;
  }
}
