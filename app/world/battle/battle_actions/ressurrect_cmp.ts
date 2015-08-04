/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'ressurrect'
})
@View({
    template: `
        <button type="button"
                (click)="ressurrectStuff()">ressurrect!</button>
    `
})

export class RessurrectCmp {
    constructor() {
        console.log('ressurrect init');
    }

    ressurrectStuff() {
        console.log('ressurrecting');
    }
}