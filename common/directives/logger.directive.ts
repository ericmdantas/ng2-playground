/// <reference path="../../typings/angular2/angular2.d.ts" />

import {ElementRef, Directive} from 'angular2/angular2';
import {LoggerService} from '../services/logger.service';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[logger]',
    hostListeners: {
        'click': 'log()',
        'keyup.enter': 'log()'
    }
})
export class Logger {
    logger: LoggerService;

    constructor(@Inject(LoggerService) l: LoggerService) {
        this.logger = l;
    }

    log() {
        this.logger.log();
    }
}