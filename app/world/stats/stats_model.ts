export class StatsModel {
    private _deaths: number = 0;
    private _monstersKilled: number = 0;
    private _totalHitDelivered: number = 0;
    private _totalHitReceived: number = 0;
    private _maxHitDelivered: number = 0;
    private _maxHitReceived: number = 0;

    constructor() {

    }

    get playerDeaths():number {
        return this._deaths;
    }

    set playerDeaths(num: number) {
        this._deaths = num;
    }

    get monstersKilled():number {
        return this._monstersKilled;
    }

    set monstersKilled(num: number) {
        this._monstersKilled = num;
    }

    get totalHitsDelivered():number {
        return this._totalHitDelivered;
    }

    set totalHitsDelivered(num: number) {
        this._totalHitDelivered = num;
    }

    get totalHitsReceived():number {
        return this._totalHitReceived;
    }

    set totalHitsReceived(num: number) {
        this._totalHitReceived = num;
    }

    get maxHitDelivered():number {
        return this._maxHitDelivered;
    }

    set maxHitDelivered(num: number) {
        this._maxHitDelivered = num;
    }

    get maxHitReceived() {
        return this._maxHitReceived;
    }

    set maxHitReceived(num: number) {
        this._maxHitReceived = num;
    }
}