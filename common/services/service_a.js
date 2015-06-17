/// <reference path="../../typings/tsd.d.ts" />
var ServiceA = (function () {
    function ServiceA(a) {
        this.name = 'service_a';
        console.log(a);
    }
    return ServiceA;
})();
exports.ServiceA = ServiceA;
