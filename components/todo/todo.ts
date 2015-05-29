/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {NgFor} from 'angular2/directives';
import {Validators, formDirectives, ControlGroup, FormBuilder} from 'angular2/forms';

@Component({
    selector: 'todo'
})
@View({
    templateUrl: 'components/todo/todo.tpl.html',
    directives: [NgFor, formDirectives]
})
export class Todo {
    title: string;
    todos: any[];
    todoForm: ControlGroup;
    secretWordChecker: EventEmitter;

    constructor() {
        var _fb = new FormBuilder();

        this.title = 'Todo';
        this.todos = [];
        this.secretWordChecker = new EventEmitter();

        this.todoForm = _fb.group({
            "message": ["abc", Validators.required]
        });
    }

    add(message:string) {
        this.todos.push({value: message, id: Date.now()});
    }

    remove(id:number) {
        this.todos.forEach((t, i) =>
        {
            if (id === t.id)
                this.todos.splice(1, i);
        });
    }
}