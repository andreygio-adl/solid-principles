var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email, message) {
        console.log("Email Sent: " + message + " to " + email);
    };
    return EmailService;
}());
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this._emailService = new EmailService();
    }
    NotificationService.prototype.sendNotification = function (email, message) {
        this._emailService.sendEmail(email, message);
    };
    return NotificationService;
}());
var main = function () {
    var notificationService = new NotificationService();
    notificationService.sendNotification("hello@example.com", "Generic Notification");
};
main();
//# sourceMappingURL=solution.js.map