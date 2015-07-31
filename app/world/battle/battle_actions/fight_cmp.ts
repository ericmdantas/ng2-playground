/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
    selector: 'fight',
    events: ['fightEvent'],
    viewInjector: [EventEmitter]
})
@View({
    template: `
        <button type=button
                (click)="fightHandler()"
                class="btn btn-fight">fight!</button>
    `
})

export class FightCmp {
    fightEvent: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.fightEvent = ee;
    }

    public fightHandler() {
        this.fightEvent.next({});
    }
}