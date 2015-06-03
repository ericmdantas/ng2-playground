/// <reference path="../../typings/tsd.d.ts" />
var RandomMessage = (function () {
    function RandomMessage() {
        this.messages = [
            "something important",
            "go out",
            "wut",
            "walk the dog",
            "do something",
            "something else",
            "nothing",
            "free today0",
            "free today1",
            "free today2",
            "free today3",
            "free today4"
        ];
    }
    RandomMessage.prototype.randomIt = function () {
        var _r = Math.floor(Math.random() * this.messages.length);
        return this.messages[_r];
    };
    return RandomMessage;
})();
exports.RandomMessage = RandomMessage;
