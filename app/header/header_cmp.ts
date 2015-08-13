/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'h-header'
})
@View({
    templateUrl: 'app/header/header.html',
    styleUrls: ['app/header/header.css'],
    directives: [RouterLink]
})

export class HeaderCmp {

}
