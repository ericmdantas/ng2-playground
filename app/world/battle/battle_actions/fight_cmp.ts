/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {MessageBus, FIGHT_STARTED, FIGHT_ENDED} from 'app/utils/utils';

@Component({
    selector: 'fight',
    viewInjector: [EventEmitter, MessageBus]
})
@View({
    template: `
        <button type="button"
                (click)="fightHandler()"
                [disabled]="btnDisabled"
                class="btn btn-fight">fight</button>
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
    mb: MessageBus;
    btnDisabled: boolean = false;

    constructor() {
        this.mb = MessageBus.getInstance();

        this.mb.listen(FIGHT_ENDED, this.onFightEnded.bind(this));
    }

    fightHandler():void {
        console.log(`dispatching ${FIGHT_STARTED}`);

        this.mb.dispatch(FIGHT_STARTED);

        this.btnDisabled = true;
    }

    onFightEnded():void {
        console.log('fight ended')

        this.btnDisabled = false;
    }
}