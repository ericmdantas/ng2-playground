/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';
import {XhrService} from 'app/xhr/xhr.js';

@Component({
  selector: 'xhr-cmp',
  lifecycle: [LifecycleEvent.onInit],
  viewBindings: [XhrService]
})
@View({
  template: `
    <h2>xhr</h2>
    <button type="button" (click)="goGetInfo()">go get info</button>
    <p>

      <strong>title: </strong>
      <span [text-content]="xhrInfo[0].title"></span>
      <br><br>

      <strong>body: </strong>
      <span [text-content]="xhrInfo[0].body"></span>
    </p>
  `
})

export class XhrCmp {
    public xhrInfo: Object = <any>{};

    constructor(@Inject(XhrService) private _xhrService: XhrService) {

    }

    onInit() {
      console.log('xhr-cmp init');
    }

    goGetInfo():void {
        this._xhrService
            .get()
            .subscribe(result => {
              this.xhrInfo = result;
            });
    }
}
