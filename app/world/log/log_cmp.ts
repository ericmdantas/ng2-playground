/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {LogModel} from 'app/world/log/log';

@Component({
    selector: 'log',
    viewInjector: [LogModel]
})
@View({
    templateUrl: 'app/world/log/log.html',
    styleUrls: ['app/world/log/log.css'],
    directives: [NgFor]
})

export class LogCmp {
    l: LogModel;
    logs: List<LogModel> = [];

    constructor(@Inject(LogModel) l: LogModel) {
        console.log('log_cmp init');

        this.l = l;
    }
}