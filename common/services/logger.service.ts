/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Injectable} from 'angular2/di';

@Injectable()
export class LoggerService {
    log() {
        console.log(`I log stuff! It's ${new Date()}`);
    }
}