/// <reference path="../../../typings/tsd.d.ts />"

export interface IStuffCmp {
    add(info:string):void;
    remove(id:string|number):void;
}

export interface IStuffService {
    add(info:string):Rx.Observable;
    remove(list: List<Object>, id:number|string):Rx.Observable;
}
