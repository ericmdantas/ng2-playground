/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {EvCmp1, EvCmp2} from 'app/events_components/evs_cmp.js';

@Component({
  selector: 'events-components'
})
@View({
  template: `
    <h2>events-components</h2>
    <ev1-cmp #ev1 (hovered)="ev2.clickHappened();"></ev1-cmp>
    <ev2-cmp #ev2 (clicked)="ev1.hoverHappened();"></ev2-cmp>
  `,
  directives: [EvCmp1, EvCmp2]
})
export class EventsComponentsCmp {

}
