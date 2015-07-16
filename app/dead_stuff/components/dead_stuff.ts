/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {NgFor, NgIf} from 'angular2/directives';
import {Inject} from 'angular2/di';
import {IDeadStuffCmp, IStuffService} from 'app/common/interfaces';
import {DeadStuffService} from '../services/dead_stuff_service';
import {DeadStuff} from '../types/dead_stuff_type';
import {Card} from '../../common/card';

@Component({
    selector: 'dead-stuff',
    events: ['ressurrected', 'ded'],
    viewInjector: [DeadStuffService, EventEmitter]
})
@View({
    templateUrl: 'app/dead_stuff/components/dead_stuff.html',
    styleUrls: ['app/dead_stuff/components/dead_stuff.css'],
    directives: [NgFor, NgIf, Card]
})

export class DeadStuff implements IDeadStuffCmp {
    service: IStuffService;
    deadStuffList: List<DeadStuff>;
    deadStuffCount: number = 0;
    ressurrected: EventEmitter;
    ded: EventEmitter;

    constructor(@Inject(DeadStuffService) dss: IStuffService, @Inject(EventEmitter) ded: EventEmitter, @Inject(EventEmitter) eeRessurrected: EventEmitter) {
        this.service = dss;
        this.ressurrected = eeRessurrected;
        this.ded = ded;

        this.ded.toRx().subscribe(x => {
            console.log(x);
        });
    }

    remove(info:string|number):void {
        this
            .service
            .remove(this.deadStuffList, info)
            .subscribe(res => {
               console.log('removing..');
               console.log(res);
               this.deadStuffCount--;
            });
    }

    alo(info) {
        console.log(info);
    }
}