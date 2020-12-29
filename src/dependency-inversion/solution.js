var GrayLog = /** @class */ (function () {
    function GrayLog() {
    }
    GrayLog.prototype.saveLog = function (logObject) {
        console.log("Log Saved to Graylog for logObject");
    };
    return GrayLog;
}());
var RedisLog = /** @class */ (function () {
    function RedisLog() {
    }
    RedisLog.prototype.sendLog = function (logMessage) {
        console.log("Log Sent to Redis for logMessage");
    };
    return RedisLog;
}());
var errorDecoratorDI = function (error) {
    var log = new GrayLog();
    log.saveLog(error);
};
var mainDI = function () {
    errorDecoratorDI(new Error("Error Message"));
};
mainDI();
//# sourceMappingURL=solution.js.map