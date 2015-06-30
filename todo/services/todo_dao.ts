/// <reference path="../../typings/tsd.d.ts" />

import {Inject} from 'angular2/angular2';
import {Observable} from 'angular2/angular2';
import {Http} from 'angular2/angular2';

export class TodoDAO {
    http: Http;

    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }

    getAll():Observable {
        return this.http.get('/todos');
    }

    add(info:string):Observable {
        return this.http.post('/api/todos', info);
    }

    remove(id:string):Observable {
        return this.http.delete('/api/todos/'+id);
    }
}
