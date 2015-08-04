/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {LogModel} from 'app/world/log/log';
import {FIGHT_STARTED, FIGHT_ENDED, SOMEONE_GOT_HIT, MessageBus} from 'app/utils/utils';

@Component({
    selector: 'log',
    viewInjector: [MessageBus]
})
@View({
    templateUrl: 'app/world/log/log.html',
    styleUrls: ['app/world/log/log.css'],
    directives: [NgFor]
})

export class LogCmp {
    title: string = 'logs';
    logs: any[] = [];
    mb: MessageBus = MessageBus;

    constructor() {
        console.log('log_cmp init');

        this.mb = MessageBus.getInstance();

        this.mb.listen(FIGHT_STARTED, this.log.bind(this));
        this.mb.listen(SOMEONE_GOT_HIT, this.log.bind(this));
        this.mb.listen(FIGHT_ENDED, this.logEnd.bind(this));
    }

    log(info:string):void {
        console.log('logging');

        if (!this.logs.length)
            this.logs.push({message: 'fight started!'});
        else
            this.logs.push({message: info});
    }

    logEnd() {
        this.logs.push({message: 'fight ended!'});
    }

    clear() {
        this.logs.length = 0;
    }
}