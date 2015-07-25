/// <reference path="../../typings/tsd.d.ts" />

import * as Rx from 'rx';
import {IMessageBus} from './interfaces';
import {Inject} from './interfaces';

export class MessageBus implements IMessageBus {
    static listeners: Array = [];
    static _observable: Rx.IObservable = Rx.Observable;

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