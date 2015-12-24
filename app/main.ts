import {
  Component
} from 'angular2/core';

import {
  RouterOutlet,
  RouterLink,
  RouteConfig,
  Router,
  Route
} from 'angular2/router';

import {AppCmp} from './app_cmp.js';

@Component({
  selector: 'main-cmp',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [AppCmp, RouterOutlet]
})
@RouteConfig([
  new Route({path: '/', component: AppCmp, name: 'App'})
])
export class MainCmp {

}
