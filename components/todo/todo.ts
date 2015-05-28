/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({selector: 'todo'})
@View({templateUrl: 'components/todo/todo.tpl.html'})
export class Todo {
    title: string;
    constructor() {
        this.title = 'Todo';
    }
}