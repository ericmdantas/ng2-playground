export class LogModel {
    _infos: any[] = [];

    constructor() {

    }

    get infos(): any[] {
        return this._infos;
    }

    set infos(infos: any) {
        this._infos = infos;
    }
}