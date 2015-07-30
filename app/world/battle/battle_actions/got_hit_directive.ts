/// <reference path="../../../typings/tsd.d.ts" />

import {Directive, ElementRef, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[got-hit]',
    events: ['gotHitEvent']
})

export class GotHitDirective {
    gotHitEvent: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        console.log('got-hit init')

        this.gotHitEvent = ee;
    }
}
