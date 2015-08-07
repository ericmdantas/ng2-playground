/// <reference path="../../../typings/tsd.d.ts" />

import {StatsModel} from 'app/world/stats/stats';
import {Inject} from 'angular2/di';
import {EventEmitter} from 'angular2/angular2';

export class StatService {
    ee: EventEmitter = new EventEmitter;

    constructor() {
    }

    playerGotHit(stats: StatsModel, hit:number):void {
        stats.maxHitReceived = (stats.maxHitReceived < hit) ? hit : stats.maxHitReceived;
        stats.totalHitsReceived += hit;
    }

    monsterGotHit(stats: StatsModel, hit:number):void {
        stats.maxHitDelivered = (stats.maxHitDelivered < hit) ? hit : stats.maxHitDelivered;
        stats.totalHitsDelivered += hit;
    }

    monsterKilled(stats: StatsModel):void {
        stats.monstersKilled++;
    }

    playerKilled(stats: StatsModel):void {
        stats.playerDeaths++;
    }
}