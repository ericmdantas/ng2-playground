/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {FormBuilder, ControlGroup, Validators, formDirectives} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {TaskModel} from './task_model';
import {TaskService} from './task_service';

@Component({
    selector: 'task-cmp',
    viewInjector: [FormBuilder, TaskService]
})
@View({
    templateUrl: 'app/kanban/task/task_cmp.html',
    styleUrls: ['app/kanban/task/task_cmp.css'],
    directives: [formDirectives]
})

export class TaskCmp {
    description: string = 'd';
    owner: string = 'o';
    taskForm: ControlGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {

        this.taskForm = fb.group({
            "description": ["", Validators.required],
            "owner": ["", Validators.required]
        });
    }
}
