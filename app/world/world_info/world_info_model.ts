export class WorldInfo {
    _name: string = '_world';
    _playersOnline: number = 0;

    constructor() {

    }

    get name() {
        return this._name;
    }

    get playersOnline() {
        return this._playersOnline;
    }

    set playersOnline(num: number) {
        this._playersOnline = num;
    }
}