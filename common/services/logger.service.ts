/// <reference path="../../typings/angular2/angular2.d.ts" />

export class LoggerService {
    log() {
        console.log(`I log stuff! It's ${new Date()}`);
    }
}