var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomError = /** @class */ (function () {
    function CustomError(error) {
        this.error = error;
    }
    return CustomError;
}());
var ConnectionError = /** @class */ (function (_super) {
    __extends(ConnectionError, _super);
    function ConnectionError(error) {
        return _super.call(this, error) || this;
    }
    ConnectionError.prototype.createErrorMessage = function () {
        this.errorMessage = "Connection error: " + this.error.message;
    };
    ConnectionError.prototype.logError = function () {
        console.log(this.errorMessage);
    };
    return ConnectionError;
}(CustomError));
var DBError = /** @class */ (function (_super) {
    __extends(DBError, _super);
    function DBError(error) {
        return _super.call(this, error) || this;
    }
    DBError.prototype.createErrorMessage = function () {
        this.errorMessage = "DB error: " + this.error.message;
    };
    DBError.prototype.logError = function () {
        console.log(this.errorMessage);
    };
    DBError.prototype.createAlert = function () {
        console.log("Alert Sent");
    };
    return DBError;
}(CustomError));
var errorDecorator = function (customError) {
    customError.createErrorMessage();
    customError.logError();
    if (customError instanceof DBError) {
        customError.createAlert();
    }
};
var mainLiskov = function () {
    var dbError = new DBError(new Error("DB err1"));
    errorDecorator(dbError);
};
mainLiskov();
//# sourceMappingURL=solution.js.map