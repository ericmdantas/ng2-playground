/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'form-toggle',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <div class="form-toggle"
         (click)="toggleVisibility()">
            <h3>form_toggle</h3>
            <ng-content [hidden]="visibility"></ng-content>
    </div>
  `,
  styles: [
    `
      .form-toggle {
        min-height: 100px;
        padding: 10px;
        border: 1px solid #ddd;
      }
    `
  ]
})

export class FormToggleCmp {
  visibility: boolean = true;

  onInit() {
    console.log('form_toggle_cmp init');
  }

  toggleVisibility() {
    this.visibility != this.visibility;
  }
}
