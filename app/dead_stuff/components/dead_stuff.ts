/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'dead-stuff'
})
@View({
    templateUrl: 'app/dead_stuff/components/dead_stuff.html',
    styleUrls: ['app/dead_stuff/components/dead_stuff.css']
})

export class DeadStuff {
    constructor() {
        console.log('dead stuff instantiated');
    }
}