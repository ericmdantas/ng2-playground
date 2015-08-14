/// <reference path="../../typings/tsd.d.ts" />

import {Observable} from 'rx';

export class BaseService {
    add(info:any):Observable<any> {
      return Observable.create(o => {
        o.onNext(info);
        o.onCompleted();
      });
    }

    remove(id:number|string):Observable<any> {
      return Observable.create(o => {
        o.onNext(id);
        o.onCompleted();
      });
    }

    edit(id:number, info:any):Observable<any> {
      return Observable.create(o => {
        o.onNext({id, info});
        o.onCompleted();
      });
    }
}
