/// <reference path="../../typings/tsd.d.ts" />

import {Inject, forwardRef} from 'angular2/di';

export class Service {
  constructor(@Inject(forwardRef(() => Model)) m: Model) {
    console.log(m.name);
  }
}

export class Model {
  name: string = 'model';
}
