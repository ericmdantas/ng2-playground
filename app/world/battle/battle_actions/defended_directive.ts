/// <reference path="../../../typings/tsd.d.ts" />

import {Directive, ElementRef, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[defended]',
    events: ['defendedEvent']
})

export class DefendedDirective {
    defendedEvent: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        console.log('defended init')

        this.defendedEvent = ee;
    }
}