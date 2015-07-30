/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular';

@Component({
    selector: 'log'
})
@View({
    templateUrl: 'app/world/log/log.html',
    styleUrls: ['app/world/log/log.css']
})

export class LogCmp {
    constructor() {
        console.log('log_cmp init');
    }
}