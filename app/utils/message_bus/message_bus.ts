/// <reference path="../../../typings/tsd.d.ts" />

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
    private static _canCreate: boolean = false;
    private static _instance: MessageBus;

    listeners: MessageBusType[] = [];

    constructor() {
        if (!MessageBus._canCreate) {
            throw new Error('Use MessageBus.getInstance() instead.');
        }
    }

    public static getInstance():MessageBus {
        MessageBus._canCreate = true;
        MessageBus._instance = MessageBus._instance || new MessageBus();
        MessageBus._canCreate = false;

        return MessageBus._instance;
    }

    public dispatch(event: string, info?: any):void {
        this.listeners
            .forEach((l, i) => {
                if (l.event === event) {
                    l.cb(info);
                }
            });
    }

    public listen(event: string, cb: Function):void {
        this.listeners.push({event, cb});
    }
}