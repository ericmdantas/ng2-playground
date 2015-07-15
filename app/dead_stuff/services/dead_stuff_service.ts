/// <reference path="../../../typings/tsd.d.ts" />

import {IStuffService} from 'app/common/interfaces';
import {DeadStuffType} from '../types/dead_stuff_type';

export class DeadStuffService implements IStuffService {
    constructor() {

    }

    add(info:string):Rx.Observable {
        return Rx.Observable
                 .create(observer => {
                    observer.onNext(info);
                    observer.onCompleted();
                 });
    }

    remove(list: List<DeadStuffType>, id:string|number) {
        list.forEach((l, i) => {
            if (l.createdAt == id) {
                return list.splice(i, 1);
            }
        });

        return Rx.Observable
                 .create(observer => {
                    observer.onNext(list);
                    observer.onCompleted();
                 });
    }
}