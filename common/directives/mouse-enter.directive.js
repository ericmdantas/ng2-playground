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
var MouseEnter = (function () {
    function MouseEnter(el) {
        el.nativeElement.addEventListener('mouseenter', function (_) { return console.log("you hovered me: " + el.nativeElement.innerText + " at " + new Date()); });
        el.nativeElement.addEventListener('click', function (ev) { return console.log("don't " + ev.type + " me!"); });
        el.nativeElement.addEventListener('dblclick', function (ev) { return console.log("don't " + ev.type + " me!"); });
    }
    MouseEnter = __decorate([
        angular2_1.Component({
            selector: 'mouse-goes-here'
        }),
        angular2_1.View({
            template: "<span class=\"moar-info\">*mouse over me and check the console</span>"
        }),
        __param(0, di_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [(typeof ElementRef !== 'undefined' && ElementRef) || Object])
    ], MouseEnter);
    return MouseEnter;
})();
exports.MouseEnter = MouseEnter;
