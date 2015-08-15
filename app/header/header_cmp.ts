/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {ActivateDirective} from 'app/common/activate.js';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'h-header',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'app/header/header.html',
    styleUrls: ['app/header/header.css'],
    directives: [RouterLink, ActivateDirective]
})

export class HeaderCmp {
  onInit() {
    console.log('header init');
  }
}
