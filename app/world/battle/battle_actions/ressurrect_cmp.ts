/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {PlayerModel, MonsterModel} from 'app/world/world';

@Component({
    selector: 'ressurrect',
    properties: ['p', 'm']
})
@View({
    template: `
        <button type="button"
                [disabled]="p.isAlive() && m.isAlive()"
                (click)="ressurrectStuff()">ressurrect</button>
    `,
    styles: [
        `
        button {
            position: absolute;
            top: 220px;
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
        `
    ]
})

export class RessurrectCmp {
    p: PlayerModel;
    m: MonsterModel;

    constructor() {
        console.log('ressurrect init');
    }

    ressurrectStuff() {
        console.log('ressurrecting');

        this.p.hp = 999;
        this.m.hp = 999;
    }
}