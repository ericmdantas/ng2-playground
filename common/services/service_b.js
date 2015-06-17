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
var di_1 = require('angular2/di');
var service_a_1 = require('./service_a');
var ServiceB = (function () {
    function ServiceB(sa) {
        this.name = 'service_b';
        this.sa = sa;
    }
    ServiceB = __decorate([
        __param(0, di_1.Inject(service_a_1.ServiceA)), 
        __metadata('design:paramtypes', [service_a_1.ServiceA])
    ], ServiceB);
    return ServiceB;
})();
exports.ServiceB = ServiceB;
