/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {NgFor, NgIf} from 'angular2/directives';

@Component({
    selector: 'task-container',
    events: ['taskMoved', 'taskRemoved'],
    properties: ['taskList', 'containerTitle'],
    viewInjector: [EventEmitter]
})
@View({
    templateUrl: 'app/kanban/task_container/task_container_cmp.html',
    styleUrls: ['app/kanban/task_container/task_container_cmp.css'],
    directives: [NgFor, NgIf]
})

export class TaskContainer {
    taskMoved: EventEmitter;
    taskRemoved: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.taskMoved = ee;
        this.taskRemoved = ee;
    }

    moved():void {
        this.taskMoved.next({});
    }

    removed(id: string|number):void {
        this.taskRemoved.next({id: id});
    }
}
