/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'view-bindings-child',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>view-bindings-child</h2>
  `
})

class ViewBindingsChildCmp {
    onInit() {
      console.log('view-bindings-child init');
    }
}

@Component({
  selector: 'view-bindings',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <h2>view-bindings</h2>
  `
})

export class ViewBindingsCmp {
    onInit() {
      console.log('view-bindings init');
    }
}
