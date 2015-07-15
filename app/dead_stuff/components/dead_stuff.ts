/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {NgFor, NgIf} from 'angular2/directives';
import {Inject} from 'angular2/di';
import {IStuffCmp, IStuffService} from 'app/common/interfaces';
import {DeadStuffService} from '../services/dead_stuff_service';
import {DeadStuff} from '../types/dead_stuff_type';

@Component({
    selector: 'dead-stuff',
    events: ['ressurrected', 'ded'],
    viewInjector: [DeadStuffService, NgFor, NgIf]
})
@View({
    templateUrl: 'app/dead_stuff/components/dead_stuff.html',
    styleUrls: ['app/dead_stuff/components/dead_stuff.css']
})

export class DeadStuff implements IStuffCmp {
    service: IStuffService;
    deadList: List<DeadStuff>;
    deadStuffCount: number = 0;
    ded: EventEmitter;
    ressurrected: EventEmitter;

    constructor(@Inject(DeadStuffService) dss: IStuffService, @Inject(EventEmitter) eeDed: EventEmitter, @Inject(EventEmitter) eeRessurrected: EventEmitter) {
        this.service = dss;
        this.ded = eeDed;
        this.ressurrected = eeRessurrected;
    }

    add(info:string):void {
        this
            .service
            .add(info)
            .subscribe(res => {
               console.log('adding..');
               console.log(res);
               this.deadStuffCount++;
            });
    }

    remove(info:string|number):void {
        this
            .service
            .remove(this.deadList, info)
            .subscribe(res => {
               console.log('removing..');
               console.log(res);
               this.deadStuffCount--;
            });
    }
}