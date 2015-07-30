export class StatsModel {
    _deaths: number = 0;
    _monstersKilled: number = 0;
    _totalHitDelivered: number = 0;
    _totalHitReceived: number = 0;

    constructor() {

    }

    get deaths() {
        return this._deaths;
    }

    set deaths(num: number) {
        this._deaths = num;
    }

    get monstersKilled() {
        return this._monstersKilled;
    }

    set monstersKilled(num: number) {
        this._monstersKilled = num;
    }

    get totalHitDelivered() {
        return this._totalHitDelivered;
    }

    set totalHitDelivered(num: number) {
        this._totalHitDelivered = num;
    }

    get totalHitReceived() {
        return this._totalHitReceived;
    }

    set totalHitReceived(num: number) {
        this._totalHitReceived = num;
    }

    dead() {
        this.deaths++;
    }

    monsterKilled() {
        this.monstersKilled++;
    }

    deliverHit(hit: number) {
        this.totalHitDelivered+=hit;
    }

    receiveHit(hit: number) {
        this.totalHitReceived+=hit;
    }
}