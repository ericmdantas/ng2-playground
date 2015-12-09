import {
  Component,
  provide,
  OnInit,
  Inject
} from 'angular2/core';

import {
  Http
} from 'angular2/http';

function saver() {
  return (target) => {
    target.prototype.save = function(url: string) {
      let _info = {a: true};
      let _stringifiedInfo = JSON.stringify(_info);

      return this._http
                 .post(url, _stringifiedInfo)
                 .map((r) => r.json());
    }
  }
}

function getter() {
  return (target) => {
    target.prototype.getIt = function(url: string) {
      return this._http
                 .get(url)
                 .map((i) => i.json());
    }
  }
}

@saver()
@getter()
class MyHttp {
  constructor(@Inject(Http) private _http: Http) {

  }
}

@Component({
  selector: 'custom-http-cmp',
  template: `
    <button type="button" (click)="save();">go http, go!</button>

    <pre>{{r | json}}</pre>

    <hr />

    <pre>
      <p *ng-for="#i of rs | slice:0:3;">{{i | json}}</p>
    </pre>

  `,
  providers: [MyHttp],
  directives: [NgFor]
})
export class CustomHttpCmp implements OnInit {
  static URL: string = 'http://jsonplaceholder.typicode.com/posts';

  r: {} = <any>{};
  rs: any[] = <any>[];

  constructor(@Inject(MyHttp) private _myHttp: MyHttp) {

  }

  save() {
    this._myHttp
        .save(CustomHttpCmp.URL)
        .subscribe((o) => {
          this.r = o;
        });
  }

  getIt() {
    this._myHttp
        .getIt(CustomHttpCmp.URL)
        .subscribe((i) => {
          this.rs = i;
        });
  }

  onInit() {
    this.getIt();
  }
}
