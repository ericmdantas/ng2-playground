/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {StatsModel, StatService} from 'app/world/stats/stats';
import {MessageBus, PLAYER_GOT_HIT, MONSTER_GOT_HIT, PLAYER_DIED, MONSTER_DIED} from 'app/utils/utils';

@Component({
    selector: 'stats',
    viewInjector: [StatsModel, StatService]
})
@View({
    templateUrl: 'app/world/stats/stats.html',
    styleUrls: ['app/world/stats/stats.css'],
    directives: [NgFor]
})

export class StatsCmp {
    title: string = 'Stats';
    stat: StatsModel;
    statService: StatService;
    mb: MessageBus;

    constructor(@Inject(StatsModel) stat: StatsModel, @Inject(StatService) ss: StatService) {
        console.log('stats_cmp init');

        this.stat = stat;
        this.mb = MessageBus.getInstance();
        this.statService = ss;

        this.mb.listen(PLAYER_GOT_HIT, this.playerGotHit.bind(this));
        this.mb.listen(MONSTER_GOT_HIT, this.monsterGotHit.bind(this));

        this.mb.listen(PLAYER_DIED, this.playerDied.bind(this));
        this.mb.listen(MONSTER_DIED, this.monsterDied.bind(this));
    }

    playerGotHit(hit:number):void {
        this.statService.playerGotHit(this.stat, hit);
    }

    monsterGotHit(hit:number):void {
        this.statService.monsterGotHit(this.stat, hit);
    }

    playerDied():void {
        this.statService.playerKilled();
    }

    monsterDied():void {
        this.statService.monsterKilled();
    }
}