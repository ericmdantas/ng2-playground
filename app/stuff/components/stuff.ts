/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {FormBuilder, Validators, ControlGroup, formDirectives} from 'angular2/forms';
import {StuffService} from '../services/stuff_service';
import {Stuff} from '../types/stuff_type';
import {TrashCan} from '../../common/trash_can';
import {Card} from '../../common/card';

@Component({
    selector: 'stuff',
    viewInjector: [FormBuilder, StuffService]
})
@View({
    templateUrl: `app/stuff/components/stuff.html`,
    styleUrls: ['app/stuff/components/stuff.css'],
    directives: [formDirectives, NgIf, Card, TrashCan]
})

export class Stuff {
    stuffList: List<Stuff>;
    stuffForm: ControlGroup;
    service: AppService;
    stuffCount: int = 0;
    subTitle: string = `There are this much stuff: `;

    constructor(@Inject(FormBuilder) fb: FormBuilder, appService: StuffService) {
        this.stuffForm = fb.group({
            "info": ["something", Validators.required]
        });

        this.service = appService;
        this.stuffList = [];
    }

    add():void {
        this.service
            .add(this.stuffForm.value.info)
            .subscribe(res => {
                this.stuffList.push({info: res, createdAt: Date.now()});
                this.stuffCount++;
        });
    }

    remove(date: Date):void {
        this.service
            .remove(this.stuffList, date)
            .subscribe(list => {
               this.stuffList = list;
               if (this.stuffCount)
                   this.stuffCount--;
            });
    }

    somethingDropped(date: Date) {
        this.remove(date);
    }
}