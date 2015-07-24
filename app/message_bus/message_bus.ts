import {IMessageBus} from './interfaces';

export class MessageBus implements IMessageBus {
    listeners: Array = [];

    private _log(...args) {
        console.log(`${args}`);
    }

    public dispatch(event: string, info?: any):void {
        this._log(event, info);

        this.listeners
            .forEach((l) => {
                if (l.event === event) {
                    l.cb(info);
                }
            });
    }

    public listen(event: string, callback: (...args) => any):void {
        this._log(event);

        this.listeners.push({event: event, cb: callback});
    }
}