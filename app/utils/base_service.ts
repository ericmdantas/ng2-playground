/// <reference path="../../typings/tsd.d.ts" />

import {Observable} from 'rx';
import {Xtorage} from 'app/utils/xtorage.js';

export class BaseService {
    _xtorage: Xtorage = new Xtorage();

    constructor(private _key: string) {

    }

    add(info:any):Observable<any> {
      return Observable.create(o => {
        this._xtorage.save(this._key, info);
        o.onNext(info);
        o.onCompleted();
      });
    }

    remove(id:number|string):Observable<any> {
      return Observable.create(o => {
        this._xtorage.remove(this._key);
        o.onNext(id);
        o.onCompleted();
      });
    }

    edit(id:number, info:any):Observable<any> {
      return Observable.create(o => {
        this._xtorage.save(this._key, info);
        o.onNext({id, info});
        o.onCompleted();
      });
    }
}
