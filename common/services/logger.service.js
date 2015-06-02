/// <reference path="../../typings/angular2/angular2.d.ts" />
var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        console.log("I log stuff! It's " + new Date());
    };
    return LoggerService;
})();
exports.LoggerService = LoggerService;
