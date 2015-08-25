/// <reference path="../../typings/tsd.d.ts" />

import {Inject} from 'angular2/di';
import {FieldCmp} from 'app/field/field.js';
import {Snake} from 'app/snake/snake.js';

export class World {
  static AMOUNT:number = 3538;

  _fields: any[] = [];
  _snake: Snake = new Snake();

  set fields(f: any[]) {
    this._fields = f;
  }

  get fields():any[] {
    return this._fields;
  }

  set snake(s: Snake) {
    this._snake = s;
  }

  get snake() {
    return this._snake;
  }

  constructor() {
    this._fillFields();
  }

  private _fillFields() {
    for (let i = 0; i < World.AMOUNT; i++) {
      this._fields.push({id: i});
    }
  }
}
