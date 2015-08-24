/// <reference path="../../typings/tsd.d.ts" />

import {Inject} from 'angular2/di';
import {Snake} from 'app/snake/snake.js';
import {FieldCmp} from 'app/field/field.js';

export class World {
  _fields: any[] = [];
  _snake: Snake;

  set fields(f: any[]) {
    this._fields = f;
  }

  get fields():any[] {
    return this._fields;
  }

  set snake(s: Snake) {
    this._snake = s;
  }

  get snake():Snake {
    return this._snake;
  }

  constructor(@Inject(Snake) s: Snake) {
    this._snake = s;

    this._fillFields();
  }

  private _fillFields() {
    for (let i = 0; i < 100; i++) {
      this._fields.push(1);
    }
  }
}
