/// <reference path="../../typings/tsd.d.ts" />

import {Promise} from 'angular2/src/facade/async';

export class TodoService {
    add(value:string):Promise {
        return new Promise((res, rej) => {
            setTimeout(_ => res(value), 1);
        });
    }

    remove(id:number):Promise {
        return new Promise((res, rej) => {
            setTimeout( _ => res(id), 2);
        });
    }
}