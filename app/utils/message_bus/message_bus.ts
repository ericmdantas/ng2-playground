/// <reference path="../../../typings/tsd.d.ts" />

import {NgZone} from 'angular2/src/core/zone/ng_zone';

export interface IMessageBus {
    listeners: MessageBusType[];
    dispatch: (event: string, info?: any) => any;
    listen: (event: string, cb: Function) => any;
}

export type MessageBusType = {
    event: string;
    cb: Function;
};

export class MessageBus implements IMessageBus {
    listeners: MessageBusType[] = [];

    dispatch(event: string, info?: any):void {
        this.listeners
            .forEach((l, i) => {
                if (l.event === event) {
                    NgZone.run(() => {
                        l.cb(info);
                    });
                }
            });
    }

    listen(event: string, cb: Function):void {
        this.listeners.push({event, cb});
    }
}