/// <reference path="../../typings/tsd.d.ts" />

import {HttpFactory} from 'angular2/src/http/http';
import {IHttp} from 'angular2/src/http/interfaces';
import {Inject} from 'angular2/angular2';
import {Promise} from 'angular2/src/facade/async';

export class TodoDAO {
    http: IHttp;

    constructor(@Inject(HttpFactory) http:IHttp) {
        this.http = http;

        var _r = this.http('./todos.json').map(res => res.json());

        console.log(_r);
    }

    add(info:string) {
        return new Promise((res, rej) => res(info));
    }

    remove(info:string) {
        return new Promise((res, rej) => res(info));
    }
}
