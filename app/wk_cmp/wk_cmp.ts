import {
  Component,
  View,
  forwardRef,
  Inject,
  OnInit
} from 'angular2/angular2';

import * as Rx from '@reactivex/rxjs/dist/cjs/Rx';

@Component({
  selector: 'wk-cmp',
  providers: [forwardRef(() => WkBus)],
  template: `
    <p>wk</p>

    <button type="button"
            (click)="clickHandler()">go</button>

    <pre [text-content]="r | json"></pre>
  `
})
export class WkCmp implements OnInit {
  public r: Object;

  constructor(@Inject(forwardRef(() => WkBus)) private _wkBus: WkBus) {

  }

  onInit() {
    console.log('wk-cmp init');

    this._wkBus
        .listen()
        .subscribe((info) => {
          this.r = info;
        });
  }

  clickHandler() {
    this._wkBus.dispatch(1);
  }
}

class WkBus {
  private static WK_URL: string = 'app/wk_cmp/wk.js';
  private _wk: Worker = new Worker(WkBus.WK_URL);

  listen():Rx.Observable<any> {
    return Rx.Observable.create((o) => {
      this._wk.addEventListener('message', ({data}) => {
        o.next(data);
      });
    });
  }

  dispatch(info: any):void {
    this._wk.postMessage({'go': 'yo'});
  }
}
