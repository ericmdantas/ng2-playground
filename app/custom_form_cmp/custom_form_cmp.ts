import {
  Component,
  OnInit,
  Inject,
  Input,
  FormBuilder,
  FORM_DIRECTIVES,
  Validators,
  ControlGroup
} from 'angular2/angular2';

@Component({
  selector: 'custom-form-cmp',
  template: `
    <form [ng-form-model]="cForm">
      <input type="text" ng-control="input1" />
      <input type="text" ng-control="input2" />

      <button type="button" [disabled]>{{btnName}}</button>
    </form>

    <pre>{{cForm.value | json}}</pre>
  `
})
export class CustomFormCmp {
  cForm: ControlGroup;

  @Input() btnName: string = 'btn';

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.cForm = fb.group({
      "input1": ["i1", Validators.required],
      "input2": ["i2", Validators.required]
    });
  }
}
