/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
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
    stat: StatsModel;
    mb: MessageBus = MessageBus;

    constructor(@Inject(StatsModel) stat: StatsModel) {
        console.log('stats_cmp init');

        this.stat = stat;

        this.mb.listen(PLAYER_GOT_HIT, this.updateStuff.bind(this));
        this.mb.listen(MONSTER_GOT_HIT, this.updateStuff.bind(this));
    }

    updateStuff(info: Object):void {

    }
}