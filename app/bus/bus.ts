/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';

export interface IBus {
  listen(): EventEmitter;
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

    listen(): EventEmitter {
      return this._eventEmitter;
    }
}

export class WorkerBus implements IBus {
  private _eventEmitter: EventEmitter = new EventEmitter();
  private _worker: Worker;
  private static _instance: WorkerBus;
  private static _canCreate: boolean = false;
  private _workerMessage: any = {};

  constructor() {
    if (!WorkerBus._canCreate) {
         throw new Error("Can't create Main Bus. Use WorkerBus.getInstance instead.");
    }

    this._worker = new Worker('app/worker/worker.js');
  }

  static getInstance():WorkerBus {
      WorkerBus._canCreate = true;
      WorkerBus._instance = WorkerBus._instance || new WorkerBus();
      WorkerBus._canCreate = false;

      return WorkerBus._instance;
  }

  dispatch():void {
    this._eventEmitter.next(this._workerMessage);
  }

  listen(): EventEmitter {
    return this._eventEmitter;
  }

  private _listenWorker() {
    window.onmessage = (event) => {
      this._workerMessage = event.data;
    }
  }
}
