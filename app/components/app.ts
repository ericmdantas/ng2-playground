import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Ng2} from './ng2';
import {Main} from './main';

@Component({
  selector: 'app'
})
@View({
    template: `
    <a [router-link]="['/slash']">go to limbo</a>
    <br>
    <a [router-link]="['/ng2']">go to ng2</a>
    <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/', component: Main, as: 'slash'},
    {path: '/ng2', component: Ng2, as: 'ng2'},
    {path: '/*', redirectTo: '/'}
])

export class App {
    constructor() {
        console.log('main routes initialized');
    }
}
