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
var angular2_1 = require('angular2/angular2');
var logger_service_1 = require('../services/logger.service');
var Logger = (function () {
    function Logger(l) {
        this.logger = l;
    }
    Logger.prototype.log = function () {
        this.logger.log();
    };
    Logger = __decorate([
        angular2_1.Directive({
            selector: '[logger]',
            hostInjector: [logger_service_1.LoggerService],
            hostListeners: {
                'click': 'log()',
                'keyup.enter': 'log()'
            }
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], Logger);
    return Logger;
})();
exports.Logger = Logger;