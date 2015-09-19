/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/tsd.d.ts" />

import {Component, View, Inject, forwardRef, OnInit} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Component({
  selector: 'xhr-cmp',
  bindings: [forwardRef(() => XhrService)]
})
@View({
  templateUrl: 'app/xhr/xhr.html',
  styleUrls: ['app/xhr/xhr.html']
})
export class XhrCmp implements OnInit {
  r: JSON | string = 'not ready';

  constructor(@Inject(forwardRef(() => XhrService)) private _xhrService: XhrService) {

  }

  onInit() {
    console.log('xhr-cmp init');
  }

  getInfoHandler(p:number) {
    this.r = 'loading';

    this._xhrService
        .getInfo(p)
        .subscribe((info) => {
          this.r = info;
        }, (error) => {
          this.r = error;
        });
  }
}

class XhrService {
  static URL: string = 'http://jsonplaceholder.typicode.com/comments/';

  constructor(@Inject(Http) private _http: Http) {

  }

  getInfo(p:number):Rx.Observable<any> {
    return this._http.get(XhrService.URL+p).toRx().map((r) => r.json());
  }
}
