/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {App} from '../app';

@Component({
    selector: 'router'
})
@View({
    template: `
        <ul>
            <a>app</a>
            <a>main</a>
            <a>credits</a>
        </ul>
    `
})

export class Router {

}
