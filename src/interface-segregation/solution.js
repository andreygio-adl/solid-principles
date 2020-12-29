var CreditCardPaymentProvider = /** @class */ (function () {
    function CreditCardPaymentProvider() {
    }
    CreditCardPaymentProvider.prototype.validate = function () {
        // Payment is validated
        console.log("Payment Card Validated");
        return true;
    };
    CreditCardPaymentProvider.prototype.getPaymentCommission = function () {
        // Commission is returned
        return 10;
    };
    CreditCardPaymentProvider.prototype.processPayment = function () {
        // Payment processed
        console.log("Payment Processed");
        return "Payment Fingerprint";
    };
    CreditCardPaymentProvider.prototype.verifyPayment = function () {
        // No verify Payment API exist
        // Return false to just implement the Payment Provider
        return false;
    };
    return CreditCardPaymentProvider;
}());
var WalletPaymentProvider = /** @class */ (function () {
    function WalletPaymentProvider() {
    }
    WalletPaymentProvider.prototype.validate = function () {
        // No validate method exists
        // Just for sake of implementation return false
        return false;
    };
    WalletPaymentProvider.prototype.getPaymentCommission = function () {
        // Commission is returned
        return 5;
    };
    WalletPaymentProvider.prototype.processPayment = function () {
        // Payment processed
        console.log("Payment Processed");
        return "Payment Fingerprint";
    };
    WalletPaymentProvider.prototype.verifyPayment = function () {
        // Payment verification does exist on Wallet Payment Provider
        console.log("Payment Verified");
        return false;
    };
    return WalletPaymentProvider;
}());
//# sourceMappingURL=solution.js.map