/// <reference path="../typings/tsd.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ComponentAnnotation as Component, ViewAnnotation as View } from "angular2/angular2";
import { NgFor, NgIf } from "angular2/directives";
import { Validators, formDirectives, FormBuilder } from "angular2/forms";
export let Todo = class {
    constructor(fb) {
        this.todos = [];
        this.todoForm = fb.group({
            message: ["", Validators.required]
        });
    }
    add(message) {
        this.todos.push({ id: Date.now(), value: message });
    }
    remove(id) {
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
};
Object.defineProperty(Todo, "name", { value: "Todo", configurable: true });
Todo = __decorate([
    Component({ selector: 'todo', appInjector: [FormBuilder] }),
    View({ templateUrl: 'todo.html', directives: [NgFor, NgIf, formDirectives] }), 
    __metadata('design:paramtypes', [(typeof FormBuilder !== 'undefined' && FormBuilder) || Object])
], Todo);
//# sourceMappingURL=todo.js.map