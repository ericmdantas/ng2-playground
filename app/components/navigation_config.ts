import {RouteConfig} from 'angular2/router';
import {App} from 'app/components/app';

@RouteConfig([
    {path: '/something', component: App}
])

export class NavigationConfig {

}
