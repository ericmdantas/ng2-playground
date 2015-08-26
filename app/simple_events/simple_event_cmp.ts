/// <reference path=",,/,,/typings/tsd.d.ts" />

import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
  selector: '[x9]',
  host: {
    '(click)': 'clickHandler()',
    '(^input)': 'inputHandler()'
  }
})

class X9Directive {
  el: ElementRef;

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
  }

  clickHandler() {
    console.log(`click right now: ${Date.now()}`);
  }

  inputHandler() {
    console.log(this.el.nativeElement.getElementsByTagName('input')[0].value);
  }
}

@Component({
  selector: 'simple-events'
})
@View({
  template: `
    <div id="simple-events" x9>
      <h3>x9</h3>
      <input type="text" />
    </div>
  `,
  styles: [
    `
      #simple-events {
        border: 1px solid green;
        padding: 10px;
        margin-top: 10px;
        max-width: 200px;
      }
    `
  ],
  directives: [X9Directive]
})

export class SimpleEventsCmp {

}
