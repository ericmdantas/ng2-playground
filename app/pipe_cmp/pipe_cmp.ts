/// <reference path="../../typings/tsd.d.ts" />

import {Component, EventEmitter, Inject, OnInit} from 'angular2/angular2';

class PipeService {
  go():Promise {
    return new Promise((res) => res({hello: 'there'}));
  }
}

@Component({
    selector: 'pipe-cmp',
    template: `
      <h4>pipe-cmp</h4>
      <p>{{r | async | json}}</p>
    `,
    providers: [PipeService]
})
export class PipeCmp implements OnInit {
    r: Promise;

    constructor(@Inject(PipeService) private _ps: PipeService) {

    }

    onInit() {
      this.r = this._ps.go();
    }
}
