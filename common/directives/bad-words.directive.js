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
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var Bad = (function () {
    function Bad(ee) {
        this.badWord = ee;
    }
    Bad.prototype.badWordFound = function (ev) {
        var _val = ev.target.value;
        var _msg = 'u cool';
        if (_val.indexOf('shiiiet') > -1)
            _msg = "u wot m8 - dont u " + _val + " me, bruh";
        this.badWord.next({ msg: _msg });
    };
    Bad = __decorate([
        angular2_1.Directive({
            selector: '[bad]',
            events: ['badWord'],
            hostInjector: [angular2_1.EventEmitter],
            hostListeners: {
                input: 'badWordFound($event)'
            }
        }),
        __param(0, di_1.Inject(angular2_1.EventEmitter)), 
        __metadata('design:paramtypes', [(typeof EventEmitter !== 'undefined' && EventEmitter) || Object])
    ], Bad);
    return Bad;
})();
exports.Bad = Bad;
