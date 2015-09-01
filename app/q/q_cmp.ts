/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';
import {Http} from 'http/http';

@Component({
  selector: 'q',
  bindings: [forwardRef(() => qDao)]
})
@View({
  template: `
    <h2>q</h2>
    <button type="button" (click)="goGetIt()">go get quote</button>
    <div *ng-for="#i of qs;">
      <h1>{{i.title}}</h1>
    </div>
  `,
  directives: [NgFor]
})

export class QCmp {
  q: {quote?: string} = {};
  qs: Object[] = [];

  constructor(@Inject(forwardRef(() => qDao)) private _qdao: qDao) {

  }

  goGetIt() {
    this._qdao
        .getStuff()
        .subscribe(r => {
          this.qs = r;

          console.log(this.qs);
        })
        .dispose();
  }
}

class qDao {
  static URL: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(@Inject(Http) private _http: Http) {

  }

  getStuff():Rx.Observable<any> {
    return this._http.get(qDao.URL).toRx();
  }
}
