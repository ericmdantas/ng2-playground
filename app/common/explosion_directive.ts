/// <reference path="../../typings/tsd.d.ts" />

import {Directive, ElementRef, EventEmitter} from 'angular2/angular2';
import {MineFieldModel} from 'app/mine_field/mine_field.js';
import {Inject} from 'angular2/di';

@Directive({
  selector: '[explosion]',
  events: ['exploded', 'didntExplode'],
  properties: ['mineField: mf'],
  host: {
    '(click)': 'explosionHandler()'
  }
})

export type ExplosionType = {
  mf: MineFieldModel;
  hit: number;
}

export class ExplosionDirective {
  el: ElementRef;
  mf: MineFieldModel;
  exploded: EventEmitter = new EventEmitter();
  didntExplode: EventEmitter = new EventEmitter();

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
  }

  explosionHandler() {
    if (this.mf.hasBomb) {
        this.el.nativeElement.style.backgroundColor = 'red';
        this.exploded.next({mf: this.mf, hit: Math.floor(Math.random() * 10)});
    }
    else {
        this.didntExplode.next({mf: this.mf});
    }
  }
}
