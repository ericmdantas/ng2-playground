/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Directive, ElementRef} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'dw'
})
@View({
  template: `
    <h2>driwprop-wrapper</h2>
    <div>
      <button type="button" dwp [ppp]="something">btn button</button>
    </div>
  `,
  directives: [forwardRef(() => DwDirective)]
})

export class DwCmp {
  something: {a: boolean} = {a: true};
  }

@Directive({
  selector: '[dwp]',
  properties: ['innerSomething: ppp'],
  host: {
    '(click)': 'doSomethingAboutIt()'
  }
})

class DwDirective {
  innerSomething: any;

  doSomethingAboutIt() {
    console.log(this.innerSomething);
  }
}
