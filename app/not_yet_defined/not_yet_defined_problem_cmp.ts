/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject, forwardRef} from 'angular2/di';
import {Service, Model} from 'app/not_yet_defined/not_yet_defined_service.js';

class Something {
  name: string = 'something';
}

@Component({
  selector: 'not-yet-defined-problem',
  lifecycle: [LifecycleEvent.onInit],
  viewBindings: [Something, Service, Model]
})
@View({
  template: `
    <div id="nyd">
      <h4>this could blow up<h4>
    </div>
  `,
  styles: [`
        #nyd {
          border: 1px solid purple;
          padding: 10px;
          margin-top: 10px;
          width: 200px;
        }
  `]
})

export class NotYetDefinedProblemCmp {
    _something: Something;
    _service: Service;

    constructor(@Inject(forwardRef(() => Something)) s: Something, @Inject(Service) service: Service) {
        this._something = s;
        this._service = service;
    }

    onInit() {
      console.log('not-yet-defined-problem init');
      console.log(`something name is: ${this._something.name}`);
    }
}
