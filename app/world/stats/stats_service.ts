/// <reference path="../../../typings/tsd.d.ts" />

import {StatsModel} from 'app/world/stats/stats';

export class StatService {
    playerGotHit(stats: StatsModel, hit:number):void {
        stats.maxHitReceived = (stats.maxHitReceived < hit) ? hit : stats.maxHitReceived;
    }

    monsterGotHit(stats: StatsModel, hit:number):void {
        stats.maxHitDelivered = (stats.maxHitDelivered < hit) ? hit : stats.maxHitDelivered;
    }

    monsterKilled(stats: StatsModel):void {
        stats.monstersKilled++;
    }

    playerKilled(stats: StatsModel):void {
        stats.playerDeaths++;
    }
}