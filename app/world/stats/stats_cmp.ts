/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/directives';
import {StatsModel} from 'app/world/stats/stats_model';
import {MessageBus, PLAYER_GOT_HIT, MONSTER_GOT_HIT} from 'app/utils/utils';

@Component({
    selector: 'stats'
})
@View({
    templateUrl: 'app/world/stats/stats.html',
    styleUrls: ['app/world/stats/stats.css'],
    directives: [NgFor]
})

export class StatsCmp {
    title: string = 'Stats';
    totalHitsDelivered: number[] = [];
    totalHitsReceived: number[] = [];
    maxHitReceived: number = 0;
    maxHitDelivered: number = 0;
    totalHitsReceived: number[] = [];
    playerDeaths: number = 0;
    monsterDeaths: number = 0;
    monsterKilled: number = 0;
    monsterDeaths: number = 0;
    mb: MessageBus = MessageBus;

    constructor() {
        console.log('stats_cmp init');

        this.mb.listen(PLAYER_GOT_HIT, this.updateStuff.bind(this));
        this.mb.listen(MONSTER_GOT_HIT, this.updateStuff.bind(this));
    }

    updateStuff(info: Object):void {

    }
}