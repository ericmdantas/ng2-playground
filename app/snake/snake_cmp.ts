/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'snake',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/snake/snake.html',
  styleUrls: ['app/snake/snake.css']
})

export class SnakeCmp {
  onInit() {
    console.log('snake init')
  }
}
