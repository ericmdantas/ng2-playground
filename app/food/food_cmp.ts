/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'food',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/food/food.html',
  styleUrls: ['app/food/food.css']
})

export class FoodCmp {
  onInit() {
    console.log('food init')
  }
}
