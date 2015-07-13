import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Ng2} from './ng2';

@Component({
  selector: 'app'
})
@View({
    template: `<router-outlet></router-outlet>`,
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/', redirectTo: '/ng2'},
    {path: '/ng2', component: Ng2}
])

export class App {

}
