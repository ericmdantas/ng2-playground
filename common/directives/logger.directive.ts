/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Directive} from 'angular2/angular2';
import {LoggerService} from '../services/logger.service';

@Directive({
    selector: '[logger]',
    hostInjector: [LoggerService],
    hostListeners: {
        'click': 'log()',
        'keyup.enter': 'log()'
    }
})
export class Logger {
    logger: LoggerService;

    constructor(l: LoggerService) {
        this.logger = l;

        console.log(l)
    }

    log() {
        this.logger.log();
    }
}