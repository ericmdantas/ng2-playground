import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'navigation-app'
})
@View({
    templateUrl: 'app/components/navigation_app.html',
    styleUrls: ['app/components/navigation_app.css'],
    directives: [NgFor]
})

export class NavigationApp {
    urls: Array<string>;

    constructor() {
        this.urls = ["/something", "/something-else"];
    }
}
