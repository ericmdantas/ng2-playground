/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Promise} from 'angular2/src/facade/async';

export class TodoService {
    add(value:string):Promise {
        return new Promise((res, rej) => res(value));
    }

    remove(id:number):Promise {
        return new Promise((res, rej) => res(id));
    }
}