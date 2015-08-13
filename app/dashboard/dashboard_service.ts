/// <reference path="../../typings/tsd.d.ts" />

import {Observable} from 'rx';

export class DashboardService {
  get():Observable<any> {
    let company = {};
    let employees = {};

    return Observable.create(o => {
      o.onNext({company, employees});
      o.onCompleted();
    });
  }
}
