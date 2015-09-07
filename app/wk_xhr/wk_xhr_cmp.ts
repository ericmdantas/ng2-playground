/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, EventEmitter, ViewEncapsulation, CORE_DIRECTIVES} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';

@Component({
  selector: 'wk-xhr-cmp',
  lifecycle: [LifecycleEvent.onInit],
  bindings: [forwardRef(() => WkXhrService)]
})
@View({
  template: `
    <h2>wk-xhr</h2>
    <button type="button"
            (click)="fetchStuff()">wk-xhr-button</button>

    <p *ng-if="loading">loading...</p>
    <p *ng-if="notSearched && !loading">do the search, bro</p>
    <p *ng-if="errored">error happened</p>

    <p [hidden]="loading || errored || notSearched">


      <strong>title:</strong>
      <span [text-content]="wkXhrInfo.title"></span>

      <br>

      <strong>body:</strong>
      <span [text-content]="wkXhrInfo.body"></span>
    </p>
  `,
  encapsulation: ViewEncapsulation.NATIVE,
  directives: [CORE_DIRECTIVES]
})

export class WkXhrCmp {
    public wkXhrInfo: Object = <any>{};
    public loading: boolean = false;
    public notSearched: boolean = true;
    public errored: boolean = false;

    constructor(@Inject(forwardRef(() => WkXhrService)) private _wk: WkXhrService) {

    }

    onInit() {
      console.log('wk-xhr-cmp init');

      this._wk
          .listen()
          .subscribe(info => {
            this.wkXhrInfo = info;
            this.loading = false;
            this.errored = false;
            this.notSearched = false;
          },
          err => {
            this.errored = true;
            this.notSearched = false;
            this.loading = false;
          });
    }

    fetchStuff() {
      this.loading = true;
      this._wk.dispatch(99);
    }
}

class WkXhrService {
  public wk: Worker = new Worker('app/wk_xhr/wk_xhr_worker.js');
  private _ee: EventEmitter = new EventEmitter();

  listen():Rx.Observable<any> {
    this.wk.onmessage = (event) => {
      this._ee.next(event.data);
    };

    return this._ee.toRx();
  }

  dispatch(info:any):void {
    this.wk.postMessage(info);
  }
}
