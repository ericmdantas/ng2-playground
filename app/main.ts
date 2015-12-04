import {
  Component,
  OnInit
} from 'angular2/angular2';

import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  Route
} from 'angular2/router';

import {AppCmp} from 'app/app.js';
import {Router1Cmp} from 'app/routes/route1.js';
import {Router2Cmp} from 'app/routes/route2.js';
import {Router3Cmp} from 'app/routes/route3.js';

@Component({
  selector: 'main-cmp',
  template: `
    <a [router-link]="['/App']">app</a>
    <a [router-link]="['/Router1', {id: r1.id, something: r1.something}]">route1</a>
    <a [router-link]="['/Router2', {yo: r2.yo}]">route2</a>
    <a [router-link]="['/Router3', {yo: r2.yo, whatever: 'si'}]">route3</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', component: AppCmp, name: 'App'},
  {path: '/route1/:id', component: Router1Cmp, name: 'Router1'},
  {path: '/route2/:yo', component: Router2Cmp, name: 'Router2'},
  {path: '/route3/hey', component: Router3Cmp, name: 'Router3'}
])
export class MainCmp implements OnInit {
  r1: Object = {id: 1, something: 'abc'};
  r2: Object = {yo: 'here'};

  ngOnInit() {
    this.r1 = {
      id: 999,
      something: true
    };

    this.r2 = {
      yo: 'there'
    }
  }
}
