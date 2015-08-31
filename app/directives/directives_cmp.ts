/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Directive} from 'angular2/angular2';

@Directive({
  selector: '[child-dir]',
  host: {
    '(click)': 'clickHandler()',
    'class': 'brand-new-class',
    'banana': 'hey hye hey'
  }
})

class ChildDirDirective {
  clickHandler() {
    console.log('bla bla clicked');
  }

  actionSomething() {
    console.log('action!');
  }
}

@Component({
  selector: 'dir-cmp'
})
@View({
  template: `
    <h2>dir-cmp</h2>
    <button type="button" child-dir>
      button
    </button>
  `,
  directives: [ChildDirDirective]
})

export class DirectivesCmp {

}
