import {
  Component,
  Inject
} from 'angular2/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control
} from 'angular2/common';

@Component({
  selector: 'form-cmp',
  template: `
    <form [ngFormModel]="myForm">
      <input type="text" ngControl="i1" />
      <input type="text" ngControl="i2" />
      <input type="text" ngControl="i3" />

      <button type="button" (click)="go(myForm.value)">go</button>

      <pre>{{fetchObj | json}}</pre>
    </form>
  `
})
export class FormCmp {
  myForm: ControlGroup;
  fetchObj: Object;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.myForm = fb.group({
      "i1": ["i1", Validators.required],
      "i2": ["i2", Validators.required],
      "i3": ["i2", Validators.required]
    });
  }

  go(obj: Object) {
    this.fetchObj = obj;

    (<Control>this.myForm.controls["i1"]).updateValue("");
    (<Control>this.myForm.controls["i2"]).updateValue("");
    (<Control>this.myForm.controls["i3"]).updateValue("");
  }
}
