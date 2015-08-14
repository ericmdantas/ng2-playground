/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, NgFor} from 'angular2/angular2';

@Component({
  selector: 'dashboard',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/dashboard/dashboard.html',
  styleUrls: ['app/dashboard/dashboard.css']
})

export class DashboardCmp {
  onInit() {
    console.log('dashboard init');
  }
}
