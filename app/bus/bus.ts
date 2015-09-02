/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';

export interface IBus {
  listen():Rx.Observable<any>;
  dispatch(info: any):void;
}

export class MainBus implements IBus {
    private _eventEmitter: EventEmitter = new EventEmitter();
    private static _instance: MainBus;
    private static _canCreate = false;

    constructor() {
      if (!MainBus._canCreate)
         throw new Error("Can't create Main Bus. Use MainBus.getInstance instead.");
    }

    static getInstance(): MainBus {
        MainBus._canCreate = true;
        MainBus._instance = MainBus._instance || new MainBus();
        MainBus._canCreate = false;

        return MainBus._instance;
    }

    dispatch(info:any):void {
        this._eventEmitter.next(info);
    }

    listen():Rx.Observable<any> {
      return this._eventEmitter.toRx();
    }
}

export class WorkerBus implements IBus {
  private _eventEmitter: EventEmitter = new EventEmitter();
  private _worker: Worker = new Worker(WorkerBus.PATH);
  private static PATH: string = 'app/worker/worker.js';

  dispatch(info:any):void {
    this._worker.postMessage(info);
  }

  listen():Rx.Observable<any> {
    this._worker.onmessage = ({data}) => {
      this._eventEmitter.next(data);
    };

    return this._eventEmitter.toRx();
  }
}
