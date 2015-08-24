/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'field',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/field/field.html',
  styleUrls: ['app/field/field.css']
})

export class FieldCmp {
  onInit() {
    console.log('field_cmp init')
  }
}
