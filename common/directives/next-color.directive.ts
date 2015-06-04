/// <reference path="../../typings/tsd.d.ts" />

import {Directive, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[nc]',
    events: ['nextColor'],
    hostInjector: [EventEmitter],
    hostListeners: {
        'click': 'nextColorActivated($event)',
        'keyup.enter': 'nextColorActivated($event)'
    }
})
export class NextColor {
    colors: Array<any>;
    nextColor: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.colors = ['red', 'blue', 'yellow', 'green', 'orange', 'black', 'gray', 'pink', 'white', 'steelblue', 'tomato', 'salmon'];
        this.nextColor = ee;
    }

    nextColorActivated(ev: Event) {
        this.nextColor.next(this.colors[Math.floor(Math.random() * this.colors.length)]);
    }
}
