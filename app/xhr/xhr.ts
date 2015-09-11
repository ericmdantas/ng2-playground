/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

import {Http} from 'angular2/http';
import {Inject} from 'angular2/di';

export class XhrService {
  static URL: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(@Inject(Http) private _http:Http) {

  }

  get():Rx.Observable<any> {
    return this._http.get(XhrService.URL).toRx().map(r => r.json());
  }
}
