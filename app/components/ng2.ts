import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {FormBuilder, Validators, ControlGroup, formDirectives} from 'angular2/forms';
import {AppService} from './app_service';
import {Stuff} from './stuff_type';
import {TrashCan} from '../common/trash_can';
import {Card} from '../common/card';
import {Ng2} from './ng2';

@Component({
    selector: 'ng2',
    viewInjector: [FormBuilder, AppService]
})
@View({
    templateUrl: `app/components/ng2.html`,
    styleUrls: ['app/components/ng2.css'],
    directives: [formDirectives, NgIf, Card, TrashCan]
})

export class Ng2 {
    stuffList: List<Stuff>;
    stuffForm: ControlGroup;
    service: AppService;
    stuffCount: int = 0;
    subTitle: string = `There are this much stuff: `;

    constructor(@Inject(FormBuilder) fb: FormBuilder, appService: AppService) {
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