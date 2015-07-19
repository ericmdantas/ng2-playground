/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {formDirectives, ControlGroup, FormBuilder} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {TaskModel} from './task_model';
import {TaskService} from './task_service';
import {TaskType} from './task_type';
import {TaskContainer} from '../task_container/task_container_cmp';

@Component({
    selector: 'task-cmp',
    viewInjector: [TaskService, TaskModel]
})
@View({
    templateUrl: 'app/kanban/task/task_cmp.html',
    styleUrls: ['app/kanban/task/task_cmp.css'],
    directives: [formDirectives, TaskContainer]
})

export class TaskCmp {
    taskList: List<TaskType> = [];
    taskForm: ControlGroup;
    service: TaskService;

    @Inject(TaskModel, TaskService)
    constructor(taskModel: TaskModel, ts: TaskService) {
        this.service = ts;
        this.taskForm = taskModel.form;
    }

    add(desc: string, owner: string):void {
        let _task = {description: desc, owner: owner};

        this
            .service
            .add(_task)
            .subscribe(o => {
                this.taskList.push(_task);
            });
    }

    taskRemovedHandler(id: string|number):void {
        console.log(id);
    }

    taskMovedHandler():void {
        console.log('task moved');
    }
}
