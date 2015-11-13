import {Component, View, Inject, OnInit, Validators, FormBuilder, ControlGroup, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'form-cmp',
  template: `
    <form [ng-form-model]="myForm"
          (submit)="submitHandler(something)">
      <input ng-control="something" />
      <button type="button" [disabled]="!myForm.valid">btn</button>

      <pre [text-content]="myForm.value.something"></pre>
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FormCmp implements OnInit {
  myForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.myForm = fb.group({
      "something": ["", Validators.required]
    });
  }

  onInit() {
    console.log('form-cmp init')
  }
}
