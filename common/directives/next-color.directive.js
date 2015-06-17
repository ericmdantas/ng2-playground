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
var NextColor = (function () {
    function NextColor(ee) {
        this.colors = ['red', 'blue', 'yellow', 'green', 'orange', 'black', 'gray', 'pink', 'white', 'steelblue', 'tomato', 'salmon'];
        this.nextColor = ee;
    }
    NextColor.prototype.nextColorActivated = function (ev) {
        this.nextColor.next(this.colors[Math.floor(Math.random() * this.colors.length)]);
    };
    NextColor = __decorate([
        angular2_1.Directive({
            selector: '[nc]',
            events: ['nextColor'],
            hostInjector: [angular2_1.EventEmitter],
            hostListeners: {
                'click': 'nextColorActivated($event)',
                'keyup.enter': 'nextColorActivated($event)'
            }
        }),
        __param(0, di_1.Inject(angular2_1.EventEmitter)), 
        __metadata('design:paramtypes', [(typeof EventEmitter !== 'undefined' && EventEmitter) || Object])
    ], NextColor);
    return NextColor;
})();
exports.NextColor = NextColor;
