import {Component} from 'angular2/core';

import {LocalKeyListenerCmp} from './local_key_listener/local_key_listener_cmp.js';
import {EventEmitterOnEnterCmp} from './event_emitter_on_enter/event_emitter_on_enter_cmp.js';
import {GlobalKeyListenerCmp} from './global_key_listener/global_key_listener_cmp.js';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>

    <hr />

    <local-key-listener></local-key-listener>

    <hr />

    <global-key-listener></global-key-listener>

    <hr />

    <event-emitter-on-enter2 (myEv)="onMyEv($event)" [input]="myEvCalled"></event-emitter-on-enter2>
  `,
  directives: [LocalKeyListenerCmp, GlobalKeyListenerCmp, EventEmitterOnEnterCmp]
})
export class App {
  name: string = 'app';
  myEvCalled: string = 'nope';

  onMyEv(obj: {done: string}):void {
    this.myEvCalled = obj.done;

    setTimeout(() => {
      this.myEvCalled = 'nope';
    });
  }
}
