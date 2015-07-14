/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Stuff} from './stuff/components/stuff';
import {DeadStuff} from './dead_stuff/components/dead_stuff';

@Component({
  selector: 'app'
})
@View({
    template: `
    <a [router-link]="['/stuff']">go to stuff</a>
    <a [router-link]="['/dead_stuff']">go to dead stuff</a>
    <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/', component: Stuff, as: 'stuff'},
    {path: '/dead_stuff', component: DeadStuff, as: 'dead_stuff'}
])

export class App {
    constructor() {
        console.log('main routes initialized');
    }
}
