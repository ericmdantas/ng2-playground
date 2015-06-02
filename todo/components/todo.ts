/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Validators, ControlGroup, FormBuilder, formDirectives} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {ImportantText} from '../../common/directives/important-text.directive';
import {Uppercase} from '../../common/directives/uppercase.directive';
import {Logger} from '../../common/directives/logger.directive';
import {MouseEnter} from '../../common/directives/mouse-enter.directive';
import {RandomMessage} from '../../common/services/randomizer.service';
import {TodoService} from '../../common/services/todo.service';

interface ITodoList {
    message: string;
    id: number;
}

@Component({
    selector: 'todo',
    appInjector: [FormBuilder, RandomMessage, TodoService]
})
@View({
    templateUrl: 'todo/components/todo.html',
    directives: [NgFor, formDirectives, ImportantText, Uppercase, Logger, MouseEnter]
})
export class Todo {
    title: string = 'todo!';
    message: string;
    id: number;
    todoList: Array<ITodoList>;
    todoForm: ControlGroup;
    ts: TodoService;

    constructor(@Inject(FormBuilder) fb: FormBuilder, r: RandomMessage, ts: TodoService) {
        this.message = '';
        this.id = 0;
        this.todoList = [];
        this.ts = ts;

        this.todoForm = fb.group({
            "message": [r.randomIt(), Validators.required]
        });
    }

    add(info:{value:string}) {
        this
            .ts
            .add(info.value)
            .then(r => this.todoList.push({message: r, id: Date.now()}));
    }

    remove(id:number) {
        this
            .ts
            .remove(id)
            .then(r => {
                this.todoList.forEach((t, i) => {
                    if (t.id === r)
                        return this.todoList.splice(1, i);
            });
        });
    }
}
