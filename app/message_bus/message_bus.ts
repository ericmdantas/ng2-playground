import {IMessageBus} from './interfaces';

export class MessageBus implements IMessageBus {
    eventQueue: Array = [];
    listeners: Array = [];

    public dispatch(event: string, info?: any):void {
        console.log(`dispatched ${event} with ${info}`);
    }

    public listen(event: string):void {
        console.log(`listened ${event}`);
    }
}