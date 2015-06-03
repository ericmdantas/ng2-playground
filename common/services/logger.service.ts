/// <reference path="../../typings/tsd.d.ts" />

export class LoggerService {
    log() {
        console.log(`I log stuff! It's ${new Date()}`);
    }
}