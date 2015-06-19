/// <reference path="../../typings/tsd.d.ts" />
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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('angular2/src/http/http');
var angular2_1 = require('angular2/angular2');
var async_1 = require('angular2/src/facade/async');
var TodoDAO = (function () {
    function TodoDAO(http) {
        this.http = http;
    }
    TodoDAO.prototype.getAll = function () {
        return this.http('/todos');
    };
    TodoDAO.prototype.add = function (info) {
        return new async_1.Promise(function (res, rej) { return res(info); });
    };
    TodoDAO.prototype.remove = function (info) {
        return new async_1.Promise(function (res, rej) { return res(info); });
    };
    TodoDAO = __decorate([
        __param(0, angular2_1.Inject(http_1.HttpFactory)), 
        __metadata('design:paramtypes', [(typeof IHttp !== 'undefined' && IHttp) || Object])
    ], TodoDAO);
    return TodoDAO;
})();
exports.TodoDAO = TodoDAO;
