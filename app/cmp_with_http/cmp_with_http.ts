import {
  Component,
  Inject
} from 'angular2/core';

import {
    HTTP_PROVIDERS,
    Http
} from 'angular2/http';

@Component({
  selector: 'cmp-with-http',
  template: `
    <button type="button" (click)="go()">go</button>
    <pre>{{res | async | json}}</pre>
  `,
  providers: [HTTP_PROVIDERS]
})
export class CmpWithHttp {
    res: Object;

    constructor(@Inject(Http) private _http: Http) {

    }

    go() {
      this.res = this._http.get('http://jsonplaceholder.typicode.com/posts/1');
    }
}
