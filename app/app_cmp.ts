import {Component} from 'angular2/core';

import {LocalKeyListenerCmp} from './local_key_listener/local_key_listener_cmp.js';
import {GlobalKeyListener} from './global_key_listener/global_key_listener_cmp.js';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>

    <hr />

    <local-key-listener></local-key-listener>

    <hr />

    <global-key-listener><global-key-listener>
  `,
  directives: [LocalKeyListenerCmp, GlobalKeyListener]
})
export class App {
  name: string = 'app';
}
