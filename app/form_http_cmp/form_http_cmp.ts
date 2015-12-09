import {
  Component,
  Inject
} from 'angular2/core';

import {
  FormBuilder,
  ControlGroup,
  Validators
} from 'angular2/common';

import {
  Http,
  HTTP_PROVIDERS
} from 'angular2/http';

@Component({
  selector: 'form-http-cmp',
  providers: [HTTP_PROVIDERS],
  template: `
    <form [ng-form-model]="myHttpForm">
      <input type="text" ng-control="inp1"/>
      <input type="text" ng-control="inp2"/>
      <input type="text" ng-control="inp3"/>
      <button type="button" (click)="go(myHttpForm.value)">btn</button>
    </form>
  `
})
export class FormHttpCmp {
    myHttpForm: ControlGroup;

    constructor(@Inject(FormBuilder) _fb: FormBuilder,
                @Inject(Http) private _http: Http) {
      this.myHttpForm = _fb.group({
        "inp1": ["a", Validators.required],
        "inp2": ["b", Validators.required],
        "inp3": ["c", Validators.required]
      });
    }

    go(v) {
      this._http
          .post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(v))
          .subscribe((info) => {
            console.log(info);
          }, (err) => {
            console.log(err);
          });
    }
}
