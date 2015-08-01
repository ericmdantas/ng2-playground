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
        <button type="button"
                (click)="fightHandler()"
                class="btn btn-fight">fight!</button>
    `,
    styles: [`
        button {
            position: absolute;
            top: 150px;
            left: 20%;
            width: 300px;
            cursor: pointer;
            background-color: transparent;
            padding: 15px;
            font-size: 25px;
            border: 1px solid #ddd;
            box-shadow: 2px 2px 0 1px gray;
            outline: none;
        }

        button:active {
            color: red;
            border: none;
            outline: none;
            box-shadow: 1px 1px 0 gray;
        }
    `]
})

export class FightCmp {
    fightEvent: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.fightEvent = ee;
    }

    fightHandler():void {
        console.log('ayooooo silver!')
        this.fightEvent.next({});
    }
}