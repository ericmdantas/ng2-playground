/// <reference path="../,,/typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';

export class Bus {
    listen: EventEmitter = new EventEmitter();
}
