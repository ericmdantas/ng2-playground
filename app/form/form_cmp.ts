/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, OnInit, Inject, FormBuilder, FORM_DIRECTIVES, Validators, ControlGroup} from 'angular2/angular2';

@Component({
  selector: 'form-cmp',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: 'app/form/form.html',
  styleUrls: ['app/form/form.css'],
  directives: [FORM_DIRECTIVES]
})
export class FormCmp implements OnInit {
  myForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.myForm = fb.group({
      "name": ["somebody", Validators.required],
      "age": [1, Validators.required],
      "ok": [false, Validators.required]
    });
  }

  onInit() {
    console.log('form-cmp init');
  }
}
