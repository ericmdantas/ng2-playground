/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor, NgIf, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {FormBuilder, Validators, ControlGroup, formDirectives} from 'angular2/forms';
import {StuffService} from '../services/stuff_service';
import {Stuff} from '../types/stuff_type';
import {TrashCan} from '../../common/trash_can';
import {Card} from '../../common/card';
import {IStuffCmp} from 'app/common/interfaces';

@Component({
    selector: 'stuff',
    viewInjector: [FormBuilder, StuffService, EventEmitter],
    events: ['ded']
})
@View({
    templateUrl: `app/stuff/components/stuff.html`,
    styleUrls: ['app/stuff/components/stuff.css'],
    directives: [formDirectives, NgIf, Card, TrashCan]
})

export class Stuff implements IStuffCmp {
    stuffList: List<Stuff>;
    stuffForm: ControlGroup;
    service: StuffService;
    stuffCount: int = 0;
    subTitle: string = `There are this much stuff: `;
    ded: EventEmitter;

    constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(EventEmitter) ded: EventEmitter, stuffService: StuffService) {
        this.stuffForm = fb.group({
            "info": ["something", Validators.required]
        });

        this.service = stuffService;
        this.stuffList = [];
        this.ded = ded;
    }

    add(info:string):void {
        this.service
            .add(info)
            .subscribe(res => {
                this.stuffList.push({info: res, createdAt: Date.now()});
                this.stuffCount++;
        });
    }

    remove(id:string|number):void {
        this.service
            .remove(this.stuffList, id)
            .subscribe(list => {
               this.stuffList = list;
               if (this.stuffCount)
                   this.stuffCount--;

               this.ded.next({a: id});
            });
    }

    somethingDropped(id: string|number) {
        this.remove(id);
    }
}