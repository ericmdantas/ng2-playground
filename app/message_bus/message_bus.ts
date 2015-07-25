/// <reference path="../../typings/tsd.d.ts" />

import {IMessageBus} from './interfaces';

export class MessageBus implements IMessageBus {
    static listeners: Array = [];

    static _log(...args) {
        console.log(`${args}`);
    }

    public static dispatch(event:string, info?: any):void {
        this._log(event);

         this.listeners
            .forEach((l) => {
               if (l.event === event) {
                   l.cb(info);
               }
            });
    }

    public static listen(event:string, cb: (any) => any):void {
        this._log(event);

        this.listeners.push({event: event, cb: cb});
    }
}