export class LogModel {
    private _infos: any[] = [];
    private _title: string = 'logs';

    constructor() {

    }

    get title() {
        return this._title;
    }

    get infos(): any[] {
        return this._infos;
    }

    set infos(infos: any) {
        this._infos = infos;
    }
}