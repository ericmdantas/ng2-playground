/// <reference path="../../typings/tsd.d.ts" />

import {IMessageBus} from './interfaces';

export class MessageBus implements IMessageBus {
    static listeners: Array = [];

    public static dispatch(event:string, info?: any):void {
         this.listeners
            .forEach((l) => {
               if (l.event === event) {
                   l.cb(info);
               }
            });
    }

    public static listen(event:string, cb: (any) => any):void {
        this.listeners.push({event: event, cb: cb});
    }
}