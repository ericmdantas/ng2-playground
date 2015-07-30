/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
    selector: 'fight',
    events: ['fight']
})
@View({
    template: `
        <button type=button
                (click)="fightHandler()"
                class="btn btn-fight">fight!</button>
    `,
    styles: `
        button {
            background-color: #fff;
            color: red;
        }

        button:hover,
        button:active {
            background-color: red;
            color: #fff;
        }
    `
})

export class FightCmp {
    fight: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.fight = ee;
    }

    public fightHandler() {
        this.fight.next({});
    }
}