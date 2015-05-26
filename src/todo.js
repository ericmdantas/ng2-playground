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
var angular2_1 = require("angular2/angular2");
var directives_1 = require("angular2/directives");
var forms_1 = require("angular2/forms");
var Todo = (function () {
    function Todo(fb) {
        this.todos = [];
        this.todoForm = fb.group({
            message: ["", forms_1.Validators.required]
        });
    }
    Todo.prototype.add = function (message) {
        this.todos.push({ id: Date.now(), value: message });
    };
    Todo.prototype.remove = function (id) {
        var _this = this;
        this.todos.forEach(function (t, i) {
            if (t.id === id) {
                _this.todos.splice(1, i);
                return;
            }
        });
    };
    Todo.prototype.clear = function () {
        this.todos.length = 0;
    };
    Todo = __decorate([
        angular2_1.ComponentAnnotation({ selector: 'todo', appInjector: [forms_1.FormBuilder] }),
        angular2_1.ViewAnnotation({ templateUrl: 'todo.html', directives: [directives_1.NgFor, directives_1.NgIf, forms_1.formDirectives] }), 
        __metadata('design:paramtypes', [(typeof FormBuilder !== 'undefined' && FormBuilder) || Object])
    ], Todo);
    return Todo;
})();
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map