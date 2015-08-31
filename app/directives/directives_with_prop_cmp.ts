/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Directive, ElementRef} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'dirwprop-wrapper'
})
@View({
  template: `
    <div>
      <button type="button" dirwprop [innerProp]="something"
              (click)="doSomethingAboutIt()">botao</button>
    </div>
  `,
  directives: [forwardRef(() => DirwpropWrapperCmp)]
})

export class DirwpropWrapperCmp {
  something: string = 'abc';
}

@Directive({
  selector: '[dirwprop]',
  properties: ['innerProp: p']
})

class DirwpropDirective {
  innerProp: any;

  doSomethingAboutIt() {
    console.log(this.innerProp);
  }
}
