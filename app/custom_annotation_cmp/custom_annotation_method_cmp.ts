import {
  Component,
  OnInit
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

function someObs() {
  return new Observable((o) => {
    o.next({a: true});
  });
}

@Component({
  selector: 'custom-annotation-method-cmp',
  template: `
    <p>{{s | json}}</p>
  `
})
export class CustomAnnotationMethodCmp implements OnInit {
  s: {a: boolean};

  _upt = () => {
    someObs().subscribe((i) => this.s = i);
  }

  ngOnInit() {
    this._upt();
  }
}
