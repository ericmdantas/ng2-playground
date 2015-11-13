import {Component, View, forwardRef, Inject, OnInit} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Component({
  selector: 'http-cmp',
  providers: [forwardRef(() => HttpService)],
  template: `
    <p>http</p>

    <button type="button"
            (click)="clickHandler()">go</button>

    <pre [text-content]="r | json"></pre>
  `
})
export class HttpCmp implements OnInit {
  r: Object = {"nothing": "yet"};

  constructor(@Inject(forwardRef(() => HttpService)) private _httpService: HttpService) {

  }

  onInit() {
    console.log('http-cmp init');
  }

  clickHandler() {
    this.r = {"loading": true};

    this._httpService
        .goGetIt()
        .subscribe((info) => {
          this.r = info;
        });
  }
}

class HttpService {
  private static URL: string = 'http://jsonplaceholder.typicode.com/posts/1';

  constructor(@Inject(Http) private _http: Http) {

  }

  goGetIt() {
    return this._http
               .get(HttpService.URL)
               .map((r) => r.json());
  }
}
