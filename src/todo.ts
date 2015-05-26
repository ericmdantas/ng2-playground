/// <reference path="../typings/tsd.d.ts" />

import {ComponentAnnotation as Component, ViewAnnotation as View} from "angular2/angular2";
import {NgFor, NgIf} from "angular2/directives"; import {ControlGroup, Validators, formDirectives, FormBuilder} from "angular2/forms";

@Component({selector: 'todo', appInjector: [FormBuilder]})
@View({templateUrl: 'todo.html', directives: [NgFor, NgIf, formDirectives]})
export class Todo {
    todoForm:Object;
    todos:Array<{id:number, value:string}>;
    constructor(fb:FormBuilder) {
        this.todos = [];

        this.todoForm = fb.group({
            message: ["", Validators.required]
        });
    }

    add(message:string) {
        this.todos.push({id: Date.now(), value: message});
    }

    remove(id:number) {
        this.todos.forEach((t, i) => {
            if (t.id === id) {
                this.todos.splice(1, i);
                return;
            }
        });
    }

    clear() {
        this.todos.length = 0;
    }
}