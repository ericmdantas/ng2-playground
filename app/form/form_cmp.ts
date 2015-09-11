/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, FormBuilder, FORM_DIRECTIVES, Validators, ControlGroup, OnInit} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'form-cmp',
  bindings: [FormBuilder, forwardRef(() => SomeModel)]
})
@View({
  template: `
    <h2>form</h2>
    <form [ng-form-model]="someForm"
          onsubmit="return false;"
          (submit)="doSomethingOnSubmit(someForm.value)">
              <input type="text" ng-control="prop1" [class.error]="!someForm.controls.prop1.valid"/>
              <br>

              <input type="text" ng-control="prop2" [class.error]="!someForm.controls.prop2.valid"/>
              <br>

              <input type="text" ng-control="prop3" [class.error]="!someForm.controls.prop3.valid"/>
              <br>

              <button type="submit"
                      [disabled]="!someForm.valid">do it</button>
    </form>
  `,
  styles: [`
      .error {
        border: 1px solid red;
      }
  `],
  directives: [FORM_DIRECTIVES]
})

export class FormCmp implements OnInit{
    someForm: ControlGroup;

    constructor(@Inject(forwardRef(() => SomeModel)) public sm: SomeModel, @Inject(FormBuilder) fb: FormBuilder) {
        this.someForm = fb.group({
          "prop1": [sm.prop1, Validators.required],
          "prop2": [sm.prop2, Validators.required],
          "prop3": [sm.prop3, Validators.required]
        });
    }

    onInit() {
      console.log('form-cmp init');
    }

    doSomethingOnSubmit(info:any) {
      console.log(info);
    }
}

class SomeModel {
  public prop1: string = 'p1';
  public prop2: number = 1;
  public prop3: boolean = true;
}
