export class StatsModel {
    private _deaths: number = 0;
    private _monstersKilled: number = 0;
    private _totalHitDelivered: number = 0;
    private _totalHitReceived: number = 0;
    private _maxHitDelivered: number = 0;
    private _maxHitReceived: number = 0;

    constructor() {

    }

    get playerDeaths() {
        return this._deaths;
    }

    set playerDeaths(num: number) {
        this._deaths = num;
    }

    get monstersKilled() {
        return this._monstersKilled;
    }

    set monstersKilled(num: number) {
        this._monstersKilled = num;
    }

    get totalHitsDelivered() {
        return this._totalHitDelivered;
    }

    set totalHitsDelivered(num: number) {
        this._totalHitDelivered = num;
    }

    get totalHitsReceived() {
        return this._totalHitReceived;
    }

    set totalHitsReceived(num: number) {
        this._totalHitReceived = num;
    }

    get maxHitDelivered() {
        return this._maxHitDelivered;
    }

    set maxHitDelivered(num: number):void {
        this._maxHitDelivered = num;
    }

    get maxHitReceived() {
        return this._maxHitReceived;
    }

    set maxHitReceived(num: number):void {
        this._maxHitReceived = num;
    }
}