/// <reference path="../../typings/tsd.d.ts" />
var async_1 = require('angular2/src/facade/async');
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.add = function (value) {
        return new async_1.Promise(function (res, rej) {
            setTimeout(function (_) { return res(value); }, 333);
        });
    };
    TodoService.prototype.remove = function (id) {
        return new async_1.Promise(function (res, rej) {
            setTimeout(function (_) { return res(id); }, 444);
        });
    };
    return TodoService;
})();
exports.TodoService = TodoService;
