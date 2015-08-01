/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {StatsModel} from 'app/world/stats/stats_model';

@Component({
    selector: 'stats'
})
@View({
    templateUrl: 'app/world/stats/stats.html',
    styleUrls: ['app/world/stats/stats.css']
})

export class StatsCmp {
    title: string = 'Stats';

    constructor() {
        console.log('stats_cmp init');
    }
}