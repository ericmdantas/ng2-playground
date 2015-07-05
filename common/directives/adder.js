"use strict";
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
var Adder = (function () {
    function Adder() {
        console.log(this.todoForm);
    }
    Adder = __decorate([
        angular2_1.Component({
            selector: 'adder'
        }),
        angular2_1.View({
            template: "\n        <button type=\"button\"\n            logger\n            (^click)=\"add(tmessage);\"\n            [disabled]=\"!todoForm.valid\"\n            nc (^next-color)=\"onNextColor($event)\">+</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Adder);
    return Adder;
})();
exports.Adder = Adder;
