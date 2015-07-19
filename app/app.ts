/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {TaskCmp} from 'app/kanban/task/task_cmp';
import {TheRemover} from 'app/kanban/common/the_remover';
import {formInjectables} from 'angular2/forms';

@Component({
    selector: 'app'
})
@View({
    template: `
        <task-cmp></task-cmp>
    `
})

export class App {
    constructor() {
        console.log('App initialized.');
    }
}

bootstrap(TaskCmp, [formInjectables]);
